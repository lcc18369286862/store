// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: {
      deliver:"配送约30分钟  | 极速退款",
      notice: "公告：全场半价吃鸡，本店宗旨：秉承合理售价，合理利润...",
      tags:["29减20","49减23","79减30","新客减1","3折起","新客领2元卷"]
    },
    font_weight: [900,100,100],
    isShowView:[true,false,false],
    shop_column: ["折扣","吃鸡必看","鸡的同伙","鸡的套餐","鸡啊伴侣","叫了只鸡","全国连锁","兑换专区"],
    showModal: false,
    select_goods: {
    },
    goods_area: [
    {
      info:"折扣（超过限购份数可原价购买）",
      goods:[
      {
        name:"叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
        info:"新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale:342,
        zan:21,
        price:19.9,
        oldPrice:39.8,
        limit:1,
        isDiscount:true,
        showModal:false
      },{
          name: "叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
          info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
          sale: 342,
          zan: 21,
          price: 19.9,
          oldPrice: 39.8,
          limit: 1,
          isDiscount: true,
          showModal: false
        }, {
          name: "叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
          info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
          sale: 342,
          zan: 21,
          price: 19.9,
          oldPrice: 39.8,
          limit: 1,
          isDiscount: true,
          showModal: false
        }, {
          name: "叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
          info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
          sale: 342,
          zan: 21,
          price: 19.9,
          oldPrice: 39.8,
          limit: 1,
          isDiscount: true,
          showModal: false
        }, {
          name: "叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
          info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
          sale: 342,
          zan: 21,
          price: 19.9,
          oldPrice: 39.8,
          limit: 1,
          isDiscount: true,
          showModal: false
        }, {
          name: "叫了只鸡（孜然）",
          img: "../../image/dingdan.png",
          short_info: "新店开业，全场5折！每天前10名送秘...",
          info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
          sale: 342,
          zan: 21,
          price: 19.9,
          oldPrice: 39.8,
          limit: 1,
          isDiscount: true,
          showModal: false
        }
      ]
      }, {
        info: "折扣(超过限购份数可原价购买)",
        goods: [
          {
            name: "叫了只鸡（孜然）",
            img: "../../image/dingdan.png",
            short_info: "新店开业，全场5折！每天前10名送秘...",
            info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
            sale: 342,
            zan: 21,
            price: 19.9,
            oldPrice: 39.8,
            limit: 1,
            isDiscount: false,
            showModal: false
          }, {
            name: "叫了只鸡（孜然）",
            img: "../../image/dingdan.png",
            short_info: "新店开业，全场5折！每天前10名送秘...",
            info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
            sale: 342,
            zan: 21,
            price: 19.9,
            oldPrice: 39.8,
            limit: 1,
            isDiscount: false,
            showModal: false
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var app = getApp();
    // console.log(app.investid);
    console.log(options);
    wx.setNavigationBarTitle({
      title: options.id,
      success: function (res) {
        // success
      }
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
  showView: function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  showMessage: function(e){
    var xy = e.currentTarget.dataset.id;
    var x = parseInt(xy.substring(0, 1));
    var y = parseInt(xy.substring(1,2));
    var current_shop = this.data.goods_area[x].goods[y];
    this.setData({ showModal: true, select_goods: current_shop});
  },
  hiddenModal: function(){
    this.setData({ showModal: false });
  },
  menuButton:function(e){
    var currentId = e.currentTarget.dataset.id;
    var fontWeights = new Array(3);
    var isShowViews = new Array(3);
    for(var i = 0 ; i < 3 ; i++){
      if (i = currentId){
        fontWeights[i] = 900;
        isShowViews[i] = true;
      } else {
        fontWeights[i] = 100;
        isShowViews[i] = false;
      }
    }
    // this.setData({ font_weight: fontWeights, isShowView: isShowViews});
    console.log(e);
  }
})