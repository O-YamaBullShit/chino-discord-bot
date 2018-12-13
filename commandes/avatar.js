const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let uAvatar = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!uAvatar) {
        message.reply("Veuillez spécifier un utilisateur !")
    }
    let avatarEmbed = new Discord.RichEmbed()
    .setDescription("Avatar")
    .setColor("#a5b1ff")
    .setImage(uAvatar.user.avatarURL);
    message.channel.send(avatarEmbed)
}

module.exports.help = {
    name: "avatar"
}
