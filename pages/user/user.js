//获取应用实例
const app = getApp()
Page({
  data: {
    hasUserInfo: false,
    userInfo:{},
    user_menu:["平台红包","商家代金券","我的地址","邀请有奖","客服中心","帮助和反馈","协议和说明","修改手机号"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
      userInfo:{}
    })
  },
  onShow: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(this.data.userInfo);
  },
  turnLogin: function(e) {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  logOff: function(){
    var that = this;
    wx.showModal({
      title: '确定退出？',
      content: '退出登录将无法查看订单，重新登录后即可查看',
      success(res) {
        if (res.confirm) {
          that.setData({ hasUserInfo: false, userInfo:{}});
          app.globalData.userInfo = null;
          // console.log('确定')
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  }
})
