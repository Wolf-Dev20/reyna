require("express")().listen(1343);//ukqzn

const db = require("quick.db"); 
const discord = require("discord.js");//ukqzn
const client = new discord.Client({ disableEveryone: true });//ukqzn
client.login("ODA2ODgzODk4NjgwMTQ4MDE4.YBv7MA.HMj55Tpu2yFzUahuRn5fwJbR7NY");
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
  client.user.setActivity(`u!help`)//ukqzn
  console.log(`Logined`)//ukqzn
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "u!uptime") {
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
  if(spl[0] == "u!botsay") {//ukqzn
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//ukqzn
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "u!help") {
let embed = new Discord.RichEmbed()//ukqzn
.setColor('#070706')
.addField(`Hosting Reyna`)
.setDescription(`**Uptime All BOT **

⚡| u!help** : Commands Help Bot.

🔋 | **u!uptime <link live app>** : Hosting Bot CMD and links Live app.

⚡| **u!botsay** : All Hosting projekt .

⚡| **u!invite** : show all data bots .

🧧 |** Owner Bots :-** <@790233637580832788> <@749319771270545418>


`)
.setAuthor(`UptimeBOT | help `, client.user.avatarURL)
.setFooter(`UptimeBOT |Hosting Reyna`)//ukqzn
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
  if(spl[0] == "u!reyna") {
  var link = spl[1]
 message.channel.send(`***will be added very soon!***`)//ukqzn
}})


  
client.on("message", message => {
  if (message.content === "u!invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=-->Click Touch For Link Bot<--=")
      .setImage(
        "https://discord.com/api/oauth2/authorize?client_id=723852138610032720&permissions=8&scope=bot"
      )
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=723852138610032720&permissions=8&scope=bot"
      ) // Type Your Link here after ''
      .setFooter("Kurdish Supporter", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});



client.on('guildCreate', guild => {
client.channels.get("769635399948566588").send(`✅ **${client.user.tag} ئادی سێرڤەرێکی تر کرا 
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Fsociety
client.on('guildDelete', guild => {
  client.channels.get("769635399948566588").send(`❎ **${client.user.tag} ڕۆشت لە سێرڤەر 
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});     

