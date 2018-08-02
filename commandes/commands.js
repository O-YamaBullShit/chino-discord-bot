const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  var link = "http://chino.alwaysdata.net/commands.html"
  let commandsEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor('#a5b1ff')
  .setTitle("Commandes de Chino")
  .setDescription(link);

  message.channel.send(commandsEmbed);
}

module.exports.help = {
  name: "commands"
}
