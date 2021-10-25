const ax = require("axios")

module.exports = async (client, target, context, message, args) => {
  let from_curr = "BTC"
  let to_curr = "USD"
  let multiplier = 1

  if (args[0]) {
    from_curr = args[0].toUpperCase()
  }
  
  if (args[1]) {
    to_curr = args[1].toUpperCase()
  }
  
  if (args[2] && Number(args[2])) {
    multiplier = args[2]
  }
  
  ax({
    url: "https://www.alphavantage.co/query",
    params: {
      "function": "CURRENCY_EXCHANGE_RATE",
      "from_currency": from_curr,
      "to_currency": to_curr,
      "apikey": process.env.ALPHA_VANTAGE_API_KEY
    }
  }).then((data) => {
    if (data.data["Realtime Currency Exchange Rate"]) {
      let num = parseFloat(data.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]).toFixed(2)
      num = parseFloat(num * multiplier).toFixed(2)

      client.say(target, `${multiplier} ${from_curr} = ${num} ${to_curr}`)
    }

    if (data.data["Error Message"]) {
      client.say(target, "[#'fx] Try `#'fx usd cad` or `#'fx eth`.")
    }
  })
}
