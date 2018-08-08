#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const logFileInfo = require('../helpers/logFileInfo');
const stdoutWrite = require('../helpers/stdoutWrite');
const readdirAndShowInfo = require('../helpers/readdirAndShowInfo');
const readFileAndShowInfo = require('../helpers/readFileAndShowInfo');

fs.readdir(process.cwd(), (err, files) => {
  // 保存读过的文件的stat
  let stats = [];
  const stdin = process.stdin;

  function file(i) {
    const filename = files[i];
    // fs.stat 读取文件或目录的元数据
    fs.stat(path.join(process.cwd(), filename), (err, stat) => {
      stats[i] = stat;
      // 判断是否是目录
      logFileInfo(filename, stat.isDirectory())
      i++;
      if (i === files.length) {
        const writeText = '=>请输入你要选择的文件或文件夹名称: ';
        stdoutWrite(writeText);
        // 等待用户输入
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', data => {
          // 去除输入的多余的空格、换行符等
          data = data.replace(/[\s\n]*/g, '');
          const fileIndex = files.indexOf(data);
          if (fileIndex === -1) {
            stdoutWrite(writeText, 'err');
          } else {
            // 将流暂停
            stdin.pause();
            if (stats[fileIndex].isDirectory()) {
              // 读取目录，并展示目录信息
              readdirAndShowInfo(data);
            } else {
              // 读取文件，并展示文件信息
              readFileAndShowInfo(data)
            }
          }
        })
      } else {
        file(i);
      }
    })
  }
  file(0);
})
