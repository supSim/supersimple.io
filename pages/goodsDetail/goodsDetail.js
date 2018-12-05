import http from '../../component/http/http.js';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    currentPage: 1,
    ShopCartNum: 0,
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
      goodsRemain: 1,
      goodsWeight: '2斤土0.05/份',
      buyGoodsPeople: 155,
      buyPeoples: [
        {openId: '', customerName: '张三', buyTime: '11-24:22', buyNum: 1},
        {openId: '', customerName: '张三', buyTime: '11-24:22', buyNum: 1},
        {openId: '', customerName: '张三', buyTime: '11-24:22', buyNum: 1 },
        {openId: '', customerName: '张三', buyTime: '11-24:22', buyNum: 1 },
        {openId: '', customerName: '张三', buyTime: '11-24:22', buyNum: 1 }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      'currentPage': 0,
      'goods.goodsId': options.goodsId,
      'showLoading': true
    });
    http.api({
      url: "http://localhost:8082/goods/detail/" + this.data.goods.goodsId,
      success: (res) => {
        console.log(res);
        this.setData({
          'goods': res.data.result.goods,
          'showLoading': false
        })
      },
      fail: (res) => {
        this.setData({
          'showLoading': false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.computeShopCartNum(this.data.goods.goodsId, (num) => {
      this.setData({
        'shopCartNum': num
      });
    })
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
    if (this.data.currentPage == whichPage) return;
    this.setData({
      'currentPage': whichPage
    });
    console.log(typeof this.data.currentPage);
    if (this.data.currentPage == '1') {
      this.showLoading(true);
      http.api({
        url: `http://localhost:8082/goods/buyer-record/${this.data.goods.goodsId}`,
        success: (res) => {
          console.log(res);
          this.setData({
            'goods.buyPeoples': res.data.result.buyer,
            'goods.buyGoodsPeople': res.data.result.buyNum
          });
        },
        fail: () => {

        },
        complete: () => {
          this.showLoading(false);
        }
      })
    }
  },

  buyGoods () {
    wx.redirectTo({
      url: '/pages/placeOrder/placeOrder?type=0&goodsId=' + this.data.goods.goodsId,
    });
  },

  addToShopCart () {
    app.addToShopCart(this.data.goods, 1);
    console.log(app.computeShopCartNum());
    this.setData({
      'shopCartNum': app.computeShopCartNum()
    });
  },

  showLoading (show) {
    this.setData({
      'showLoading': show
    })
  }
})