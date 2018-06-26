/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 19:16
 Description:

 **/

const fs = require('fs')

// 修改文件名(夹) && 修改文件内容

fs.rename('demo.tt', 'demo.json', (err) => {
    if (err) {
        // throw err
    } else {
        console.log('修改成功')
    }
})

// fs.renameSync('demoSync.json', 'demoSync.txt')

fs.rename('demoxxx', 'fsWatch', err => {
    if (err) {
        throw err
    } else {
        console.log('修改成功')
    }
})


fs.renameSync('./demoB', 'demoXXX')




