const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "globalleaderboard",
    aliases: ["glb"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Leaderboard command",

    async execute(client, message, args, Discord) {
        let data = await cs.globalLeaderboard();
        if (data.length < 1) return message.channel.send("Nobody's in Global leaderboard yet.");
        const msg = new MessageEmbed();
        let pos = 0;
        data.slice(0, 10).map(e => {
            pos++
            if (!client.users.cache.get(e.userID)) return;
            const total = e.wallet + e.bank;
            msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** \n Bank: **${e.bank}** \n Total: **${total}**`, true);
        });

        message.channel.send({embeds: [msg]}).catch();
    }
}