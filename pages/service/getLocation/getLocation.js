// pages/service/getLoaction/getLoaction.js
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
    // 用户之前保存的地址
    address:[],
    //用户当前位置
    location: {},
    mks:[],//搜索得到的地址,
    isShow:true,
    // 当前用户所在城市
    current_city:"",
    near_mks:[],//附近的地方
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({ location: app.globalData.location});
    // console.log(this.data.location)
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
    var that =this;
    let location = app.globalData.location;
    // console.log(location)
    // 获取附近地点
    qqSDK.reverseGeocoder({
      location: {
        latitude: location.location.lat,
        longitude: location.location.lng
      }, 
      get_poi: 1,
      success:function(res){
        that.setData({ near_mks: res.result.pois});
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
    that.setData({ address: app.globalData.address, location: app.globalData.location, current_city:app.globalData.current_city})
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
  // 根据关键字查询地址
  doSearch:function(e){
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
          that.setData({ mks: mks, isShow: false})
          // console.log(that.data.mks)
        },
        fail: function (error) {
          console.error(error);
        },
        complete: function (res) {
          // console.log(res)
        }
      })
    }else{
      that.setData({ isShow: true })
    }
  },
  // 改变用户地址
  changeLocation:function(e){
    let newLocation = e.currentTarget.dataset.message;
    this.setData({ location: newLocation});
    app.globalData.location = newLocation;
    wx.showToast({
      title: '成功修改地址',
      icon: 'success',
      duration: 2000
    });
    wx.navigateBack({
      
    })
  },
  // 附近地址栏目的改变用户地址
  changeLocation1: function (e) {
    let message = e.currentTarget.dataset.message;
    let newLocation = {
      location:message.location,
      city:message.ad_info.city,
      title:message.title,
      adcode:message.adcode,
      province: message.province
    };
    this.setData({ location: newLocation });
    app.globalData.location = newLocation;
    wx.showToast({
      title: '成功修改地址',
      icon: 'success',
      duration: 2000
    });
    wx.navigateBack({

    })
  },
  // 改变用户的城市
  changeCity:function(){
    wx.navigateTo({
      url: '../changeCity/changeCity',
    })
  },
  // 重新定位
  reposition: function () {
    var that = this;
    // 获取当前位置
    var longitu = 0;
    var latitu = 0;
    // 获取当前位置坐标
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        longitu = res.longitude;
        latitu = res.latitude;
        // console.log(longitu + " " + latitu)
        // 调用接口
        qqSDK.reverseGeocoder({
          location: {
            latitude: latitu,
            longitude: longitu
          },
          get_poi: 1,
          success: function (res) {
            let location = res.result.pois[0];
            app.globalData.location = {
              location: location.location,
              title: location.title,
              city: location.ad_info.city,
              adcode: location.ad_info.adcode,
              province: location.ad_info.province
            };
            app.globalData.current_city = res.result.pois[0].ad_info.city;
            wx.navigateBack({

            })
          },
          fail: function (res) {
            wx.showToast({
              title: '解析地址错误',
              icon: 'loading',
              duration: 1000
            });
          },
          complete: function (res) {
            // console.log(res);
          }
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '获取地址错误',
          icon: 'loading',
          duration: 1000
        });
      }
    });
  }
})