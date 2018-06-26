/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 下午9:44
 Description:

 **/
 
const fs = require('fs')

// 增加文件 && 增加文件内容

fs.writeFile('demo.json', '{"name": "yangxuejin"}', 'utf-8', err => {
    if (err) {
        throw err
    } else {
        console.log('ok, create success')
    }
})
// 同步版本
fs.writeFileSync('demoSync.json', 'hellop', 'utf-8')




