/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/26 9:48
 Description:

 **/

const fs = require('fs')

// 本地构建原理
fs.watch('./', {
    // 是否递归监视
    recursive: true
}, (eventType, fileName) => {
    console.log(eventType, fileName)
})



