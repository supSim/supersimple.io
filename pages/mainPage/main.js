Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    swipeImageUrl: [   "http://pic.58pic.com/58pic/14/03/02/58V58PICTFk_1024.jpg",
      "http://tp.yiaedu.com/showimg.php?url=http://uploads.xuexila.com/allimg/1703/867-1F330164643.jpg",
      "http://www.17qq.com/img_qqtouxiang/76490995.jpeg"
    ],
    searchKey: '',
    shopDesc: {
      shopName: '超简单小店',
      shopDesc: '超简单， 让购物超简单',
      shopLoc: '华夏村33号',
      shopImage: '',
      fans: 177,
      buyPoint: 1733
    },
    goodsList: [
      {
        goodsId: '123456',
        goodsImage: "http://pic.58pic.com/58pic/14/03/02/58V58PICTFk_1024.jpg",
        goodsName: '哈密瓜',
        goodsDesc: '【秒杀】',
        goodsWeight: '4斤土0.3',
        goodsLable: ['限时卖', '酸甜可口 水分超足'],
        goodsPrice: '7.98',
        goodsSaleNum: '99',
        goodsRemain: '1',
        preSaleTime: '11-21 20:00 - 11-22 19:00',
        goodsPickTime: '11-23 12:05'
      },
      {
        goodsId: '123456',
        goodsImage: "http://pic.58pic.com/58pic/14/03/02/58V58PICTFk_1024.jpg",
        goodsName: '哈密瓜',
        goodsDesc: '【秒杀】',
        goodsWeight: '4斤土0.3',
        goodsLable: ['限时卖', '酸甜可口 水分超足'],
        goodsPrice: '7.98',
        goodsSaleNum: '99',
        goodsRemain: '1',
        preSaleTime: '11-21 20:00 - 11-22 19:00',
        goodsPickTime: '11-23 12:05'
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

  toGoodsDetail (event) {
    console.log(event.currentTarget.dataset.goodsId);
  }
})