/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 上午8:11
 Description:

 **/
 
const fs = require('fs')
const chalk = require('chalk')

// 异步对文件的增删改查操作
const res1 = fs.readFile('./app.js', ( err, data ) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

// 由于上面的异步操作，下面提前输出undefined
console.log(res1)

// 同步对文件的增删改查操作
const res2 = fs.readFileSync('app.js')
if (!res2) {
    // 这个错误判断是无效的，同步模式下读取错误会抛出异常
    console.log('Err')
} else {
    console.log(res2.toString())
}

console.log(chalk.green('redred'))