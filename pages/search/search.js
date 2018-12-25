// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: "",
    isHasText: false,
    hotSearch: ["冒菜", "泡馍", "粥", "胡辣汤", "黄焖鸡", "饺子", "过桥米线", "肉丸胡辣汤", "麻辣香锅", "披萨"]
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
    var sss = this;
    var searchtext = sss.data.searchText;
    console.log(searchtext);
    if (searchtext == "") {
      this.setData({ isHasText: false });
    } else {
      this.setData({ isHasText: true });
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
  doSearch: function(e) {
    let searchtext = e.detail.value;
    if (searchtext==""){
      this.setData({isHasText: false});
    }else{
      this.setData({isHasText: true});
    }
    this.setData({ searchText: searchtext});
  },
  cleanText: function() {
    this.setData({ searchText: "", isHasText: false });
  },
  hotSearch: function(e){
    var searchT = e.target.dataset.id;
    this.setData({ searchText: searchT, isHasText:true});
  }
})