/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 8:53
 Description:

 **/

module.exports.test = 'B'

const modA = require('./a')
console.log('modB中: ', modA.test)

module.exports.test = 'BB'