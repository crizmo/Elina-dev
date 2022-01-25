const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gen-nation')
		.setDescription('Genshin nation command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Nation name').setRequired(true)),
        
	async execute(interaction, client) {

        const name = interaction.options.getString('name');
        const rlname = name.toLowerCase();

        let Nat_Data = []
        let D_nation = await fetch(`https://api.genshin.dev/nations/${name}/`)
        let I_nation = `https://api.genshin.dev/nations/${rlname}/icon.png`
        let data = await D_nation.json();

        if(!data.name) return interaction.reply("Incorrect nation name");

        Nat_Data.push({
            natname : data.name.toLocaleString(),
            element : data.element.toLocaleString(),
            archon : data.archon.toLocaleString(),
            main : data.controllingEntity.toLocaleString(),
            icon: I_nation.toString(),
        })

        const natEmbed = new MessageEmbed()

            .setTitle(`Genshin Impact - ${Nat_Data[0].natname}`) 
            .setDescription("Genshin impact nation info")
            .addFields(
                { name: `Element`, value: `${Nat_Data[0].element}`, inline: true},
                { name: `Archon`, value: `${Nat_Data[0].archon}`, inline: true},
                { name: `Main`, value: `${Nat_Data[0].main}`, inline: true},
            )
            .setThumbnail(`${Nat_Data[0].icon}`)
            .setTimestamp()

        interaction.reply({ embeds: [natEmbed] })

	},  
};