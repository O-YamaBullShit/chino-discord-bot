const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var sUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!sUser) return message.reply("Veuillez spécifier un utilisateur")
    var sAuthor = message.author.username
    var auteur = message.author
    if(auteur == sUser) {
        message.reply("Vous ne pouvez pas vous frapper vous même !")
    }
    message.channel.send(`${sAuthor} a frappé ${sUser}`)
}

module.exports.help = {
    name: "slap"
}