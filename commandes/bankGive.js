const Discord = require('discord.js');
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    // On verifie si l'auteur du message a les droits pour donner de l'argent.
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas les droits pour executer cette commande.");
    // L'utilisateur entre les arguments de la commande, si il ne les a pas remplis correctement, on n'execute pas la commande.
    let uGive = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!coins[uGive.id]) {
      coins[uGive.id] = { coins: 0 };
    }
    let uCoins = coins[uGive.id].coins;
    let uGiveAmt = args[1];
    if(!uGive) return message.reply("Veuillez spécifier un utilisateur !");
    if(!uGiveAmt) return message.reply("Veuillez spécifier un nombre s'il vous plaît.");
    // On vérifie si la somme donnée n'est pas une chaîne de caractères (ou un caractère simple) ou un nombre décimal.
    if(isNaN(uGiveAmt)) return message.reply(`${uGiveAmt} n'est pas un nombre entier, petit fripon ! :wink:`);
    if(uGiveAmt.includes(".") || uGiveAmt.includes(",")) return message.reply(`${uGiveAmt} n'est pas un nombre entier, petit chenapan :wink:`)
    // On donne le nombre de goldous indiqué au déstinataire, et si le déstinataire n'a pas de "compte" on lui en crée un
    coins[uGive.id] = {
        coins: uCoins + parseInt(args[1])
    }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    })
    message.channel.send(`Je m'occupe de donner ${uGiveAmt} goldous à ${uGive} (´｡• ᵕ •｡\`)`)
}

module.exports.help = {
    name: "coinsgive"
}
