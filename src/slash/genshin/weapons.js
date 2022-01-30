const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gen-weapon')
		.setDescription('Genshin weapon command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Weapon name').setRequired(true)),
     
    cooldown: 1 * 10,    
	async execute(interaction, client) {

        const name = interaction.options.getString('name');
        const rlname = name.toLowerCase();

        let Wp_Data = []
        let D_weapon = await fetch(`https://api.genshin.dev/weapons/${name}/`)
        let I_weapon = `https://api.genshin.dev/weapons/${rlname}/icon.png`
        let data = await D_weapon.json();

        if(!data.name) return interaction.reply("Incorrect weapon name");

        Wp_Data.push({
            wpname : data.name.toLocaleString(),
            type : data.type.toLocaleString(),
            rarity : data.rarity.toLocaleString(),
            baseAttack : data.baseAttack.toLocaleString(),
            subStats : data.subStat.toLocaleString(),
            passiveName : data.passiveName.toLocaleString(),
            passiveDesc : data.passiveDesc.toLocaleString(),
            location : data.location.toLocaleString(),
            icon: I_weapon.toString(),
        })

        const wpEmbed = new MessageEmbed()
            .setTitle(`Genshin Impact - ${Wp_Data[0].wpname}`) 
            .setDescription("Genshin impact weapon info")
            .addFields(
                { name: `Type`, value: `${Wp_Data[0].type}`, inline: true},
                { name: `Rarity`, value: `${Wp_Data[0].rarity} ⭐`, inline: true},
                { name: `Base Atk`, value: `${Wp_Data[0].baseAttack}`, inline: true},
                { name: `Sub Stats`, value: `${Wp_Data[0].subStats}`, inline: true},
                { name: `Passive`, value: `${Wp_Data[0].passiveName}`, inline: true},
                { name: `Location`, value: `${Wp_Data[0].location}`, inline: true},
                { name: `Description`, value: `${Wp_Data[0].passiveDesc}`},
            )
            .setThumbnail(`${Wp_Data[0].icon}`)
            .setTimestamp()

        interaction.reply({ embeds: [wpEmbed] })

	},  
};