const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#a5b1ff")
  .addField("Utilisateur kické", `${kUser} avec l'ID : ${kUser.id}`)
  .addField("Kické par :", `<@${message.author.id}> avec l'ID : ${message.author.id}`)
  .addField("Kické sur le channel :", message.channel)
  .addField("Heure :", message.createdAt)
  .addField("Raison", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Je ne trouve pas le canal des incidents");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
