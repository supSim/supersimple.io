const app = getApp();
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: 'icon-daifukuan',
      
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: 'icon-daifahuo',
      },
      {
        typeId: 2,
        name: '已发货',
        url: 'bill',
        imageurl: 'icon-yifahuo'
      },
      {
        typeId: 3,
        name: '签收',
        url: 'bill',
        imageurl: 'icon-qianshou'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  toPointmall: function () {
    wx.navigateTo({
      url: '../pointMall/pointMall'
    })
  },
  toCoupon: function () {
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  toCheaklist: function () {
    wx.navigateTo({
      url: '../checkList/checkList'
    })
  },
  toPersonalinfo: function () {
    wx.navigateTo({
      url: '../personalInfo/personalInfo'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
        that.setData({
        userInfo: userInfo
      })
    })
  }
})
