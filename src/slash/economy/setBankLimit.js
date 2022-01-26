const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setbanklimit')
		.setDescription('To set bank limit of a user !')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount').setRequired(true)),

    permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        if(interaction.user.id !== '784141856426033233') return interaction.reply("U aint criz lol");

        let user = interaction.options.getUser('user');
        let money = interaction.options.getInteger('amount');

        let result = await cs.setBankSpace(user.id, null, money || 0);
        if (result.error) {
            if (result.type === 'no-amount-provided') return interaction.reply('Please provide number to setBank Limit to.');
            else return interaction.reply(`Successfully set Bank Limit of ${user.tag} to ${money}`);
        } else return interaction.reply(`Successfully set Bank Limit of ${user.tag} to ${money}`)   
      
	},
};