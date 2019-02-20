// pages/service/addRemark/addRemark.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commonRemark: ["不吃辣", "少放辣", "多放辣", "不吃蒜", "不吃香菜", "不吃葱"],
    remark:"",
    fontNumber:0,
    item:{
      _messageToast: "备注最多50个字哦",
      isShow:false
    }
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
    var remark = app.globalData.current_order.remark;
    if (remark != undefined) {
      this.setData({ remark: remark, 
        fontNumber: remark.length
      });
    }
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
  // 输入框输入事件
  inputEvent:function(res){
    this.setData({ reamrk: res.detail.value, fontNumber: res.detail.value.length});
  },
  // 点击完成后
  formSubmit:function(res){
    // console.log(res.detail.value.remark);
    app.globalData.current_order.remark = res.detail.value.remark;
    wx.navigateBack({
      
    })
  },
  addRemark:function(res){
    var value = res.currentTarget.dataset.value;
    var remark = this.data.remark;
    remark += " "+ value;
    if (remark.length>50){
      remark = remark.substring(0,50);
      this.showMessage();
      // wx.showToast({
      //   title: '备注最多50字哦',
      //   icon: 'cancle',
      //   duration: 2000
      // })
    }
    this.setData({ remark: remark, fontNumber: remark.length });
  },
  // 弹出提示框
  showMessage: function () {
    var item = this.data.item;
    var that = this;
    item.isShow = true;
    this.setData({ item: item });
    setTimeout(function () {
      item = that.data.item;
      item.isShow = false;
      that.setData({ item: item })
    }, 2000);
  }
})