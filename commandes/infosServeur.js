const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let servericon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Infos du serveur")
  .setColor('#a5b1ff')
  .setThumbnail(servericon)
  .addField('nom du serveur :', message.guild.name)
  .addField('Serveur crée le :', message.guild.createdAt)
  .addField('Le proprietaire est :', message.guild.owner)
  .addField('Vous avez rejoint le :', message.member.joinedAt)
  .addField('Nombres de membres au total :', message.guild.memberCount);
  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "infosServeur"
}
