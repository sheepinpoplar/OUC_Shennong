//index.js
var app = getApp();

Page({
  data: {
    goodcounter: 0,
    badcounter:0,
    comment: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goodwindow: function () {
    this.data.goodcounter++;
    //console.log(this.data.goodcounter)  
    this.setData({
      goodcounter: this.data.goodcounter,
    })
    wx.showToast({
      title: '点赞成功',
      icon: 'success',
      duration: 2000
    })
  } ,
  badwindow: function () {
    this.data.badcounter++;
    //console.log(this.data.badcounter)  
    this.setData({
      badcounter: this.data.badcounter,
    })
    wx.showToast({
      title: '谢谢您的反馈',
      icon:'success',
      duration: 2000
    })
  },

  onLoad: function (e) {
    this.setData({
      dish: app.globalData.foodList[e.id - 1],
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  //img: "image/"+id+".jpg"

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})