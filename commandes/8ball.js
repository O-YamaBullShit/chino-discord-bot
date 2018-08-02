const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Veuillez poser une question complete s'il vous plait")
  let replies = ["Oui.", "Non.", "Je ne sais pas.", "Redemandez plus tard."]
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#a5b1ff")
  .addField("Question :", question)
  .addField("Réponse :", replies[result]);

  message.channel.send(ballembed)
}

module.exports.help = {
  name: "8ball"
}
