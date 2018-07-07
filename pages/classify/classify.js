// pages/classify/classify.js

Page({
  data: {
    classList: getApp().globalData.classList, //获取菜品类别数组
    curMainId: 1,//左侧栏点击背景改变的变量名,初始值为1
    curMainIndex: 0, //当前数组下标的变量名,默认从第一个开始

  },

  //点击主类别触发事件
  switchMainClass: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curMainId: id,
      curMainIndex: index,
    })
  },

  //点击附属类别触发事件
  switchSubClass: function (e) {
    let cid = e.currentTarget.dataset.cid,
      cname = e.currentTarget.dataset.cname,
      cindex = parseInt(e.currentTarget.dataset.cindex);
    wx.navigateTo({
      url: "../list/list?searchClass=" + cname, //传递点击的类别名
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    this.setData({
      curSubId: cid,
      curSubIndex: cindex,
    })
  }

})