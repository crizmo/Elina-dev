const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('useitem')
		.setDescription('Use item from your inv to get money!')
        .addStringOption(option => option.setName('name').setDescription('Item name').setRequired(true)),
        
	async execute(interaction, client) {

        const item = interaction.options.getString('name');
        if (!item) return interaction.reply("What item you wana use?")

        let haveItem = false;
        const arr = await cs.getUserItems({
          user: interaction.user,
          guild: interaction.guild,
        });
        let i;
        for (key in arr.inventory) {
          if (arr.inventory[key].name.toLowerCase().includes(item.toLowerCase())) haveItem = true
          i = key;
        };
        if (haveItem) {
          let money = Math.floor((Math.random() * 10) + 1) * 100 // 100 - 1000
          let result = await cs.addMoney({
            user: interaction.user,
            guild: interaction.guild,
            amount: money,
            wheretoPutMoney: 'wallet'
          });
          let a = await cs.removeUserItem({
            user: interaction.user,
            guild: interaction.guild,
            item: i+1
          });
          if (result.error) {
            console.log(result)
            return interaction.reply("Unknown error occured see console.")
          } else return interaction.reply("You've used " + item + " and earned $" + money)
    
        } else return interaction.reply("Please buy the item first!")

	},  
};