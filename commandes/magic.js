const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
	// §magiccommand
	let argument = args[0]
	if(!argument){
		/* fonction pour envoyer une image de shrek */
		(function image(){
			message.reply({
				files:[
					"./images/img.jpg"
				]
			})
		})();
	}
	else{
		(function repeat(argument){
			message.reply(args[0]);
		})();
	}

}
module.exports.help = {
	name: "magiccommand"
}