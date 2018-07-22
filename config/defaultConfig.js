/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/6/26 16:44
 Description:

 **/

module.exports = {
  // 配置信息
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: '3000',
  compress: '/.(html|js|css|md)/',
  cache: {
    maxLiveTime: 600,
    // 是否支持下列缓存方案
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
};
