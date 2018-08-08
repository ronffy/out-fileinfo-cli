const fs = require('fs');
const path = require('path');
const logTextInfo = require('./logTextInfo');

function readFileAndShowInfo(filename) {
  fs.readFile(path.join(process.cwd(), filename), 'utf8', (err, data) => {
    if (err) {
      logTextInfo(err, true);
      return;
    }
    logTextInfo(data);
  })
}

module.exports = readFileAndShowInfo;