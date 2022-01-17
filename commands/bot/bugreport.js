const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bugreport",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    aliases: ['bug', 'reportbug'],
    description: 'let users report bugs',
    async execute (client, message, args, Discord, profileData) {
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('911936207829757992')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        message.channel.send({embeds: [reportEmbed]})
        //send the embed to the channel
        message.channel.send("**Bug report has been sent!**")
    }
}