const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "Poll command",

    async execute(client, message, args, Discord) {

        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        if(!pollChannel) return message.channel.send("Please mention a channel name and then the description")
        if(!pollDescription) return message.channel.send("Please mention a channel name and then the description")

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('Elina Poll')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        let msgEmbed = await pollChannel.send({embeds: [embedPoll]});
        await msgEmbed.react('✅')
        await msgEmbed.react('❎')
    
    }
}