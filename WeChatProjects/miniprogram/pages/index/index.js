// index.js
wx.cloud.init();
const db = wx.cloud.database();
var pageObject = {
    data: {
        feedings: 0
    },
    add: function () {
        wx.cloud.callFunction({
            name: 'addFeeding',
            data: {},
        }).then(res => {
            this.setData({
                feedings: res.result.feedings
            });
        })
    },
    onReady: function () {
        db.collection('default').doc('feeding-data').get().then(res => {
            this.setData({
                feedings: res.data.feedings
            });
        });
    }
};
Page(pageObject);