/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 下午9:43
 Description:

 **/

const fs = require('fs')

// 删除文件 && 删除文件内容

fs.unlink('demo.json', err => {
    if (err) {
        throw err
    } else {
        console.log('删除成功')
    }
})

fs.unlinkSync('demoSync.json')