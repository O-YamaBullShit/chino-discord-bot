const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var pile = 1;
    var face = 2;
    var rand = Math.floor(Math.random() * 2) + 1;
    console.log(rand)
    if(rand == pile)
    {
        message.channel.send("Pile !")
    }
    else if(rand == face)
    {
        message.channel.send("Face !")
    }
    else
    {
        message.channel.send("Erreur !")
    }
}

module.exports.help = {
  name: "pileOuFace"
}