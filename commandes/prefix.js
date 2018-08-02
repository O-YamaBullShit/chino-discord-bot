const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Vous n'avez pas les droits")
	if(!args[0] || args[0 == "help"]) return message.reply("Usage : §prefix <prefix désiré>")

	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	
	prefixes[message.guild.id] = {
		prefixes: args[0]
	}

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
		if(err) console.log(err)
	});

	let sEmbed = new Discord.RichEmbed()
	.setColor('#a5b1ff')
	.setTitle('Prefix défini')
	.setDescription(`Le préfix est désormais ${args[0]}`);

	message.channel.send(sEmbed)
}

module.exports.help = {
	name: "prefix"
}