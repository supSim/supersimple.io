var app = getApp();
import http from '../../component/http/http.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    orderInfo: {
      shopCartInfo: [],
      totalShopCartNum: 0,
      totalPrice: 0,
      realPayPrice: 0,
      receiver: {
        name: '张三',
        phone: '17626044268',
        houseNumber: '307'
      },
      foreman: {
        name: 'hugy',
        phone: '17626044268',
        pickProvince: '湖北省',
        pickCity: '武汉市',
        pickDistrict: '江夏区',
        pickAddress: 'xx菜市场',
        detailAdress: '超简单社区中心'
      },
      prePareData: {
        goodsId: '123456',
        goodsImage: 'http://www.17qq.com/img_qqtouxiang/76490995.jpeg',
        shopCartNum: 1,
        goodsDesc: '【人气商品】',
        goodsName: '橘子糖',
        goodsWeight: '500',
        goodsRealPrice: '19.90',
        goodsOriginPrice: '29.90'
      },
      remark: ''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.operateLoading(true);
    if (options.type == 0) { // 单件购买
      // 发送请求去拉取数据
      console.log(options.goodsId);
      http.api({
        url: 'http://localhost:8082/order/getPreInfo',
        method: 'POST',
        data: {
          goodsId: options.goodsId,
          userId: app.globalData.userId
        },
        success: (res) => {
          console.log(res.data.result);
          this.setData({
            'orderInfo.prepareData': res.data.result.goods,
            'orderInfo.receiver': res.data.result.buyer
          });
          
        },
        complete: (res) => {
          this.operateLoading(false);
        }
      });
    } else { // 点击去结算 结算购物车
      this.setData({
        'orderInfo.shopCartInfo': app.globalData.shopCartInfo
      });
    }
    let totalNum = 0, totalPrice = 0, realPrice = 0;
    this.data.orderInfo.shopCartInfo.forEach(item => {
      totalNum += item.shopCartNum;
      totalPrice += (item.shopCartNum * parseFloat(item.goodsRealPrice));
      realPrice = totalPrice;
    });
    this.setData({
      'orderInfo.totalShopCartNum': totalNum,
      'orderInfo.totalPrice': totalPrice,
      'orderInfo.realPayPrice': realPrice
    });
    console.log(this.data.orderInfo);
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
  changeRemark: function (e) {
    this.setData({
      'orderInfo.remark': e.detail.value
    })
  },
  submitOrder: function () {
    console.log(this.data.orderInfo);
  },

  operateLoading (show) {
    this.setData({
      'showLoading': show
    });
  }
})