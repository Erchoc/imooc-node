/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 下午9:40
 Description:

 **/

const fs = require('fs')

// 获取文件名 && 获取文件内容

fs.readFile('./a.js', 'utf-8', (err, data ) => {
    if (err) {
        throw err;
    } else {
        console.log(data)
    }
})

// 同步版本
const data = fs.readFileSync('./b.js', 'utf-8')
console.log(data)