// pages/about/about.js
var pageObject = {
    back: function () {
        wx.navigateBack({
            fail: function () {
                wx.redirectTo({
                    url: '../index/index'
                })
            }
        })
    },
    copy1: function () {
        wx.setClipboardData({
            data: 'https://blog.vincent1230.top/'
        })
    },
    copy2: function () {
        wx.setClipboardData({
            data: '516879257@qq.com'
        })
    },
    copy3: function () {
        wx.setClipboardData({
            data: 'https://github.com/VincentSHI1230/personal-mini-program/releases/tag/1.0.0/'
        })
    },
    copy4: function () {
        wx.setClipboardData({
            data: 'https://gitee.com/Vincent1230/personal-mini-program/releases/v1.0.0'
        })
    },
    onShareAppMessage: function () {
        return {
            title: '文朔的个人小程序，船新版本，闪耀登场~',
            path: '/pages/index/index',
            imageUrl: '/images/avatar.jpg'
        }
    },
    onShareTimeline: function () {
        return {}
    }
}
Page(pageObject)