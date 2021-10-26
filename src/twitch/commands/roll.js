const {DiceRoll} = require("rpg-dice-roller")

module.exports = async (client, target, context, message, args) => {
  let roll
  let d = args[0] === "d"

  if (d) {
    roll = new DiceRoll(args[1] || "1d%")
    client.say(target, `@${context["display-name"]} rolled ${roll.output}.`)

    return
  }

  let num = args[0] ? Number(args[0]) : undefined

  if (args?.length === 1 && num) {
    roll = new DiceRoll(`1d${num}`)
  } else {
    roll = new DiceRoll("1d%")
  }
  
  client.say(target, `@${context["display-name"]} rolled ${roll.total}.`)
}
