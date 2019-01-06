const Discord = require('discord.js');
const Kaori = require('kaori');
const boorus = require("./boorus.json");
const kaori = new Kaori(boorus);

module.exports.run = async (bot, message, args) => {
	let liste = "'lolibooru', 'danbooru','konachan','yandere','loli', 'lolibooru','gelbooru','r34','rule34','safebooru','xbooru', 'e621', 'derpibooru'"
	kaori.search(args[0], {tags: [args[1], args[2], args[3], args[4], args[5]], limit: 1, random: true}).then(images => message.channel.send(images[0].common.fileURL)).catch(err => message.reply(`:warning: Je n'ai rien trouvé ou alors vous n'avez pas précisé de booru valide ${liste} :warning:`));
}

module.exports.help = {
  name: "booru"
}
