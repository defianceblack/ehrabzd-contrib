const chalk = require("chalk")
const fmt = require("date-fns/format")
const PS1 = () => chalk.cyan(`[${fmt(Date.now(), "HH:mm:ss")}]`)


// const accessLog = fs.createWriteStream(`${__dirname}/access.log`, {flags: "a"})
// const errorLog = fs.createWriteStream(`${__dirname}/error.log`, {flags: "a"})
// const logger = new console.Console({stdout: accessLog, stderr: errorLog})
const logger = new console.Console({stdout: process.stdout, stderr: process.stderr})

module.exports = {
  logger,
  PS1
}
