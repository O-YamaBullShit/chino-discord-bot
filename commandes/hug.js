const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var hAuthor = message.author.username;
    var hUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!hUser) return message.reply("Veuillez mentionner quelqu'un a caliner")
    var gifs = ["http://gph.is/16PLEqk", "https://tenor.com/view/hug-anime-gif-10195705", "https://i.imgur.com/wOmoeF8.gif", "https://i.imgur.com/r9aU2xv.gif", "https://i.imgur.com/BPLqSJC.gif", "https://i.imgur.com/ntqYLGl.gif", "https://i.imgur.com/6qYOUQF.gif"];
    var gifRes = Math.floor(Math.random() * gifs.length)
    message.channel.send(`**${hAuthor}** a caliné **${hUser}** :heart:` + gifs[gifRes])
};

module.exports.help = {
  name: "hug"
};
