/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/22 上午12:28
 Description: 设置缓存，第二次访问资源返回304

 **/

const { cache } = require('../config/defaultConfig');

function refreshRes (stats, res) {
  const { maxLiveTime, expires, cacheControl, lastModified, etag} = cache;
  // 是否支持expires
  if (expires) {
    res.setHeader('Expires', (new Date(Date.now() + maxLiveTime * 1000)).toUTCString());
  }
  // 是否支持cache-control
  if (cacheControl) {
    res.setHeader('Cache-Control', `public, max-live-time=${maxLiveTime}`);
  }
  // 是否支持lastModified
  if (lastModified) {
    res.setHeader('Last-Modified', stats.mtime.toUTCString());
  }
  // 是否支持etag
  if (etag) {
    res.setHeader('ETag', `${stats.size}-${stats.mtime}`);
  }
}

module.exports = function isFresh(stats, req, res) {
  refreshRes(stats, res);

  const lastModified = req.headers['if-modified-since'];
  const etag = req.headers['if-none-match'];
  // 第一次请求
  if (!lastModified && !etag) {
    return false;
  }
  // Last-Modified失效
  if (lastModified && lastModified !== res.getHeader('Last-Modified')) {
    return false;
  }
  // ETage失效
  if (etag && etag !== res.getHeader('ETag')) {
    return false;
  }

  return true;
};
