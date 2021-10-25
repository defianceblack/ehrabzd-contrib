module.exports = async (client, target, context, message, args) => {
  num = Number(args[0])

  if (num && num != 0) {
    res = (num * (9/5) + 32).toFixed(2)

    client.say(target, `${num}*C = ${res}*F`)
  }  else {
    client.say(target, "0*C = 32*F")
  }
}

