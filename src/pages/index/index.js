// pages/index/index.js
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
  },

  login() {
    wx.login({
      success: (res) => {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://localhost:3000/api/auth/login',
            method: 'POST',
            data: {
              code: res.code,
            },
            success: (loginRes) => {
              const { user } = loginRes.data;
              this.setData({
                userInfo: user,
                hasUserInfo: true,
              });
              app.globalData.userInfo = user;
            },
            fail: (err) => {
              console.error('登录失败', err);
            },
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      },
    });
  },
});