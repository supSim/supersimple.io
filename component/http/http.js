var Base64 = require('./base64.js');
var app = getApp();
var supHttp = function(obj = {}) {
  if (obj.header == null) {
    obj.header = {}
  }
  var now = new Date();
  var str = app.globalData.userId + now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  var secret = Base64.encode(str);
  obj.header.secret = secret;
  wx.request(obj);
}

export default {
  "api": supHttp
};