const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Check shop!'),

	async execute(interaction, client) {

        try{
            let result = await cs.getShopItems({
                guild: interaction.guild
            });
            
            let inv = result.inventory;
        
            const embed = new MessageEmbed()
                .setTitle('Item Shop')
                .setDescription('Here are the following items you can buy, to buy an item do \` /buy <item_number> \`')
                .setColor('RED')
            for (let key in inv) {
                embed.addField(`${parseInt(key) + 1} ・ **${inv[key].name}:**  \` ¥ ${inv[key].price} \` `,`> ${inv[key].description}`)
            }
            interaction.reply({
                embeds: [embed],

            })
        } catch (err) {
                interaction.reply('Nothing is there in the shop')
            }     
	},
};