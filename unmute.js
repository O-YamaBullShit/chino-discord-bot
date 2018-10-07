const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	let unUMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!unUMute) return message.reply("Veuillez spécifier un utilisateur !");
	let muterole = message.guild.roles.find(`name`, "mute");
	if(!muterole) return message.reply("Le role mute n'existe pas !");
	unUMute.removeRole(muterole.id);
	message.channel.send(`<@${unUMute.id}> n'est plus muet ! :)`)
}

module.exports.help = {
  name: "unmute"
}
