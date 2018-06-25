/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 14:56
 Description:

 **/

// 路径细节处理
const {normalize} = require('path')
// const normalize = require('path').normalize
// 路径合并
const {join} = require('path')
// 相对路径转绝对路径
const {resolve} = require('path')
// 文件名，文件路径和文件后缀名
const {basename, dirname, extname} = require('path')
// 文件名解析和格式化
const {parse, format} = require('path')
// 路径分隔符，PATH分隔符，跨平台使用
const {sep, delimiter, win32, posix} = require('path')

// join拼接默认也会使用normalize处理小细节

console.log(normalize('/usr//local/bin'))
console.log(normalize('/usr//local/../bin'))

console.log(join('/usr', 'local/', '/./bin'))

console.log(resolve('./'))

const filePath = '/home/user/workspace/pwd.txt'
console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))

let resPath = parse(filePath)
console.log(resPath)
console.log(format(resPath))

console.log('PATH:', process.env.PATH)
console.log('win sep:', win32.sep)
console.log('unix sep:', posix.sep)
console.log('win delimiter:', win32.delimiter)
console.log('unix delimiter:', posix.delimiter)
