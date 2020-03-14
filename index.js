const Discord = require("Discord.js");
const bot = new Discord.Client();
var prefix = "!";

// bot.on () permet de récupérer un événement.
// L'évent = "ready" Réagis quand le bot est prêt.
// L'évent "message" permet de récupérer un message qui à été envoyer


bot.on('ready', () => {
    console.log('Connecté!') // la console dira connecté comme vous l'avez vu!
})

bot.on('message', message => { // réagis quand un message est envoyé
if(message.content.StartsWith('!ping')){ // si le début de votre message commence pas !ping
    message.channel.send(pong!) // le bot répondra pong!
};
})
bot.login('process.env.BOT_TOKEN')
