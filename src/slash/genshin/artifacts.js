const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gen-artifact')
		.setDescription('Genshin artifact command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Artifact name').setRequired(true)),
    
    cooldown: 1 * 10,
	async execute(interaction, client) {

        const name = interaction.options.getString('name');
        const rlname = name.toLowerCase();

        let Arti_Data = []
        let D_artifact = await fetch(`https://api.genshin.dev/artifacts/${name}/`)
        let I_artifact = `https://api.genshin.dev/artifacts/${rlname}/flower-of-life.png`
        let data = await D_artifact.json();

        if(!data.name){
            await interaction.reply("Incorrect artifact name");
        } else {

        Arti_Data.push({
            artiname : data.name.toLocaleString(),
            rarity : data.max_rarity.toLocaleString(),
            bonus2 : data["2-piece_bonus"].toLocaleString(),
            bonus4 : data["4-piece_bonus"].toLocaleString(),
            image: I_artifact.toString(),
        })

        const artiEmbed = new MessageEmbed()
        
        .setTitle(`Genshin Impact - ${Arti_Data[0].artiname}`) 
        .setDescription("Genshin impact artifact info")
        .addFields(
            { name: `Rarity`, value: `${Arti_Data[0].rarity} ⭐`, inline: true},
            { name: `2 Piece Bonus`, value: `${Arti_Data[0].bonus2}`, inline: true},
            { name: `4 Piece Bonus`, value: `${Arti_Data[0].bonus4}`, inline: true},
        )
        .setThumbnail(`${Arti_Data[0].image}`)
        .setTimestamp()

        await interaction.reply({ embeds: [artiEmbed] })
        }

	},  
};