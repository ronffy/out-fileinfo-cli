const chalk = require('chalk');
const log = console.log;

function logTextInfo(text, isErr) {
  if (isErr) {
    log(chalk.red(text));
  } else {
    log(chalk.cyan(text));
  }
}

module.exports = logTextInfo;
