const chalk = require('chalk');
const stdout = process.stdout;

function stdoutWrite(text, type = 'default') {
  switch (type) {
    case 'err':
      stdout.write(chalk.red(text));
      break;
    default:
      stdout.write(chalk.yellow(text));
      break;
  }
}

module.exports = stdoutWrite;
