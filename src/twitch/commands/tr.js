const GT = require("@iamtraction/google-translate")
require("dotenv").config()

const PS2 = process.env.TWITCH_PREFIX

module.exports = async (client, target, context, message, args) => {
  // #'tr [-f auto, -t en] Tu es incroyable!
  let fromLang = "auto"
  let toLang = "en"
  let help = () => client.say(target, `${PS2}tr Tu es incroyable!`)

  let args0 = args?.[0]?.toLowerCase()
  let args1 = args?.[1]?.toLowerCase()
  let args2 = args?.[2]?.toLowerCase()
  
  let gtOpts = {
    from: fromLang,
    to: toLang,
    raw: false
  }

  client.say(target, `Respond to ${args} or parse ${message} directly.`)
}
