const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bal')
		.setDescription('Check balance of a user!')
		.addUserOption(option => option.setName('user').setDescription('Select a user')),

    // permissions: [ Permissions.FLAGS. ],
	async execute(interaction, client) {

		const user = interaction.options.getUser('user') || interaction.user;

        let result = await cs.balance({
            user: user,
            guild: interaction.guild
        });

        let avatar = user.displayAvatarURL({dynamic: true, size: 1024})

        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s Balance`, user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`Your wallet bal is **${result.wallet}** ¥\nYour bank bal is **${result.bank}** ¥`)
        .setThumbnail(avatar)
        interaction.reply({embeds: [embed]})
                
	},
};