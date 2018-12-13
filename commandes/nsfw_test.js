const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let nsfVerify = "nsfw-"
  if(TextChannel.name.includes(nsfVerify)){
    message.reply("Channel NSFW !")
  }
  else{
    message.reply("Channel non NSFW")
  }
}

module.exports.help = {
  name: "nsfwTest"
}
