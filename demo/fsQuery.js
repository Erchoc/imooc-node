/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 下午9:40
 Description:

 **/

const fs = require('fs')

// 获取文件(夹)名 && 获取文件内容

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

fs.readdir('./', (err, files) => {
    if (err) {
        throw err
    } else {
        // 返回数组列表
        console.log(files)
    }
})

fs.readdirSync('../')