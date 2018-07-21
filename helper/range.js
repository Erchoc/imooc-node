/**

 Created by WebStorm.
 User: Erchoc
 Date: 2018/7/1 下午9:12
 Description: 获取文件部分内容

 **/

module.exports = ( totalSize, req, res ) => {
  const range = req.headers['range'];
  if (!range) {
    return {code: 200};
  }
  const sizes = range.match(/bytes=(\d*)-(\d*)/);
  const end = sizes[2] || totalSize - 1;
  const start = sizes[1] || totalSize - end;

  if (!start > end || start < 0 || end > totalSize) {
    return {code: 200};
  }

  res.setHeader('Accept-Range', 'bytes');
  res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`);
  res.setHeader('Content-Length', end - start);
  return {
    code: 206,
    start: parseInt(start),
    end: parseInt(end)
  };

};
