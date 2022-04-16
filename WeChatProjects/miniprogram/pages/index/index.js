// index.js
wx.cloud.init();
const db = wx.cloud.database();
var pageObject = {
    data: {
        feedings: 0,
        load: "loading"
    },
    refresh: function () {
        db.collection('default').doc('feeding-data').get().then(res => {
            this.setData({
                feedings: res.data.feedings,
                load: "feeding"
            });
        });
    },
    feed: function () {
        this.setData({
            load: "loading"
        })
        wx.cloud.callFunction({
            name: 'addFeeding',
            data: {},
        }).then(res => {
            this.setData({
                feedings: res.result.feedings,
                load: "feeding"
            });
        })
    },
    onReady: function () {
        this.refresh()
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
};
Page(pageObject);