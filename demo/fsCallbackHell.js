/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/26 10:21
 Description:

 **/

const fs = require('fs')
const {promisify} = require('util')

// 使用同步的写法搞定回调地狱的嵌套问题

// (promise半同步封装)
const read = promisify(fs.readFile)

read('./a.js', 'utf8').then(data => {
    // console.log(data)
}).catch(ex => {
    console.log('出错啦！'+ex)
})

// (ES7 async-await全同步封装)
async function test() {
    try {
        const content = await read('./b.js', 'utf8')
        console.log(content)
    } catch(ex) {
        console.log(ex)
    }
}

test()