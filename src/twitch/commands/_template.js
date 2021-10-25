module.exports = async (client, target, context, message, args) => {
  client.say(target, `Respond to ${args} or parse ${message} directly.`)
}
