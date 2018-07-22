/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/25 上午8:11
 Description:

 **/
// 引入模块
const http = require('http');
const path = require('path');
const chalk = require('chalk');

// 引入文件
const conf = require('./config/defaultConfig');
const helper = require('./helper/helper');
const openUrl = require('./helper/openURL');

class Server {
  constructor (config) {
    this.conf = Object.assign({}, config);
  }
  start () {
    // 创建服务
    const server = http.createServer(( req, res ) => {
      const filePath = path.join(this.conf.root, req.url);
      helper( req, res, filePath, this.conf);

    });

    // 端口监听
    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`;
      console.log(`Server is Running at ${chalk.yellow(addr)}`);
      openUrl(addr);
    });
  }
}

module.exports = Server;
