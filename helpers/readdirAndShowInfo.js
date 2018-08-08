const fs = require('fs');
const path = require('path');
const logFileInfo = require('./logFileInfo');

function readdirAndShowInfo(filename) {
  fs.readdir(path.join(process.cwd(), filename), (err, files) => {
    if (err || !files || !files.length) {
      return;
    }
    for (const _filename of files) {
      // 默认不支持二级目录结构
      logFileInfo(_filename, false);
    }
  })
}

module.exports = readdirAndShowInfo;
