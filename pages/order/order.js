// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:[true,false,false],
    isChecked: ["checked","",""],
    orderForm:[{
      img:"../../image/dingdan.png",
      name:"蜜雪冰城（鱼斗路店）",
      type:2,
      goods: [{ name: "茉莉蜜茶", count:1},
        { name: "巧克力圣代", count: 1 },
        { name: "红豆奶茶", count: 1 }
      ],
      count: 4,
      money: 23.1
    }, {
        img: "../../image/dingdan.png",
        name: "蜜雪冰城（鱼斗路店）",
        type: 2,
        goods: [{ name: "茉莉蜜茶", count: 1 },
        { name: "巧克力圣代", count: 1 },
        { name: "红豆奶茶", count: 1 }
        ],
        count: 4,
        money: 23.1
      }, {
        img: "../../image/dingdan.png",
        name: "蜜雪冰城（鱼斗路店）",
        type: 1,
        goods: [{ name: "茉莉蜜茶", count: 1 },
        { name: "巧克力圣代", count: 1 },
        { name: "红豆奶茶", count: 1 }
        ],
        count: 4,
        money: 23.1
      }, {
        img: "../../image/dingdan.png",
        name: "蜜雪冰城（鱼斗路店）",
        type: 1,
        goods: [{ name: "茉莉蜜茶", count: 1 },
        { name: "巧克力圣代", count: 1 },
        { name: "红豆奶茶", count: 1 }
        ],
        count: 4,
        money: 23.1
      }
    ]
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
  showMessage: function(e){
    var id = parseInt( e.currentTarget.dataset.id);
    var isShows = new Array(3);
    var isCheck = new Array(3);
    for(var i = 0 ; i < 3 ; i ++){
      if(i==id){
        isShows[i] = true;
        isCheck[i] = "checked";
      } else {
        isShows[i] = false;
        isCheck[i] = "";
      }
    }
    this.setData({ isShow: isShows, isChecked: isCheck});
  }
})