const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gen-element')
		.setDescription('Genshin element command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Element name').setRequired(true)),
        
	async execute(interaction, client) {

        const name = interaction.options.getString('name');
        const rlname = name.toLowerCase()

        let Elem_Data = []
        let D_elements = await fetch(`https://api.genshin.dev/elements/${name}/`)
        let I_elements = `https://api.genshin.dev/elements/${rlname}/icon.png`
        let data = await D_elements.json();

        if(!data.name){
            interaction.reply("Invalid element name");
        }
        else if(name.toLowerCase() === data.name.toLowerCase()){

            if(data.reactions[0] && !data.reactions[1] && !data.reactions[2] && !data.reactions[3]){
                Elem_Data.push({
                    elname : data.name.toLocaleString(),
                    // reaction 
                        // rec 1
                            reacname1 : data.reactions[0].name.toLocaleString(),
                            reacelem1 : data.reactions[0].elements.toLocaleString(),
                            reacdesc1 : data.reactions[0].description.toLocaleString(),
                        // rec 1 end 
                    // reaction end
                    icon : I_elements.toString(),
                })
            }
            else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && !data.reactions[3]){
                Elem_Data.push({
                    elname : data.name.toLocaleString(),
                    // reaction 
                        // rec 1
                        reacname1 : data.reactions[0].name.toLocaleString(),
                        reacelem1 : data.reactions[0].elements.toLocaleString(),
                        reacdesc1 : data.reactions[0].description.toLocaleString(),
                    // rec 1 end 
                    // rec 2
                        reacname2 : data.reactions[1].name.toLocaleString(),
                        reacelem2 : data.reactions[1].elements.toLocaleString(),
                        reacdesc2 : data.reactions[1].description.toLocaleString(),
                    // // rec 2 end 
                    // // rec 3
                        reacname3 : data.reactions[2].name.toLocaleString(),
                        reacelem3 : data.reactions[2].elements.toLocaleString(),
                        reacdesc3 : data.reactions[2].description.toLocaleString(),
                    // rec 3 end            
                    // reaction end
                    icon : I_elements.toString(),
                })
            }
            else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && data.reactions[3]){
                Elem_Data.push({
                    elname : data.name.toLocaleString(),
                    // reaction 
                        // rec 1
                        reacname1 : data.reactions[0].name.toLocaleString(),
                        reacelem1 : data.reactions[0].elements.toLocaleString(),
                        reacdesc1 : data.reactions[0].description.toLocaleString(),
                    // rec 1 end 
                    // rec 2
                        reacname2 : data.reactions[1].name.toLocaleString(),
                        reacelem2 : data.reactions[1].elements.toLocaleString(),
                        reacdesc2 : data.reactions[1].description.toLocaleString(),
                    // // rec 2 end 
                    // // rec 3
                        reacname3 : data.reactions[2].name.toLocaleString(),
                        reacelem3 : data.reactions[2].elements.toLocaleString(),
                        reacdesc3 : data.reactions[2].description.toLocaleString(),
                    // rec 3 end 
                    // // rec 3
                        reacname4 : data.reactions[3].name.toLocaleString(),
                        reacelem4 : data.reactions[3].elements.toLocaleString(),
                        reacdesc4 : data.reactions[3].description.toLocaleString(),
                    // rec 3 end 
                    // reaction end
                    icon : I_elements.toString(),
                })
            }

                if(data.reactions[0] && !data.reactions[1] && !data.reactions[2] && !data.reactions[3]){
                const elEmbed = new MessageEmbed()
                    .setTitle(`Element info - ${Elem_Data[0].elname}`) 
                    .setDescription("Genshin impact element info")
                    .addFields(
                        // rec 1
                        { name: `Reaction 1`, value: `${Elem_Data[0].reacname1}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem1}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc1}`},
                    )
                    .setThumbnail(`${Elem_Data[0].icon}`)
                    .setTimestamp()
        
                    interaction.reply({ embeds: [elEmbed] }) 
                    }

                else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && !data.reactions[3]){
                const elEmbed = new MessageEmbed()
                    .setTitle(`Element info - ${Elem_Data[0].elname}`) 
                    .setDescription("Genshin impact element info")
                    .addFields(
                        // rec 1
                        // { name: `\u200B`, value: `--------------------------------------------------------`},
                        { name: `Reaction 1`, value: `${Elem_Data[0].reacname1}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem1}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc1}`},
                        { name: `\u200B`, value: `--------------------------------------------------------`}, 
                        // rec 2
                        { name: `Reaction 2`, value: `${Elem_Data[0].reacname2}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem2}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc2}`},
                        { name: `\u200B`, value: `--------------------------------------------------------`}, 
                        // rec 3
                        { name: `Reaction 3`, value: `${Elem_Data[0].reacname3}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem3}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc3}`},
                    )
                    .setThumbnail(`${Elem_Data[0].icon}`)
                    .setTimestamp()

                interaction.reply({ embeds: [elEmbed] }) 
                }
                else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && data.reactions[3]){
                    const elEmbed = new MessageEmbed()
                    .setTitle(`Element info - ${Elem_Data[0].elname}`) 
                    .setDescription("Genshin impact element info")
                    .addFields(
                        // rec 1
                        { name: `\u200B`, value: `--------------------------------------------------------`},
                        { name: `Reaction 1`, value: `${Elem_Data[0].reacname1}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem1}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc1}`},
                        { name: `\u200B`, value: `--------------------------------------------------------`}, 
                        // rec 2
                        { name: `Reaction 2`, value: `${Elem_Data[0].reacname2}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem2}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc2}`},
                        { name: `\u200B`, value: `--------------------------------------------------------`}, 
                        // rec 3
                        { name: `Reaction 3`, value: `${Elem_Data[0].reacname3}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem3}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc3}`},
                        { name: `\u200B`, value: `--------------------------------------------------------`}, 
                        // rec 3
                        { name: `Reaction 4`, value: `${Elem_Data[0].reacname4}`, inline: true},
                        { name: `Element combo`, value: `${Elem_Data[0].reacelem4}`, inline: true},
                        { name: `Description`, value: `${Elem_Data[0].reacdesc4}`},
                    )
                    .setThumbnail(`${Elem_Data[0].icon}`)
                    .setTimestamp()

                    interaction.reply({ embeds: [elEmbed] })
                }
                else {
                    interaction.reply("hi, lol how did u get this!")
                }
        }
        else if(name.toLowerCase() !== data.name.toLowerCase()){
            interaction.reply("wrong name");
        }

	}
};