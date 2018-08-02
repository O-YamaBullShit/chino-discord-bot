const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Vous n'avez pas les droits pour executer cette commande.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne trouve pas cet utilisateur.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Veuillez spécifier un role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne trouve pas ce role");

  if(rMember.roles.has(gRole.id)) return message.reply("Vous avez deja ce role");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Felicitations, vous avez eu ce role : ${gRole.name}`)
  }catch(e){
    message.channel.send(`Felicitations a : <@${rMember.id}>, il/elle a obtenu ce role : ${gRole.name}. Nous avons essayé de les DM, mais leurs DM sont verrouillés.`)
  }
}

module.exports.help = {
  name: "addrole"
}
