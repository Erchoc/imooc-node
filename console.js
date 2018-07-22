/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/22 上午7:13
 Description:

 **/

const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
  .usage('netfile [options]')
  .option('p', {
    alias: 'port',
    describe: '端口号',
    default: 3000
  })
  .option('h', {
    alias: 'hostname',
    describe: '主机IP',
    default: '127.0.0.1'
  })
  .option('d', {
    alias: 'root',
    describe: '资源根目录',
    default: process.cwd()
  })
  .version()
  .alias('v', 'version')
  .help()
  .argv;

const server = new Server(argv);
server.start();
