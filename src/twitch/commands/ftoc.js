module.exports = async (client, target, context, message, args) => {
  num = Number(args[0])
  
  if (num && num != 0) {
    res = ((num - 32) * (5/9)).toFixed(2)
    
    client.say(target, `${num}*F = ${res}*C`)
  } else {
    client.say(target, "0*F = -17.78*C")
  }
}
