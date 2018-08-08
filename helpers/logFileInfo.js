const chalk = require('chalk');
const log = console.log;

function logFileInfo(filename, isDirectory) {
  if (isDirectory) {
    log(chalk.gray(`  文件夹:  `) + chalk.blue(filename));
  } else {
    log(chalk.gray(`  文件:  `) + chalk.green(filename));
  }
}

module.exports = logFileInfo;
