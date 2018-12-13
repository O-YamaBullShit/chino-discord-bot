const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 
    let boticon = bot.user.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
      .setTitle("Help")
      .setColor("#a5b1ff")
      .setThumbnail(boticon)
      .addField("Commandes utiles", "`§infosBot` `§infosServeur` `§invite` `§pileOuFace` `§help` `§ping` `§proposition [commande] [effet de la commande]` `§signaler [mention] [raison du signalement]` (⚠ Vous pouvez vous prendre un avertissement si vous signalez a tort ⚠)")
      .addField("Commandes reservées a la modération", "`§kick [mention] [raison du kick]` `§ban [mention] [raison du ban]` `§warn [mention] [raison du warn]` (au bout de 3 warns l'utilisateur averti est automatiquement banni) `§mute [mention] [temps du mute (ex : 10m pour 10 minutes)]` `§unmute [utilisateur mute]` `§clear [nombre de messages a supprimer] (100 max)`")
      .addField("Commande relative aux goldous", "`§coins` `§pay [mention] [nbr de goldous a payer]` `§coinsgive [mention] [nbr de goldous a donner]` (Attention la dernière commande est __**UNIQUEMENT**__ réalisable par des admins)");
    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}
