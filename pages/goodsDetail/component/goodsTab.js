Component({
  data: {
    tabBarList: [
      {id: 0, name: '商品详情'},
      {id: 1, name: '购买记录'},
      {id: 2, name: '直采直播'}
    ]
  },
  properties: {
    selected: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeTab: function( event ) {
      console.log(event.currentTarget.dataset.id);
      this.triggerEvent('changeTab', event.currentTarget.dataset.id);
    }
  }
});