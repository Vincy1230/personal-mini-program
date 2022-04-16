// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
    return db.collection('default').doc('feeding-data').get().then(res => {
        newfeedings = res.data.feedings + 1
        db.collection('default').doc('feeding-data').update({
            data: {
                feedings: newfeedings
            }
        })
        return {
            feedings: newfeedings
        }
    })
}