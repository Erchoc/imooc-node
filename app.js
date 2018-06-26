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

// 创建服务
const server = http.createServer(( req, res ) => {
  const url = req.url;
  const filePath = path.join(conf.root, url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url);

  res.end(filePath);
});

// 端口监听
server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.log(`Server is Running at ${chalk.yellow(addr)}`);
});

