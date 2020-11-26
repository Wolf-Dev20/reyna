require("express")().listen(1343);//ukqzn

const db = require("quick.db"); 
const discord = require("discord.js");//ukqzn
const client = new discord.Client({ disableEveryone: true });//ukqzn
client.login("TOKEN");
const fetch = require("node-fetch");
const fs = require('fs')//ukqzn

setInterval(() => {
  var links = db.get("linkler");//ukqzn
  if(!links) return 
  var linkA = links.map(c => c.url)//ukqzn
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Pinged Successfully.")//ukqzn
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//ukqzn
db.set("linkler", [])
}//ukqzn
})

client.on("ready", () => {
  client.user.setActivity(`up!uprime | UPDATE LODING...`)//ukqzn
  console.log(`Logined`)//ukqzn
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!uptime") {
  var link = spl[1]//ukqzn
  fetch(link).then(() => {//ukqzn
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ This bot is already being uptime.**")//ukqzn
    
    let help = new Discord.RichEmbed()//ukqzn
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Successful! Your project is now 24/7!**")//ukqzn
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(help).then(msg => msg.delete(60000)); //ukqzn
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let help = new Discord.RichEmbed()//ukqzn
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Error! You can just add proper urls.**")//ukqzn
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(help).then(msg => msg.delete(60000)); //ukqzn
  })//ukqzn
  }
})


client.on("message", message => {//ukqzn
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!botsay") {//ukqzn
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//ukqzn
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!yardım") {
let embed = new Discord.RichEmbed()//ukqzn
.setColor('#070706')
.addField(`Hosting Bot Prime`)
.setDescription(`**Uptime All BOT **

⚡| up!help** : Commands Help Bot.

🔋 | **up!uptime <link live app>** : Hosting Bot CMD and links Live app.

⚡| **up!botsay** : All Hosting projekt .

⚡| **up!kurdish-supporter** : show all data bots .
 
🧧 | **Linke Support Bot :- https://discord.gg/SVW7QhwzxM**

🧧 |** Owner Bots :-** <@776494689703559208> <@717490675398213653> 


`)
.setAuthor(`UptimeBOT | help `, client.user.avatarURL)
.setFooter(`UptimeBOT |Kurdish Supporter`)//ukqzn
.setImage(`https://cdn.discordapp.com/attachments/741014134576906332/741980222101913600/unknown.png`)
return message.channel.send(embed);//ukqzn
    }
  
  })
  const log = message => {//ukqzn
  console.log(`${message}`);
}
  
client.on("message", message => {//ukqzn
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!kurdish-supporter") {
  var link = spl[1]
 message.channel.send(`***will be added very soon!***`)//ukqzn
}})


  
client.on("message", message => {
  if (message.content === "up!invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=-->Click Touch For Link Bot<--=")
      .setImage(
        "https://cdn.discordapp.com/attachments/722281428548583524/735652330384392243/2Dn3.gif"
      )
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=769622373716328489&permissions=8&scope=bot"
      ) // Type Your Link here after ''
      .setFooter("𝐁𝐘 𝐌𝐀𝐑𝐒", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});