const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let propositionChannel = message.guild.channels.find(`name`, "proposition")
  if(!propositionChannel) return message.reply("Le channel des propositions n'existe pas")
  let commandePropos = args[0]
  let commandEffect = args[1]
  if(!commandePropos || !commandEffect) return message.reply("Utilisation de la commande : §proposition [commande] [effet de la commande]")

  let propositionCommand = new Discord.RichEmbed()
  .setDescription("Commande proposée")
  .setColor("#a5b1ff")
  .addField("Commande proposée par :", `${message.author.username}`)
  .addField("Commande proposée :", commandePropos)
  .addField("Effet de la commande proposée :", commandEffect);

  propositionChannel.send(propositionCommand)

}

module.exports.help = {
  name: "proposition"
}
