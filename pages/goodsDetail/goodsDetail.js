Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1,
    goods: {
      goodsId: '123456',
      goodsName: '哈密瓜',
      goodsDesc: '【人气水果】',
      goodsImage: 'http://pic.58pic.com/58pic/14/03/02/58V58PICTFk_1024.jpg',
      goodsRealPrice: '9.88',
      goodsOriginPrice: '15.22',
      focusNum: 199,
      preSaleTime: '11-21 20:00 - 11-22 19:00',
      goodsPickTime: '11-23 12:05',
      goodsSaleNum: 199,
      goodsRemain: 1
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

  changeTab: function (event) {
    let whichPage = event.detail;
    if (this.currentPage == whichPage) return;
    this.setData({
      'currentPage': whichPage
    });
  }
})