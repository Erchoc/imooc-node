/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/1 下午6:57
 Description: 压缩文件的函数

 **/

const { createGzip, createDeflate } = require('zlib');

module.exports = ( rs, req, res ) => {
  const acceptEncoding = req.headers['accept-encoding'];
  console.log(acceptEncoding);
  // 浏览器不支持的压缩 || 服务器不支持的压缩
  if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
    return rs;
  } else if (acceptEncoding.match(/\bgzip\b/)) {
  // gzip压缩算法引用
    res.setHeader('Content-Encoding', 'gzip');
    return rs.pipe(createGzip());
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    // deflate压缩算法引用
    res.setHeader('Content-Encoding', 'deflate');
    return rs.pipe(createDeflate());
  }
};
