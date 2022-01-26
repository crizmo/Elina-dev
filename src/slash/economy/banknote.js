const { SlashCommandBuilder } = require('@discordjs/builders');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('banknote')
		.setDescription('To increase bankspace of a user!'),

    // permissions: [ Permissions.FLAGS. ],
	async execute(interaction, client) {

        const arr = await cs.getUserItems({
            user: interaction.user,
            guild: interaction.guild
        });
        if (!arr.inventory.length) return interaction.reply("You don't have any banknotes!");
        for (i in arr.inventory) {
            if (arr.inventory[i].name.toLowerCase().includes('banknote')) {
                i++
                const removeItem = await cs.removeUserItem({
                    user: interaction.user,
                    item: i,
                    guild: interaction.guild
                });
                if (removeItem.error) {
                    console.log('Bot tried to remove item number ' + i)
                    return interaction.reply("Unknown error occured see console.")
                };
                const ToincreasedAmount = 5000 + removeItem.rawData.bankSpace;
                const result = await cs.setBankSpace(interaction.user.id, interaction.guild.id, ToincreasedAmount);
                if (!result.error) return interaction.reply(`Successfully set Bank Limit to ${ToincreasedAmount}`);
                else return interaction.reply(`Successfully set Bank Limit to ${ToincreasedAmount}`);
    
            } else return interaction.reply("Please buy the item first!")
        }; 
	},
};