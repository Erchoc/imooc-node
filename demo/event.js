/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 19:30
 Description:

 **/

const EventEmitter = require('events')
// 定义类
class myEmitter extends EventEmitter {}
// 实例化
const EmitterIns = new myEmitter();
// 监听
EmitterIns.on('test', () => {
    console.log('触发了一个事件！');
});
// 触发事件
setInterval(() => {
    EmitterIns.emit('test');
}, 1000)
// 区别：setTimeout只在指定时间后执行一次
setTimeout(() => {
    EmitterIns.emit('test');
}, 1000)


class CustomEvent extends EventEmitter {}
const ce = new CustomEvent()
ce.on('error', ( err, time ) => {
    console.log(err)
    console.log(time)
})
setInterval(() => {
    ce.emit('error', new Error('OOPS!'), Date.now())
}, 1000)

// 只响应一次事件处理程序
class oneEvent extends EventEmitter {}
const oneIns = new oneEvent()
oneIns.once('oneTick', () => {
    console.log('Hello One')
})
setInterval(() => {
    oneIns.emit('oneTick')
}, 1000)

// 移除事件
class rmEvent extends EventEmitter {}
const rmIns = new rmEvent()

function f1 () {
    console.log('f1')
}
function f2 () {
    console.log('f2')
}
rmIns.on('rmTick', f1)
rmIns.on('rmTick', f2)
setInterval(() => {
    rmIns.emit('rmTick')
}, 1000)
// 10秒后移除f2事件
setTimeout(() => {
    rmIns.removeListener('rmTick', f2)
}, 10000)
// 12秒后移除所有事件,退出循环
setTimeout(() => {
    rmIns.removeAllListener('rmTick')
}, 15000)
