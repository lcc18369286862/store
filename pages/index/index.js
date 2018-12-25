// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shops:[{
      src:"../../image/dingdan.png",
      name:"叫了只鸡店（大兴店）",
      grade:"4.8",
      sales:"1414",
      shippingTime:"34",
      distance:"2.5km",
      price:"20",
      postage:"3.4",
      type:"炸鸡炸串",
      specialitites:["20减11","40减22","支持自取","急速退款"]
    }, {
        src: "../../image/dingdan.png",
        name: "薇薇安（老城根Gpark店）",
        grade: "4.4",
        sales: "497",
        shippingTime: "30",
        distance: "1.9km",
        price: "20",
        postage: "4",
        type: "点评高分店铺",
        specialitites: ["30减10","60减15","急速退款"]
    },{
        src: "../../image/dingdan.png",
        name: "CoCo都可茶饮（印象城店）",
        grade: "4.5",
        sales: "1249",
        shippingTime: "30",
        distance: "2.0km",
        price: "20",
        postage: "4",
        type: "点评高分店铺",
        specialitites: ["首单减13"]
    }],
    location:"",
    search_position:"position: absolute",
    allowScroll:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var longitu = 0;
    var latitu = 0;
    var that = this;
    wx.getLocation({
      success: function(res) {
        longitu = res.longitude;
        latitu = res.latitude;
        console.log(longitu + latitu)
        // 引入SDK核心类
        var QQMapWX = require('../../src/qqmap-wx-jssdk.js');

        // 实例化API核心类
        var demo = new QQMapWX({
          key: '4HMBZ-HP335-HUFII-QNT3F-DOD7V-LYB7V' // 必填
        });

        // 调用接口
        demo.reverseGeocoder({
          location: {
            latitude: latitu,
            longitude: longitu
          },
          get_poi:1,
          poi_options: "policy=2",
          success: function (res) {
            that.setData({
              location: res.result.address_component.street_number});
            console.log(res)
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            // console.log(res);
          }
        });
      },
    })
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
  onclick: ()=> {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  turntoshop: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../shop/shop?id='+id,
    })
  },
  // getLocation: function(){

  // },
  onPageScroll:function(e){
    var flag = this.data.allowScroll;
    if (parseInt(flag &&e.scrollTop)>=35){
      // console.log(true);
      this.setData({ search_position: "position: fixed;top:0", allowScroll:false});
    } else if (!flag &&parseInt(e.scrollTop) < 35){
      this.setData({ search_position: "position: absolute", allowScroll: true});
    }
  }
})