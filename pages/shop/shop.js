// pages/shop/shop.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商铺所有信息
    shop: {
      name:"叫了只鸡店（大兴店）",
      deliver:"配送约30分钟  | 极速退款",
      notice: "公告：全场半价吃鸡，本店宗旨：秉承合理售价，合理利润...",
      tags:["29减20","49减23","79减30","新客减1","3折起","新客领2元卷"],
      sendingFee: 20,//起送费
      shippingRate:3.4,//配送费
      grade:{
        shopGrade:4.2,//商家评分
        tasteGrade: 4.2,//口味评分
        packGrade: 4.3,//包装评分
        deliveryGrade:4.8//配送评分
      },
      address:"西安市新陈股自强东路荣苑校区7-9号商业用房",
      phone:"14545345644",
      record:""
    },
    ShowView:0,//当前显示区域
    shop_column: ["折扣", "吃鸡必看", "鸡的同伙", "鸡的套餐", "鸡的伴侣", "叫了只鸡", "全国连锁","兑换专区"],
    showModal: false,//是否打开商品详细信息
    payMoney:0,//总价
    currentArea:0,//菜品滚动到的位置
    currentEstimateTags:0,//当前评论标签
    isShowShopInfo: false,//是否显示商品详细信息
    //筛选评论的标签
    estimateTags: [
      { name: "全部", count: 8226 }, 
      { name: "有图评价", count: 583 },
      { name: "好评", count: 7513 },
      { name: "差评", count: 408 },
      { name: "味道赞", count: 492 },
      { name: "分量足", count: 106 },
      { name: "包装好", count: 69 },
      { name: "满意", count: 66 },
      { name: "价格实惠", count: 46 },
      { name: "服务好", count: 44 }
    ],
    select_goods_index:{x:0,y:0},//选择菜品的位置
    //选择的商品
    select_goods: [],
    //订单信息
    orderForm:{
      totalPrice:0,
      selectGoods:{}
    },
    goodsCount:0,//商品总数
    needAddMoney:0,//还需要多少元才能下单
    //所有商品分类
    goods_area: [
    {
      info:"折扣（超过限购份数可原价购买）",
      goods:[
      {
        name:"叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info:"新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale:342,
        zan:21,
        price:19.9,
        oldPrice:39.8,
        limit:1,
        isDiscount:true,
        showModal:false,
        selectNums:0
      },{
        name: "叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale: 342,
        zan: 21,
        price: 19.9,
        oldPrice: 39.8,
        limit: 1,
        isDiscount: true,
        showModal: false,
        selectNums: 0
      }, {
        name: "叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale: 342,
        zan: 21,
        price: 19.9,
        oldPrice: 39.8,
        limit: 1,
        isDiscount: true,
        showModal: false,
        selectNums: 0
      }, {
        name: "叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale: 342,
        zan: 21,
        price: 19.9,
        oldPrice: 39.8,
        limit: 1,
        isDiscount: true,
        showModal: false,
        selectNums: 0
      }, {
        name: "叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale: 342,
        zan: 21,
        price: 19.9,
        oldPrice: 39.8,
        limit: 1,
        isDiscount: true,
        showModal: false,
        selectNums: 0
      }, {
        name: "叫了只鸡（孜然）",
        img: "/image/dingdan.png",
        short_info: "新店开业，全场5折！每天前10名送秘...",
        info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
        sale: 342,
        zan: 21,
        price: 19.9,
        oldPrice: 39.8,
        limit: 1,
        isDiscount: true,
        showModal: false,
        selectNums: 0
      }]
    }, {
        info: "折扣(超过限购份数可原价购买)",
        goods: [
          {
            name: "叫了只鸡（孜然）",
            img: "/image/dingdan.png",
            short_info: "新店开业，全场5折！每天前10名送秘...",
            info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
            sale: 342,
            zan: 21,
            price: 19.9,
            oldPrice: 39.8,
            limit: 1,
            isDiscount: false,
            showModal: false,
            selectNums: 0
          }, {
            name: "叫了只鸡（孜然）",
            img: "/image/dingdan.png",
            short_info: "新店开业，全场5折！每天前10名送秘...",
            info: "新店开业，全场5折！每天前10名送秘制鸡腿一个！外酥里嫩，秘制腌制，粉少汁多。",
            sale: 342,
            zan: 21,
            price: 19.9,
            oldPrice: 39.8,
            limit: 1,
            isDiscount: false,
            showModal: false,
            selectNums: 0
          }
        ]
      }
    ],
    // 用户评论
    comment:[{
        headPhoto:"https://wx.qlogo.cn/mmopen/vi_32/kiaq0UHzicoiafQspLxcedNMH87DjuphuvJWLTTQRLnwe42xGialdeDG0AsAVNnt59xdjDuRqiaL93xWT7gwm0uwkVA/132",
      name:"",
      datetime:"2019.01.16",
      grade:5,
      sendtime:19,
      message:"还不错，让朋友也点了一份。。",
      tags: { goodsTags: "皮蛋瘦肉粥，骨肉相连3串，鸡米花，招牌肉夹馍", sendTags:"货品完好，穿戴工服，风雨无阻，热情礼貌，快速准时，仪表整洁"},
      imgs:[]
    }, {
        headPhoto: "https://wx.qlogo.cn/mmopen/vi_32/kiaq0UHzicoiafQspLxcedNMH87DjuphuvJWLTTQRLnwe42xGialdeDG0AsAVNnt59xdjDuRqiaL93xWT7gwm0uwkVA/132",
        datetime: "2019.01.20",
        grade: 5,
        sendtime: 37,
        message: "口味不错，赞一个。",
        tags: { goodsTags: "", sendTags: "快速准时" },
        imgs: []
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   * 接收前一页面的商铺信息
   */
  onLoad: function (options) {
    // console.log(this.data.shop.notice.length);
    // console.log(this.data.shop.notice.substring(0, 1))
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
  // 显示商铺详细信息
  showShopInfo:function(){
    this.setData({ isShowShopInfo: true });
  },
  hiddenShopInfo:function(){
    this.setData({ isShowShopInfo: false });
  },
  /**
   * 展开商品详细信息
   */
  showMessage: function (e) {
    var x = e.currentTarget.dataset.areaid;
    var y = e.currentTarget.dataset.id;
    // console.log(e.currentTarget.dataset)
    var current_shop = this.data.goods_area[x].goods[y];
    this.setData({ showModal: true, select_goods: current_shop, select_goods_index:{areaId:x,id:y}});
  },
  /**
   * 关闭商品详细信息
   */
  hiddenModal: function(){
    this.setData({ showModal: false });
  },
  /**
   * 主菜单控制
   */
  menuButton:function(e){
    var currentId = e.currentTarget.dataset.id;
    this.setData({ ShowView: currentId});
  },
  /**
   * 点击左侧菜单，右侧菜单跳转到指定位置
   */
  turnArea:function(e){
    var current_area = e.currentTarget.dataset.id;
    this.setData({currentArea:current_area});
  },
  /**
   * 增加该商品到购物车的数量
   */
  addGoods: function (e) {
    var x = e.currentTarget.dataset.areaid;
    var y = e.currentTarget.dataset.id;
    // console.log(this.data.select_goods_index)
    // console.log(e);
    this.data.goods_area[x].goods[y].selectNums+=1;
    var total_price = this.data.orderForm.totalPrice + this.data.goods_area[x].goods[y].price;
    total_price = parseInt(total_price*10)/10;
    var datas = this.data.goods_area;
    var selectGoods = this.data.goods_area[x].goods[y];
    this.setData({ goods_area: datas, select_goods: selectGoods, 'orderForm.totalPrice': total_price, needAddMoney: parseInt(this.data.shop.sendingFee * 10 - total_price * 10) / 10, goodsCount: this.data.goodsCount + 1});
  },
  /**
   * 减少该商品到购物车的数量
   */
  subGoods: function (e) {
    var x = e.currentTarget.dataset.areaid;
    var y = e.currentTarget.dataset.id;
    var selectNums = this.data.goods_area[x].goods[y].selectNums;
    var total_price = this.data.orderForm.totalPrice;
    if (selectNums>=0){
      this.data.goods_area[x].goods[y].selectNums -= 1;
      total_price -= this.data.goods_area[x].goods[y].price;
    }
    total_price = parseInt(total_price * 10) / 10;
    var datas = this.data.goods_area;
    var selectGoods = this.data.goods_area[x].goods[y];
    this.setData({ goods_area: datas, select_goods: selectGoods, 'orderForm.totalPrice': total_price, needAddMoney: parseInt(this.data.shop.sendingFee * 10 - total_price * 10) / 10, goodsCount: this.data.goodsCount-1}); 
  },
  // 点击标签筛选评论
  filtrate:function(e){
    let tags = e.currentTarget.dataset.id;
    this.setData({ currentEstimateTags:tags});
  },
  //给商家打电话
  callUp: function () {
    wx.showActionSheet({
      itemList: ['确定拨打商家电话'],
      success(res) {
        wx.makePhoneCall({
          phoneNumber: '12345675444' // 仅为示例，并非真实的电话号码
        });
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 展示公司资质
  turnRecord:function(){
    let name = this.data.shop.name;
    wx.navigateTo({
      url: '../service/shopRecord/shopRecord?name=' + name,
    })
  },
  // 防止点击数字时展开弹框
  inanition:function(){},
  //跳转提交订单页面
  submitOrder:function(){
    var select_goods =[];
    var goods_area = this.data.goods_area;
    for (let i = 0; i < goods_area.length; i++){
      let goods = goods_area[i].goods;
      for (let j = 0; j < goods.length;j++){
        if (goods[j].selectNums>0){
          select_goods.push(goods[j]);
        }
      }
    }
    app.globalData.current_order ={
      shopName:this.data.shop.name,
      goods:select_goods,
      shippingRate: this.data.shop.shippingRate,
    };
    wx.navigateTo({
      url: '../service/createOrder/createOrder',
    })
  }
})