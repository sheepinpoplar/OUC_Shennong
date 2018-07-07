//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

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
      }
    })
  },

  globalData: {
    //用户信息
    userInfo: null,

    //主页滚动图数据数组
    scrollUrl: [
      {
        id:1,
        imgurl: '/image/scroll/1.jpg',
        targeturl: '',  //点击图片跳转至图片中的目标的url
      },
      {
        id:2,
        imgurl: '/image/scroll/2.jpg',
        targeturl: '',
      },
      {
        id:3,
        imgurl: '/image/scroll/3.jpg',
        targeturl: '',
      },
    ],

    //今日推荐数据数组
    recommendList: [
      {
        id: 1,
        name: "炸鸡",
        imgurl: "/image/food/1.jpg",
        position: "北区", 
        place: "一餐一楼",
        cuisine: "川菜",
        type: "荤菜",
        score: 5,
        price: 20,
      },
      {
        id: 2,
        name: "辣子鸡",
        imgurl: "/image/food/2.jpg",
        position: "北区",
        place: "二餐二楼",
        cuisine: "川菜",
        type: "荤菜",
        score: 5,
        price: 60,
      },
      {
        id: 3,
        name: "白切贵妇鸡",
        imgurl: "/image/food/3.jpg",
        position: "东区",
        place: "第三食堂",
        cuisine: "粤菜",
        type: "荤菜",
        score: 4.5,
        price: 100,
      },
      {
        id: 4,
        name: "炒米饭",
        imgurl: "/image/food/4.jpg",
        position: "北区",
        place: "一餐一楼",
        cuisine: "粤菜",
        type: "主食",
        score: 2,
        price: 12,
      },
    ],

    //菜品数据数组
    foodList: [
      {
        id: 1,
        name: "炸鸡",
        imgurl: "/image/food/1.jpg",
        position: "北区",
        place: "一餐一楼",
        cuisine: "川菜",
        type: "荤菜",
        score: 5,
        price: 20,
      },
      {
        id: 2,
        name: "辣子鸡",
        imgurl: "/image/food/2.jpg",
        position: "北区",
        place: "二餐二楼",
        cuisine: "川菜",
        type: "荤菜",
        score: 5,
        price: 60,
      },
      {
        id: 3,
        name: "白切贵妇鸡",
        imgurl: "/image/food/3.jpg",
        position: "东区",
        place: "第三食堂",
        cuisine: "粤菜",
        type: "荤菜",
        score: 4.5,
        price: 100,
      },
      {
        id: 4,
        name: "炒米饭",
        imgurl: "/image/food/4.jpg",
        position: "北区",
        place: "一餐一楼",
        cuisine: "粤菜",
        type: "主食",
        score: 2,
        price: 12,
      },
      {
        id: 5,
        name: "酿豆腐",
        imgurl: "/image/food/5.jpg",
        position: "北区",
        place: "一餐二楼",
        cuisine: "徽菜",
        type: "素食",
        score: 3.5,
        price: 6,
      },
      {
        id: 6,
        name: "红烧鸡肉",
        imgurl: "/image/food/6.jpg",
        position: "北区",
        place: "清真餐厅",
        cuisine: "徽菜",
        type: "荤菜",
        score: 2,
        price: 6,
      },
      {
        id: 7,
        name: "炸鸡腿",
        imgurl: "/image/food/7.jpg",
        position: "东区",
        place: "清真餐厅",
        cuisine: "快餐",
        type: "荤菜",
        score: 4.5,
        price: 6,
      },
    ],

    //分类数据数组
    classList: [
      {
        id: 1,
        name: "位置",
        ishaveChild: true,
        sub: [
          { cid: 1, cname: "北区" },
          { cid: 2, cname: "南区" },
          { cid: 3, cname: "东区" },
        ],
      },
      {
        id: 2,
        name: "菜系",
        ishaveChild: true,
        sub: [
          { cid: 1, cname: "川菜" },
          { cid: 2, cname: "粤菜" },
          { cid: 3, cname: "湘菜" },
          { cid: 4, cname: "徽菜" },
        ],
      },
      {
        id: 3,
        name: "类型",
        ishaveChild: true,
        sub: [
          { cid: 1, cname: "主食" },
          { cid: 2, cname: "素菜" },
          { cid: 3, cname: "荤菜" },
          { cid: 4, cname: "饮品" },
        ],
      },
    ],
  }
})