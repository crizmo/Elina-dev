const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('glb')
		.setDescription('To check global leaderboard')
        .addIntegerOption(option => option.setName('number').setDescription('Enter an integer')),

	async execute(interaction, client) {

        
        const amount = interaction.options.getInteger('number');

        if (amount > 20) return interaction.reply("You can only view max top 20!");

        let data = await cs.globalLeaderboard();
        if (data.length < 1) return interaction.reply("Nobody's in Global leaderboard yet.");
        const msg = new MessageEmbed();
        let pos = 0;

        if (amount) {
            data.slice(0, amount).map(e => {
                pos++
                if (!client.users.cache.get(e.userID)) return;
                const total = e.wallet + e.bank;
                msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** \n Bank: **${e.bank}** \n Total: **${total}**`, true);
            });

            interaction.reply({embeds: [msg]}).catch();
        } else {
            data.slice(0, 10).map(e => {
                pos++
                if (!client.users.cache.get(e.userID)) return;
                const total = e.wallet + e.bank;
                msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** \n Bank: **${e.bank}** \n Total: **${total}**`, true);
            });

            interaction.reply({embeds: [msg]}).catch();
        }
	},
};