const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission d'executer cette commande");
  if(!args[0]) return message.channel.send("Veuillez specifier le nombre de messages a supprimer")
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} messages ont été supprimés`).then(msg => msg.delete(5000))
  })
}

module.exports.help = {
  name: "clear"
}
