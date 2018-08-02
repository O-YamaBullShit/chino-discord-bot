const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Je ne trouve pas l'utilisateur spécifié!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne pouvez pas faire cette commande!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#a5b1ff")
  .addField("Utilisateur banni :", `${bUser} with ID ${bUser.id}`)
  .addField("Banni par :", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banni dans le canal :", message.channel)
  .addField("Heure :", message.createdAt)
  .addField("Raison :", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Je ne trouve pas le canal des incidents");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
