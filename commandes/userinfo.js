const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let uInfo = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!uInfo){
        let selfEmbed = new Discord.RichEmbed()
        .setDescription("User info")
        .addField("Nom d'utilisateur", message.author.user.username);
        message.channel.send(`<@${message.author.id}>`)
        message.channel.send(selfEmbed)
    }
}

module.exports.help = {
    name: "userinfo"
}