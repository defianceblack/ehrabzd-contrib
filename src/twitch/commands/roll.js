const {DiceRoll} = require("rpg-dice-roller")

module.exports = async (client, target, context, message, args) => {
  let roll = new DiceRoll("1d%")
  client.say(target, `@${context["display-name"]} rolled ${roll.total}.`)
}
