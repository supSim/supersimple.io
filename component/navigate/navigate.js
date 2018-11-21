Component({
  properties: {
    selected: {
      type: Number,
      default: 0
    },
    shoppingCartNum: {
      type: Number,
      default: 0
    }
  },
  data: {},
  methods: {
    switchPage: function (event) {
      let witchPage = parseInt(event.currentTarget.dataset.witch);
      if (witchPage == this.data.selected) return;
      let url = '';
      switch (witchPage) {
        case 0:
          url = '/pages/mainPage/main';
          break;
        case 1:
          url = '/pages/category/category';
          break;
        case 2:
          url = '/pages/shoppingCart/shoppingCart';
          break;
        case 3:
          url = '/pages/order/order';
          break;
        case 4:
          url = '/pages/personal/personal';
          break;
      }
      console.log(url);
      wx.redirectTo({
        url: url
      });
    }
  },
  attached: function () {
    console.log(this.data.selected);
  }
})