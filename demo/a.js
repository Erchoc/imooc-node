/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 8:53
 Description:

 **/

module.exports.test = 'A'

const modB = require('./b')
console.log('modA中: ', modB.test)

module.exports.text = 'AA'