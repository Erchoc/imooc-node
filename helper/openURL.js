/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/22 上午8:24
 Description: 自动打开网页

 **/

const { exec } = require('child_process');

module.exports = url => {
  if (process.platform === 'darwin') {
    exec(`open ${url}`);
  } else if (process.platform === 'win32') {
    exec(`start ${url}`);
  }
};
