const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-elements",
    aliases: ["gen-el", "gen-elements", "genshin-el"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage <:paimon:927534293515911178>')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do \n `\ =gen-el {element_name} \`')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c2904ed6cfa731edd18d8ffe285b6695.png")
        .setTimestamp();

        if (!name) return message.channel.send({ embeds: [errorEmbed]})

        let Elem_Data = []
        let D_elements = await fetch(`https://api.genshin.dev/elements/${name}/`)
        let I_elements = `https://api.genshin.dev/elements/${name}/icon.png`
        let data = await D_elements.json();

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
        }).catch((err) => {
            message,channel.send("hi");
        });

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
    
            message.channel.send({ embeds: [elEmbed] }) 
                }

        else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && !data.reactions[3]){
            const elEmbed = new MessageEmbed()
                .setTitle(`Element info - ${Elem_Data[0].elname}`) 
                .setDescription("Genshin impact element info")
                .addFields(
                    // rec 1
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

            message.channel.send({ embeds: [elEmbed] }) 
            }
            else if(data.reactions[0] && data.reactions[1] && data.reactions[2] && data.reactions[3]){
                const elEmbed = new MessageEmbed()
                .setTitle(`Element info - ${Elem_Data[0].elname}`) 
                .setDescription("Genshin impact element info")
                .addFields(
                    // rec 1
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

                message.channel.send({ embeds: [elEmbed] })
            }
            else {
                message.channel.send("hi")
            }
    }
}