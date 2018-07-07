// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //设置是否显示面板指示点
    autoplay: true, //设置是否自动切换
    interval: 3000, //设置自动切换时间间隔,3s
    duration: 1000, //设置滑动动画时长1s
    scrollUrl: getApp().globalData.scrollUrl, //设置滚动图
    recommendList: getApp().globalData.recommendList, //设置推荐菜单
  },

  //点击全部分类跳转
  totalClassfication: function (e) {
    wx.navigateTo({
      url: "../classify/classify",
    })
  },

  //点击我的收藏跳转
  myCollect: function () {
    wx.navigateTo({
      url: '../i/i',
    })
  },

  //跳转到菜品详情
  catchTapCategory: function (e) {
    let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: "../detail/detail?id=" + id,
      })
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

  }
})