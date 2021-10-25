const ax = require("axios")
const {logger, PS1} = require("../../../log")

module.exports = async (client, target, context, message, args) => {
  let location = ""
 
  if (!args.length) {
    location = "Toronto"
  }

  if (args.length === 1) {
    location = args[0]
  }

  if (args.length > 1) {
    location = args.shift()

    args.forEach((arg) => {
      location = location.concat(" ", arg)
    })
  }

  ax.get(`https://wttr.in/${location}?format=3`)
    .then((data) => client.say(target, data.data))
    .catch((error) => logger.error(PS1(), "[temp]", error))
}
