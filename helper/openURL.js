/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/22 上午8:24
 Description: 自动打开网页

 **/

const { exec } = require('child_process');

module.exports = url => {
  switch (process.platform) {
    case 'darwin':
      exec(`open ${url}`);
    case 'win32':
      exec(`start ${url}`);
      break;
  }

}
