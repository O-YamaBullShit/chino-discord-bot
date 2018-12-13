const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  // §rip seul = un envoi du rip
  // §rip [mention] = mention + rip
  let attachement = "https://i.imgur.com/w3duR07.png";
  let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rUser){
    message.channel.setAttachment(attachement)
    message.delete(2000)
  } else {
    message.channel.send(`${rUser}, ${attachement}`)
    message.delete(2000)
  }
}

module.exports.help = {
  name: "rip"
}
