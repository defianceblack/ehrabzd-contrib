const {readdirSync} = require("fs")
const CMDz = new Map()

let commandFiles = readdirSync(`${__dirname}/src/twitch/commands`).filter((file) => !file.startsWith("_") && file.endsWith(".js"))

commandFiles.forEach((file) => {
  let command = require(`${__dirname}/src/twitch/commands/${file}`)

  CMDz.set(file.split(".")[0], command)
})

module.exports = {
  CMDz
}
