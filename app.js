//app.js
var Base64 = require('./component/http/base64.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => {
        console.log(res);
      }
    })
  },
  onHide: function () {
    // 保存 shopCartInfo 的内容
    if (!this.globalData.userId) {
      return;
    }
  },
  userInfoReadyCallback () {
    let userInfo = this.globalData.userInfo;
    console.log(userInfo);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://localhost:8082/login',
          method: "POST",
          data: {
            'code': res.code,
            'nickName': userInfo.nickName,
            'headImage': userInfo.avatarUrl,
            'gender': userInfo.gender,
            'country': userInfo.country,
            'city': userInfo.city,
            'province': userInfo.province
          },
          success: (res) => {
            console.log(res);
            let result = res.data.result;
            this.globalData.userId = result.user.userId;
            this.globalData.shopCartInfo = res.data.result.shopCart;
          }
        });
      }
    })
  },
  globalData: {
    userInfo: null
  },
  addToShopCart (goods, addNum) {
    let shopCartInfo;
    wx.getStorage({
      key: 'shopCart',
      success: (res) => {
        shopCartInfo = res.data;
        console.log(shopCartInfo);
        this.operateShopCart(shopCartInfo, goods, addNum);
      },
      fail: () => {
        shopCartInfo = [];
        this.operateShopCart(shopCartInfo, goods, addNum);
      }
    })
  },

  operateShopCart (shopCartInfo, goods, addNum) {
    let hasAdded = false;
    shopCartInfo.forEach((item, index) => {
      if (item.goodsId == goods.goodsId) {
        hasAdded = true;
        shopCartInfo[index].shopCartNum += addNum;
        if (shopCartInfo[index].shopCartNum === 0) {
          shopCartInfo.split(index, 1);
        }
      }
    });
    if (!hasAdded) shopCartInfo.push(Object.assign({}, goods, { 'shopCartNum': 1 }));
    wx.setStorage({
      key: 'shopCart',
      data: shopCartInfo,
    });
  },

  computeShopCartNum (successCallback) {
    console.log(successCallback);
    let shopCartNum = 0;
    wx.getStorage({
      key: 'shopCart',
      success: (res) => {
        let shopCartInfo = res.data;
        shopCartInfo.forEach((item) => {
          shopCartNum += item.shopCartNum;
        });
        successCallback(shopCartNum);
      }
    });
    fail: () => {
      return successCallback(0);
    } 
  }
})