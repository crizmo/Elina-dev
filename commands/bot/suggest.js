const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "suggestions",
    aliases: ['suggest'],
    permissions: ["SEND_MESSSAGES"],
    cooldown: 5,
    description: "Suggestions command",

    async execute(client, message, args, Discord) {

        let suggestChannel = message.mentions.channels.first();
        let suggestDescription = args.slice(1).join(' ');

        if(!suggestChannel) return message.channel.send("Please mention a channel name and then the description")
        if(!suggestDescription) return message.channel.send("Please mention a channel name and then the description")

        let embedSuggest = new Discord.MessageEmbed()
        .setTitle('New Suggestion')
        .addField('Author', message.author.toString(), true)
        .addField('From channel', message.channel.name, true)
        .addField('Suggestion', suggestDescription)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        let msgEmbed = await suggestChannel.send({embeds: [embedSuggest]});
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    
    }
}