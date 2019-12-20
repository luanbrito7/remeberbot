const {token} = require("./auth") 
const Telegraf = require('telegraf')

const bot = new Telegraf(token)
let CHANNEL_ID = "@rememberdbot"

let messages = [
    "Beba água",
    "Respire fundo",
    "Corrija sua postura"
]

let i = 0

setInterval(() => {
    if (i == messages.length) {
        i = 0
    }
    bot.telegram.sendMessage(CHANNEL_ID, messages[i])
    i++ 
}, 1000000) 