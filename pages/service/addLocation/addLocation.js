// pages/service/addLoction/addLocation.js
const app = getApp();
/**
 * 获取当前位置的文字描述
 * 引入SDK核心类
 */
var QQMapWX = require('../../../src/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var qqSDK = new QQMapWX({
  key: '4HMBZ-HP335-HUFII-QNT3F-DOD7V-LYB7V' // 必填
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAddress:false,
    near_mks: [],//附近的地方
    mks: [],//搜索得到的地址,
    isShow: true,//是否显示附近地址
    // 当前用户所在城市
    current_city: "",
    chooseAddress: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    let location = app.globalData.location;
    // 获取附近地点
    qqSDK.reverseGeocoder({
      location: {
        latitude: location.location.lat,
        longitude: location.location.lng
      },
      get_poi: 1,
      success: function (res) {
        that.setData({ near_mks: res.result.pois });
      },
      fail: function (err) {
        console.log(err);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
    // console.log(this.data.location)
    // 初始化页面数据
    that.setData({ location: app.globalData.location, current_city: app.globalData.current_city })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击“点击选择”
  click:function(){
    this.setData({ showAddress:true});
  },
  // 根据关键字查询地址
  doSearch: function (e) {
    var keyword = e.detail.value;
    var that = this;
    var mks = [];
    // 如果输入框输入的值不为空，就根据输入值获取最近的符合地点
    if (keyword != "" && keyword != null) {
      qqSDK.getSuggestion({
        keyword: keyword,
        region: app.globalData.current_city,
        policy: 'policy=1',
        success: function (res) {
          for (let i = 0; i < res.data.length; i++) {
            mks.push(res.data[i]);
          }
          that.setData({ mks: mks, isShow: false })
          // console.log(that.data.mks)
        },
        fail: function (error) {
          console.error(error);
        },
        complete: function (res) {
          // console.log(res)
        }
      })
    } else {
      that.setData({ isShow: true })
    }
  },
  // 改变用户地址
  changeLocation: function (e) {
    let newLocation = e.currentTarget.dataset.message;
    app.globalData.location = newLocation;
    wx.showToast({
      title: '成功修改地址',
      icon: 'success',
      duration: 2000
    });
    this.setData({ chooseAddress: newLocation.title, showAddress:false});
  },
  // 附近地址栏目的改变用户地址
  changeLocation1: function (e) {
    let message = e.currentTarget.dataset.message;
    let newLocation = {
      location: message.location,
      city: message.ad_info.city,
      title: message.title,
      adcode: message.adcode,
      province: message.adcode
    };
    app.globalData.location = newLocation;
    wx.showToast({
      title: '成功修改地址',
      icon: 'success',
      duration: 2000
    });
    this.setData({ chooseAddress: newLocation.title, showAddress: false});
  },
  // 改变用户的城市
  changeCity: function () {
    wx.navigateTo({
      url: '../changeCity/changeCity',
    })
  },
  submit:function(res){
    var value = res.detail.value;
    if (value.name == ""){
      wx.showToast({
        title: '请输入姓名',
        icon: 'warn',
        duration: 2000
      })
    } else if (value.phone == "" || (!(/^1[3|5|8|6|4][0-9]\d{4,8}$/.test(value.phone)))) {
      wx.showToast({
        title: '手机号填写错误',
        icon: 'warn',
        duration: 2000
      })
    } else if (value.detail == "") {
      wx.showToast({
        title: '请选择收货地址',
        icon: 'warn',
        duration: 2000
      })
    } else if (this.data.chooseAddress == "") {
      wx.showToast({
        title: '请输入门牌号信息',
        icon: 'warn',
        duration: 2000
      })
    }else{
      var address = app.globalData.address;
      address.push({
        city: app.globalData.current_city,
        title: this.data.chooseAddress,
        name: value.name,
        sex: value.sex,
        phone: value.phone,
        detail: value.detail,
        location: app.globalData.location.location
      })
      app.globalData.address = address;
      wx.navigateBack({
        
      })
    }
  }
})