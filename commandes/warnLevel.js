const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas effectuer cette commande");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Je ne trouve pas l'utilisateur spécifié");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> possède ${warnlevel} warns.`);

}

module.exports.help = {
  name: "warnlevel"
}
