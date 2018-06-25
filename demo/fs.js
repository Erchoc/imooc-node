/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 19:16
 Description:

 **/

const fs = require('fs')

// 增加文件 && 增加文件内容

fs.createWriteStream('./demo.txt', ( err, data ) => {
    console.log(err)
    console.log(data)
})


// 删除文件 && 删除文件内容


// 修改文件名 && 修改文件内容



// 获取文件名 && 获取文件内容

fs.readFile('./fs.js', ( err, data ) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(data.toString())
    }
})






