const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('glb')
		.setDescription('To check global leaderboard'),
	async execute(interaction, client) {

        let data = await cs.globalLeaderboard();
        if (data.length < 1) return interaction.reply("Nobody's in Global leaderboard yet.");
        const msg = new MessageEmbed();
        let pos = 0;
        // To make global leaderboard show members
        // of current guild only, un comment the next line.
    
        // data = data.filter(e => message.guild.members.cache.has(e.userID));

        // This is to get First 10 Users )
        data.slice(0, 10).map(e => {
            pos++
            if (!client.users.cache.get(e.userID)) return;
            msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** - Bank: **${e.bank}**`, true);
        });

        interaction.reply({embeds: [msg]}).catch();
	},
};