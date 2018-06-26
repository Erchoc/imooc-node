/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/26 10:02
 Description:

 **/

const fs = require('fs')

// 有方向的数据流,部分循环传递到内存(readFile一次性放入内存)
const rs = fs.createReadStream('fsStream.js')
rs.pipe(process.stdout)

// 每隔2秒写入数据
const ws = fs.createWriteStream('demo.txt')

const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10)
    if (num < 9) {
        ws.write(num+' ')
    } else {
        clearInterval(tid)
        ws.end()
    }
}, 2000)
// 监听
ws.on('ok', () => {
    console.log('写完了')
})