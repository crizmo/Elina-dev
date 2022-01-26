const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const cooldowns = new Map()
const Discord = require('discord.js');
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slotseco')
		.setDescription('Earnings method - slots!'),

    cooldown: 1 * 60,
	async execute(interaction, client) {

        const slotemoji = "🤑"; // You can even use animated emojis!
            /* ITEMS (SLOTS) */
            let items = ['💵', '💍', '💯'];
            /* RANDOM */
            let $ = items[Math.floor(items.length * Math.random())];
            let $$ = items[Math.floor(items.length * Math.random())];
            let $$$ = items[Math.floor(items.length * Math.random())];
            /* EMBEDS */

        const play = new MessageEmbed()
            .setTitle("Slot Machine")
            .setDescription("• " + slotemoji + "  " + slotemoji + "  " + slotemoji + " •")
            .setColor('RANDOM')
            .setFooter("Are you lucky?")

        const $1 = new MessageEmbed()
            .setTitle("Slot Machine")
            .setDescription("• " + $ + "  " + slotemoji + "  " + slotemoji + " •")
            .setColor('RANDOM')
            .setFooter("Are you lucky?")

        const $2 = new MessageEmbed()
            .setTitle("Slot Machine")
            .setDescription("• " + $ + "  " + $$ + "  " + slotemoji + " •")
            .setColor('RANDOM')
            .setFooter("Are you lucky?")

        const $3 = new Discord.MessageEmbed()
            .setTitle("Slot Machine")
            .setDescription("• " + $ + "  " + $$ + "  " + $$$ + " •")
            .setColor('RANDOM')
            .setFooter("Are you lucky?")

        /* SPIN THE SLOTS */

        await interaction.reply({ embeds: [play] });
        setTimeout(() => {
            interaction.editReply({ embeds: [$1] });
        }, 600);
        setTimeout(() => {
            interaction.editReply({ embeds: [$2] });
        }, 1200);
        setTimeout(() => {
            interaction.editReply({ embeds: [$3] });
        }, 1800);

        /* DEDUCT RESULTS */
        if ($$ !== $ && $$ !== $$$ && $ !== $$$) {
            setTimeout(async () => {
                const money = 5000;
                let result = await cs.removeMoney({
                    user: interaction.user,
                    guild: interaction.guild, // { id: null }
                    amount: money,
                });
                interaction.editReply(`Shit, ${interaction.user.tag} you lost ${money} ¥! You now have ${result.rawData.wallet} ¥ in your wallet!`);
            }, 3000);

        } else if ($ === $$ && $ === $$$) {
            setTimeout(async () => {
                const money = 10000;
                let result = await cs.addMoney({
                    user: interaction.user,
                    guild: interaction.guild, // { id: null }
                    amount: money,
                });
                interaction.editReply(`Congrats, ${interaction.user.tag} you won ${money} ¥! You now have ${result.rawData.wallet} ¥ in your wallet!`);
            }, 3000);

        } else {
            interaction.editReply("2 slots are equal... You were close but you lost! You won nothing!")
        }
	},
};