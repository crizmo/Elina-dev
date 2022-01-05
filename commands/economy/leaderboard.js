const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Leaderboard command",

    async execute(client, message, args, Discord) {
        let data = await cs.globalLeaderboard();
        if (data.length < 1) return message.channel.send("Nobody's in Global leaderboard yet.");
        const msg = new MessageEmbed();
        let pos = 0;
    
        data = data.filter(e => message.guild.members.cache.has(e.userID));    //using glb command for lb

        data.slice(0, 10).map(e => {
            pos++
            if (!client.users.cache.get(e.userID)) return;
            msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** - Bank: **${e.bank}**`, true);
        });

        message.channel.send({embeds: [msg]}).catch();
    }
}