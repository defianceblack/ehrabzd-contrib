const gt = require("@iamtraction/google-translate")
require("dotenv").config()

const PS2 = process.env.TWITCH_PREFIX

module.exports = async (client, target, context, message, args) => {
  let help = () => {
    let res = `@${context["display-name"]}, try, "${PS2}tr Tu es incroyable!" without quotes.`
    res = res.concat(` ${PS2}tr also accepts -f XX and -t XX where XX is a two letter language code.`)
    
    client.say(target, res)
  }

  let fromLang = "auto"
  let fromAliases = ["-f", "-fr", "-fro", "-from"]
  let toLang = "en"
  let toAliases = ["-t", "-to"]
  let trText = ""

  let gtOpts = () => {
    return {
      from: fromLang,
      to: toLang,
      raw: false
    }
  }
  
  let translate = async (words) => {
    await gt(words, gtOpts())
      .then((res) => {
        let fR = res.from.language.iso.toUpperCase()
        let tO = gtOpts().to.toUpperCase()

        client.say(target, `@${context["display-name"]} [${fR}->${tO}] ${res.text}`)
      })
      .catch((error) => {
        let res = `[${PS2}tr]: @${context["display-name"]}, there was an error in your request.`
        res = res.concat(" Note that language codes to -f (from) or -t (to) are only two letters.")
        
        client.say(target, res)
      })
  }

  if (!args.length || args[0] === "help") {
    help()
    return
  }
  
  if (fromAliases.indexOf(args[0]) !== -1) { // -f ?
    args.shift() // toss -f
    fromLang = args.shift() 
  }

  if (toAliases.indexOf(args[0]) !== -1) { // -t ?
    args.shift() // toss -t
    toLang = args.shift()
  }

  trText = args.join(" ")
  await translate(trText)
}
