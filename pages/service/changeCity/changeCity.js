// pages/service/changeCity/changeCity.js
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
    current_city:"",//当前城市
    // 热门城市
    hot_city: ["北京", "成都", "重庆", "广州", "杭州", "南京", "上海", "深圳","苏州", "天津", "武汉", "西安"]
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
    let current_city = app.globalData.current_city;
    // 把"西安市"变成"西安"
    if(current_city.charAt(current_city.length-1)=="市"){
      current_city=current_city.substring(0, current_city.length-1);
    }
    this.setData({ current_city: current_city });


    var _this = this;
    //调用获取城市列表接口
    qqSDK.getCityList({
      success: function (res) {//成功后的回调
        // console.log(res);
        // console.log('省份数据：', res.result[0]); //打印省份数据
        // console.log('城市数据：', res.result[1]); //打印城市数据
        // console.log('区县数据：', res.result[2]); //打印区县数据
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
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
  // 改变城市
  changeCity:function(e){
    app.globalData.current_city = e.currentTarget.dataset.city;
    wx.navigateBack({
      
    })
  }
})