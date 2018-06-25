/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 11:33
 Description:

 **/


/*
* argv: node位置，执行文件，参数
* argv0: node
* execArgv:
* execPath: node可执行文件的位置
* */
const {argv, argv0, execArgv, execPath} = process

/*
argv.forEach(item => {
    console.log(item)
})

console.log(argv)
console.log(argv0)
console.log(execArgv)
console.log(execPath)

const {env} = process

console.log(env)
console.log(process.cwd())
*/

// 放在下一个队列队首
setImmediate(() => {
    console.log('setImmediate')
}, 0)


setTimeout(() => {
    console.log('setTimeout')
})

// 放在当前队列队首
process.nextTick(() => {
    console.log('nextTick')
})

