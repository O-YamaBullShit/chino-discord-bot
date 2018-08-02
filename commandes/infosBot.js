const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription('Description du bot')
  .setColor('#a5b1ff')
  .setThumbnail(boticon)
  .addField("Nom du bot :", bot.user.username)
  .addField("Crée le :", bot.user.createdAt);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "infosBot"
}
