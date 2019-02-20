// pages/service/createOrder/createOrder.js 
const app = getApp(); 
Page({ 
 
  /** 
   * 页面的初始数据 
   */ 
  data: { 
    current_order: {},// 当前订单信息 
    address:[],//用户地址 
    current_time:{},//当前时间 
    showMore:false,//是否显示更多商品 
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
    var myDate = new Date(); 
    let current_time = { 
      year: myDate.getFullYear(), 
      month:myDate.getMonth()+1, 
      date:myDate.getDate(), 
      hour:myDate.getHours(), 
      minute:myDate.getMinutes(), 
    }; 
    this.setData({ address: app.globalData.address,  
      current_order: app.globalData.current_order,  
      current_time: current_time, 
    }); 
    console.log(this.data.current_order); 
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
  // 显示订单中的更多商品 
  showMoreGoods:function(){ 
    this.setData({ showMore:true}); 
  }, 
  // 隐藏订单中的更多商品 
  hiddenMoreGoods: function () { 
    this.setData({ showMore: false }); 
  } 
})