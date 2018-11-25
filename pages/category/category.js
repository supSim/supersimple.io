Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
    goodsCategory: [{id: '0', name: '全部商品'},
    {id: '1', name: '水果专区'},
    {id: '2', name: '生活专区'},
    {id: '3', name: '家有好菜'},
    {id: '4', name: '米面粮油'},
    {id: '5', name: '生活美食'},
    {id: '6', name: '团长专属'}],
    selectCategory: '0',
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
        preSaleStart: '11-21 20:00',
        preSaleEnd: '11-22 19:00',
        goodsPickTime: '11-23 12:05',
        categories: ['1', '5']
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
        preSaleStart: '11-21 20:00',
        preSaleEnd: '11-22 19:00',
        goodsPickTime: '11-23 12:05',
        categories: ['1', '2', '5']
      }
    ],
    filterGoodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'filterGoodsList': this.data.goodsList
    });
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

  changeCategory (event) {
    let id = event.currentTarget.dataset.id;
    if (id == this.data.selectCategory) return;
    this.setData({
      'selectCategory': id
    });
    if (this.data.selectCategory == 0) {
      this.setData({
        'filterGoodsList': this.data.goodsList
      });
      return;
    }
    let result = this.data.goodsList.filter(item => {
      return item.categories.indexOf(this.data.selectCategory) != -1;
    });
    this.setData({
      'filterGoodsList': result
    });
  }
})