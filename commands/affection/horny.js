const Discord = require('discord.js')

module.exports = {
 name: "horny",
 permissions: ["SEND_MESSAGES"],
 cooldown: 5,
 description: "horny command",

 execute(client, message, args, Discord) {
 let member = message.mentions.users.first() || message.author

 let rng = Math.floor(Math.random() * 101);

 const hornyembed = new Discord.MessageEmbed()
 .setTitle(`Horny`)
 .setDescription(`${member.username} is ` + rng + "% Horny ")
 .setColor("RANDOM")

 message.channel.send({embeds: [hornyembed]})
 }
}