const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "announce",
    cooldown: 2,
    permissions: ["ADMINISTRATOR"],
    description: 'Elina bot updates !',
    async execute(client, message, args, Discord, profileData) {

        if (message.author.id !== '784141856426033233') return message.channel.send("U aint criz ");

        let channel = message.mentions.channels.first();
        if (!channel) return message.channel.send("Please mention a channel name and then the description")

        const announceEmbed = new Discord.MessageEmbed()
            .setTitle('Possible new updates on da way!')
            .addField('Economy', `> Redoing economy stuff \n> Basicallly how the embed looks\n> Might add more earnings method`)
            .addField('Shop', `> Adding more items to the shop soon!`)
            .addField('Genshin Commands', `> Will work more on how the embed looks + buttons`)
            .addField('Website changes', `> Updated Elina bots website to a new domain - [Website](https://elina-bot.netlify.app)`)
            .setFooter("The new update also includes: bugfixes, hosting issue , website updates, and more!")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

        let msgEmbed = await channel.send({ embeds: [announceEmbed] });
        await msgEmbed.react('👍')


        message.channel.send("**Announcement has been done**")
    }
}