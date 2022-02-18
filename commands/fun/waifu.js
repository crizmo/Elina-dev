const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "waifu",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "Shows a random waifu",
    async execute(client, message, args, Discord){

        const waifu = await fetch("https://api.waifu.pics/sfw/waifu").then(res => res.json());
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username} got a waifu!`)
            .setImage(waifu.url)
            .setFooter(`Hope you like it!`)
        message.channel.send({embeds: [embed]});
    }
}