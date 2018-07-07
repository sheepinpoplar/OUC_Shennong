// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: getApp().globalData.foodList, //获取菜品列表
    curDishId: 1,
    curDishIndex: 0,
  },

  //获取点击的种类
  onLoad: function (e) {
    this.setData({
      searchClass: e.searchClass,
    })
  },

  //点击某一项触发的事件
  switchTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    var that = this;
    // 把点击到的某一项，设为当前index
    this.setData({
      curDishId: id,
      curDishIndex: index,
    })
  },

  //跳转到详情事件
  navigateToDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../detail/detail?id=" + id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})