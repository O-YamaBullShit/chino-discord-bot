const discord = require("discord.js");
const Kaori = require("kaori");
const e621 = require("./boorus.json");
const kaori = new Kaori(e621);

module.exports.run = async(bot, message, args) =>{
	if(message.channel.nsfw != true) return message.reply("Non ! Je n'enverrai pas ce genre d'images dans un channel non-NSFW inutile d'insister !")
	kaori.search('e621', {tags: [args[0], args[1], args[2], args[3], args[4]], limit: 1, random: true}).then(images => message.channel.send(images[0].common.fileURL)).catch(err => console.log(err));
}
module.exports.help = {
	name: "e621"
}