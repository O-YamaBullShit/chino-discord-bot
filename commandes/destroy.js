const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  bot.user.destroy()
}

module.exports.help = {
  name: "destroy"
}
