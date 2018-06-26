/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 下午9:43
 Description:

 **/

const fs = require('fs')

// 删除文件(夹) && 删除文件内容

fs.unlink('demo.json', err => {
    if (err) {
        // throw err
    } else {
        console.log('删除文件成功')
    }
})

// fs.unlinkSync('demoSync.json')

// 大小写不敏感
fs.rmdir('demod', (err, data) => {
    if (err) {
        throw err
    } else {
        console.log('删除目录成功')
    }
})

fs.rmdirSync('demoA')
