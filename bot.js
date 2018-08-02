const Discord = require('discord.js');
const tokenfile = require('./tokenfile.json');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs");
bot.commands = new Discord.Collection()
let coins = require('./coins.json')

  // #a5b1ff couleur embeds

bot.on('message', message =>{
  var nom = "chino"
  var msg = message.content.toLowerCase()
  if(msg.includes(nom)){
    message.react("😍");
  }
  var mention = "<@426435434369777674>";
  if(msg.includes(mention)){
    let reactionsTxt = ["On m'a appellé ? :smile:", "Coucou ^^"];
    let rndReaction = Math.floor(Math.random() * reactionsTxt.length);
    message.channel.send(reactionsTxt[rndReaction])
  }
});

fs.readdir("./commandes/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Je ne trouve pas les commandes");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commandes/${f}`);
    console.log(`${f} chargé`)
    bot.commands.set(props.help.name, props)
  })
})
bot.on('ready', async() => {
  console.log(`${bot.user.username} est en ligne !`);

  bot.user.setActivity("Is order a rabbit ?", {type: "WATCHING"})

  //bot.user.setGame('change the source code');
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} a rejoint le serveur`)

  let welcomechan = member.guild.channels.find(`name`, "welcome_leave");
  welcomechan.send(`Hey tout le monde ${member} nous a rejoint :grinning:`)
});

bot.on("message", message =>{
  let sender = message.author;
  let mess = message.content.toLowerCase()
  if(sender.id === "426435434369777674") return;
  
  // censure

  /*if(mess.includes("test")){
    message.delete()
  } */
});


bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} est parti ou a été kické`)

  let leavechan = member.guild.channels.find(`name`, "welcome_leave");
  leavechan.send(`${member} est parti :cry:`)
})
bot.on("guildBanAdd", async ban => {
  console.log(`${member} a bien été banni`)
  let banChannel = member.guild.channels.find(`name`, "welcome_leave")
  banChannel.send(`${member} a été banni...`)
})
bot.on("guildBanRemove", async ban => {
  let banChannel = member.guild.channels.find(`name`, "welcome_leave")
  banChannel.send(`${member} a été débanni :upside_down:`)
})

bot.on('message', async message =>{
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;


  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    }
  }

  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    }
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`)

  if(coinAmt == baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if(err) console.log(err)
    })
    let coinembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('#a5b1ff')
    .addField('💸', `${coinAmt} Golous ajoutés`);

    message.channel.send(coinembed).then(msg => {msg.delete(5000)})
  }
  

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) commandfile.run(bot,message,args);
});
bot.login(process.env.BOT_TOKEN);
