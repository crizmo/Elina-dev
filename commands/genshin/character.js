const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-character",
    aliases: ["gen-char", "gen-character", "genshin-char"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage <:paimon:927534293515911178>')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do \n `\ =gen-char {character_name} \`')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c2904ed6cfa731edd18d8ffe285b6695.png")
        .setTimestamp();

        if (!name) return message.channel.send({ embeds: [errorEmbed]})

        let Chars_Data = []
        let D_character = await fetch(`https://api.genshin.dev/characters/${name}/`)
        let I_character = `https://api.genshin.dev/characters/${name}/icon.png`
        let Pic_character = `https://api.genshin.dev/characters/${name}/gacha-splash.png`
        let Card_character = `https://api.genshin.dev/characters/${name}/card.png`
        let data = await D_character.json();

        Chars_Data.push({
            charname : data.name.toLocaleString(),
            vision : data.vision.toLocaleString(),
            nation : data.nation.toLocaleString(),
            weapon : data.weapon.toLocaleString(),
            affiliation : data.affiliation.toLocaleString(),
            rarity : data.rarity.toLocaleString(),
            constellation : data.constellation.toLocaleString(),
            birthday : data.birthday.toLocaleString(),
            description : data.description.toLocaleString(),
            icon : I_character.toString(),
            pic : Pic_character.toLocaleString(),
            card : Card_character.toLocaleString(),

            // skilltalent
                //  skill 1
                    skillname1 : data.skillTalents[0].name.toLocaleString(),
                    skillunlock1 : data.skillTalents[0].unlock.toLocaleString(),
                    skilldescription1 : data.skillTalents[0].description.toLocaleString(),
                    skilltype1 : data.skillTalents[0].type.toLocaleString(),
                // --------------------
                //  skill 2
                    skillname2 : data.skillTalents[1].name.toLocaleString(),
                    skillunlock2 : data.skillTalents[1].unlock.toLocaleString(),
                    skilldescription2 : data.skillTalents[1].description.toLocaleString(),
                    skilltype2 : data.skillTalents[1].type.toLocaleString(),
                // --------------------
                //  skill 3
                    skillname3 : data.skillTalents[2].name.toLocaleString(),
                    skillunlock3 : data.skillTalents[2].unlock.toLocaleString(),
                    skilldescription3 : data.skillTalents[2].description.toLocaleString(),
                    skilltype3 : data.skillTalents[2].type.toLocaleString(),
                // --------------------
            // skill end

            // PassiveTalents
                //  passive 1
                    passiveName1 : data.passiveTalents[0].name.toLocaleString(),
                    passiveUnlock1 : data.passiveTalents[0].unlock.toLocaleString(),
                    passiveDescription1 : data.passiveTalents[0].description.toLocaleString(),
                    passiveLevel1 : data.passiveTalents[0].level.toLocaleString(),
                // --------------------
                //  passive 2
                    passiveName2 : data.passiveTalents[1].name.toLocaleString(),
                    passiveUnlock2 : data.passiveTalents[1].unlock.toLocaleString(),
                    passiveDescription2 : data.passiveTalents[1].description.toLocaleString(),
                    passiveLevel2 : data.passiveTalents[1].level.toLocaleString(),
                // --------------------
                //  passive 3
                    passiveName3 : data.passiveTalents[2].name.toLocaleString(),
                    passiveUnlock3 : data.passiveTalents[2].unlock.toLocaleString(),
                    passiveDescription3 : data.passiveTalents[2].description.toLocaleString(),
                // --------------------
            // passive end
        })

            const charEmbed = new MessageEmbed()
            .setTitle(`Genshin Impact - ${Chars_Data[0].charname}`) 
            .setDescription(`${Chars_Data[0].description}`)
            .addFields(
                { name: `Rarity`, value: `${Chars_Data[0].rarity} ⭐`, inline: true},
                { name: `Vision`, value: `${Chars_Data[0].vision}`, inline: true},
                { name: `Nation`, value: `${Chars_Data[0].nation}`, inline: true},
                { name: `Constellation`, value: `${Chars_Data[0].constellation}`, inline: true},
                { name: `Weapon`, value: `${Chars_Data[0].weapon}`, inline: true},
                { name: `Affiliation`, value: `${Chars_Data[0].affiliation}`, inline: true},     
            )
            .setImage(`${Chars_Data[0].pic}`)
            .setColor("44E2F8")
            .setThumbnail(`${Chars_Data[0].icon}`)
            .setTimestamp()

            // SKILLS START

            const skill1Embed = new MessageEmbed()
            .setTitle(`${Chars_Data[0].charname}'s Talent skills`) 
            .setDescription(`${Chars_Data[0].description}`)
            .addFields(
                { name: `Skill`, value: `${Chars_Data[0].skillname1}`, inline: true}, 
                { name: `Type`, value: `${Chars_Data[0].skilltype1}`, inline: true},
                { name: `Description`, value: `${Chars_Data[0].skilldescription1}`},
            )
            .setImage(`${Chars_Data[0].pic}`)
            .setColor("44E2F8")
            .setThumbnail(`${Chars_Data[0].card}`)
            .setTimestamp()

            const skill2Embed = new MessageEmbed()
            .setTitle(`${Chars_Data[0].charname}'s Talent skills`) 
            .setDescription(`${Chars_Data[0].description}`)
            .addFields(
                { name: `Skill`, value: `${Chars_Data[0].skillname2}`, inline: true}, 
                { name: `Type`, value: `${Chars_Data[0].skilltype2}`, inline: true},
                { name: `Description`, value: `${Chars_Data[0].skilldescription2}`},
            )
            .setImage(`${Chars_Data[0].pic}`)
            .setColor("44E2F8")
            .setThumbnail(`${Chars_Data[0].card}`)
            .setTimestamp()

            const skill3Embed = new MessageEmbed()
            .setTitle(`${Chars_Data[0].charname}'s Talent skills`) 
            .setDescription(`${Chars_Data[0].description}`)
            .addFields(
                { name: `Skill`, value: `${Chars_Data[0].skillname3}`, inline: true}, 
                { name: `Type`, value: `${Chars_Data[0].skilltype3}`, inline: true},
                { name: `Description`, value: `${Chars_Data[0].skilldescription3}`},
            )
            .setImage(`${Chars_Data[0].pic}`)
            .setColor("44E2F8")
            .setThumbnail(`${Chars_Data[0].card}`)
            .setTimestamp()

            // SKILLS END

            // PASSIVE START

            const passiveEmbed = new MessageEmbed()
            .setTitle(`${Chars_Data[0].charname}'s Passive skills`) 
            .setDescription(`${Chars_Data[0].description}`)
            .addFields(
                // Passive 1
                { name: `\u200B`, value: `\u200B`, inline: true}, 
                { name: `\u200B`, value: `**Passive 1**`, inline: true},
                { name: `\u200B`, value: `\u200B`, inline: true},
                { name: `Name`, value: `${Chars_Data[0].passiveName1}`, inline: true},  
                { name: `Level`, value: `${Chars_Data[0].passiveLevel1}`, inline: true},
                { name: `Unlock`, value: `${Chars_Data[0].passiveUnlock1}`, inline: true},
                { name: `Info`, value: `${Chars_Data[0].passiveDescription1}`},
                // Passive 2
                { name: `\u200B`, value: `\u200B`, inline: true}, 
                { name: `\u200B`, value: `**Passive 2**`, inline: true},
                { name: `\u200B`, value: `\u200B`, inline: true},
                { name: `Name`, value: `${Chars_Data[0].passiveName2}`, inline: true}, 
                { name: `Level`, value: `${Chars_Data[0].passiveLevel2}`, inline: true},
                { name: `Unlock`, value: `${Chars_Data[0].passiveUnlock2}`, inline: true}, 
                { name: `Info`, value: `${Chars_Data[0].passiveDescription2}`},
                // Passive 3
                { name: `\u200B`, value: `\u200B`, inline: true}, 
                { name: `\u200B`, value: `**Passive 3**`, inline: true},
                { name: `\u200B`, value: `\u200B`, inline: true},
                { name: `Name`, value: `${Chars_Data[0].passiveName3}`, inline: true}, 
                { name: `\u200B`, value: `\u200B`, inline: true},
                { name: `Unlock`, value: `${Chars_Data[0].passiveUnlock3}`, inline: true}, 
                { name: `Info`, value: `${Chars_Data[0].passiveDescription3}`},
            )
            .setColor("44E2F8")
            .setThumbnail(`${Chars_Data[0].icon}`)
            .setTimestamp()

            // PASSIVE END

            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId('main')
                    .setLabel('Character')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('skill1')
                    .setLabel('Skill-1')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('skill2')
                    .setLabel('Skill-2')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('skill3')
                    .setLabel('Skill-3')
                    .setStyle('SECONDARY'),
                );

            const row2 = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId('passive')
                    .setLabel('Passives')
                    .setStyle('SECONDARY'),
                );

            message.channel.send({ embeds: [charEmbed], components: [row, row2] })

            const filter1 = i => i.customId === 'main' && i.user.id === message.member.user.id;

                const collectorMain = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
                
                collectorMain.on('collect', async i => {
                if (i.customId === 'main') {
                    await i.deferUpdate()
                    await i.editReply({ embeds: [charEmbed], components: [row, row2] });
                }
                });

            // SKILLS
  
            const filter2 = i => i.customId === 'skill1' && i.user.id === message.member.user.id;
    
                const collectorSkill1 = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
                
                collectorSkill1.on('collect', async i => {
                if (i.customId === 'skill1') {
                    await i.deferUpdate()
                    await i.editReply({ embeds: [skill1Embed], components: [row, row2] });
                }
                });

            const filter3 = i => i.customId === 'skill2' && i.user.id === message.member.user.id;
    
                const collectorSkill2 = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
                
                collectorSkill2.on('collect', async i => {
                if (i.customId === 'skill2') {
                    await i.deferUpdate()
                    await i.editReply({ embeds: [skill2Embed], components: [row, row2] });
                }
                });

            const filter4 = i => i.customId === 'skill3' && i.user.id === message.member.user.id;
    
                const collectorSkill3 = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
                
                collectorSkill3.on('collect', async i => {
                if (i.customId === 'skill3') {
                    await i.deferUpdate()
                    await i.editReply({ embeds: [skill3Embed], components: [row, row2] });
                }
                });

            // PASSIVE 

            const filter5 = i => i.customId === 'passive' && i.user.id === message.member.user.id;
    
                const collectorPassive = message.channel.createMessageComponentCollector({ filter5, time: 50000 });
                
                collectorPassive.on('collect', async i => {
                if (i.customId === 'passive') {
                    await i.deferUpdate()
                    await i.editReply({ embeds: [passiveEmbed], components: [row, row2] });
                }
                });
    }
}