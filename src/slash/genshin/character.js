const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const cooldown = new Set();
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gen-character')
		.setDescription('Genshin character command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Character name').setRequired(true)),

    cooldown: 1 * 20,
	async execute(interaction, client) {

        const name = interaction.options.getString('name');
        const rlname = name.toLowerCase()

        let Chars_Data = []
        let D_character = await fetch(`https://api.genshin.dev/characters/${name}/`)
        let I_character = `https://api.genshin.dev/characters/${rlname}/icon.png`
        let Pic_character = `https://api.genshin.dev/characters/${rlname}/gacha-splash.png`
        let Card_character = `https://api.genshin.dev/characters/${rlname}/card.png`
        let Con_character = `https://api.genshin.dev/characters/${rlname}/constellation.png`
        let data = await D_character.json();

        if(!data.name) return interaction.reply("Incorrect character name");

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
            conimg : Con_character.toLocaleString(),

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
                // --------------------
                //  passive 2
                    passiveName2 : data.passiveTalents[1].name.toLocaleString(),
                    passiveUnlock2 : data.passiveTalents[1].unlock.toLocaleString(),
                    passiveDescription2 : data.passiveTalents[1].description.toLocaleString(),
                // --------------------
                //  passive 3
                    passiveName3 : data.passiveTalents[2].name.toLocaleString(),
                    passiveUnlock3 : data.passiveTalents[2].unlock.toLocaleString(),
                    passiveDescription3 : data.passiveTalents[2].description.toLocaleString(),
                // --------------------
            // passive end

            // constellations
                //constellation 1
                    conName1 : data.constellations[0].name.toLocaleString(),
                    conUnlock1 : data.constellations[0].unlock.toLocaleString(),
                    conDescription1 : data.constellations[0].description.toLocaleString(),
                    conLevel1 : data.constellations[0].level.toLocaleString(),
                // --------------------
                //constellation 2
                    conName2 : data.constellations[1].name.toLocaleString(),
                    conUnlock2 : data.constellations[1].unlock.toLocaleString(),
                    conDescription2 : data.constellations[1].description.toLocaleString(),
                    conLevel2 : data.constellations[1].level.toLocaleString(),
                // --------------------
                //constellation 3
                    conName3 : data.constellations[2].name.toLocaleString(),
                    conUnlock3 : data.constellations[2].unlock.toLocaleString(),
                    conDescription3 : data.constellations[2].description.toLocaleString(),
                    conLevel3 : data.constellations[2].level.toLocaleString(),
                // --------------------
                //constellation 4
                    conName4 : data.constellations[3].name.toLocaleString(),
                    conUnlock4 : data.constellations[3].unlock.toLocaleString(),
                    conDescription4 : data.constellations[3].description.toLocaleString(),
                    conLevel4 : data.constellations[3].level.toLocaleString(),
                // --------------------
                //constellation 5
                    conName5 : data.constellations[4].name.toLocaleString(),
                    conUnlock5 : data.constellations[4].unlock.toLocaleString(),
                    conDescription5 : data.constellations[4].description.toLocaleString(),
                    conLevel5 : data.constellations[4].level.toLocaleString(),
                // --------------------
                //constellation 6
                    conName6 : data.constellations[5].name.toLocaleString(),
                    conUnlock6 : data.constellations[5].unlock.toLocaleString(),
                    conDescription6 : data.constellations[5].description.toLocaleString(),
                    conLevel6 : data.constellations[5].level.toLocaleString(),
                // --------------------
            // constellations end
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
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].passiveUnlock1}`, inline: true},
            { name: `Info`, value: `${Chars_Data[0].passiveDescription1}`},
            // Passive 2
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Passive 2**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].passiveName2}`, inline: true}, 
            { name: `\u200B`, value: `\u200B`, inline: true},
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

        // Constellation 1 & 2 Start

        const con12Embed = new MessageEmbed()
        .setTitle(`${Chars_Data[0].charname}'s Constellation 1 & 2`) 
        .setDescription(`${Chars_Data[0].description}`)
        .addFields(
            // Con 1
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 1**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName1}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel1}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock1}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription1}`},
            // Con 2
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 2**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName2}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel2}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock2}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription2}`},
        )
        .setColor("44E2F8")
        .setThumbnail(`${Chars_Data[0].conimg}`)
        .setTimestamp()

        const con34Embed = new MessageEmbed()
        .setTitle(`${Chars_Data[0].charname}'s Constellation 3 & 4`) 
        .setDescription(`${Chars_Data[0].description}`)
        .addFields(
            // Con 3
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 3**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName3}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel3}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock3}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription3}`},
            // Con 4
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 4**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName4}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel4}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock4}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription4}`},
        )
        .setColor("44E2F8")
        .setThumbnail(`${Chars_Data[0].conimg}`)
        .setTimestamp()

        const con56Embed = new MessageEmbed()
        .setTitle(`${Chars_Data[0].charname}'s Constellation 5 & 6`) 
        .setDescription(`${Chars_Data[0].description}`)
        .addFields(
            // Con 5
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 5**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName5}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel5}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock5}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription5}`},
            // Con 6
            { name: `\u200B`, value: `\u200B`, inline: true}, 
            { name: `\u200B`, value: `**Constellation 6**`, inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true},
            { name: `Name`, value: `${Chars_Data[0].conName6}`, inline: true}, 
            { name: `Level`, value: `${Chars_Data[0].conLevel6}`, inline: true},
            { name: `Unlock`, value: `${Chars_Data[0].conUnlock6}`, inline: true}, 
            { name: `Info`, value: `${Chars_Data[0].conDescription6}`},
        )
        .setColor("44E2F8")
        .setThumbnail(`${Chars_Data[0].conimg}`)
        .setTimestamp()

        // Constellation Embed End

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
            new MessageButton()
                .setCustomId('passive')
                .setLabel('Passive-Talent')
                .setStyle('SECONDARY'),
            );

        const row2 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('con12')
                .setLabel('Constellation:-1~2')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('con34')
                .setLabel('Constellation:-3~4')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('con56')
                .setLabel('Constellation:-5~6')
                .setStyle('SECONDARY'),
            );

        // interaction.reply({ embeds: [charEmbed], components: [row, row2] })
        const sentMessage = await interaction.reply({ embeds: [charEmbed], components: [row, row2] })

        const filter1 = i => i.customId === 'main' && i.user.id === interaction.user.username.id;

            const collectorMain = interaction.channel.createMessageComponentCollector({ filter1, time: 50000 });
            
            collectorMain.on('collect', async i => {
            if (i.customId === 'main') {
                await i.deferUpdate();
                await i.editReply({ embeds: [charEmbed], components: [row, row2] });
            }
            });

        // SKILLS

        const filter2 = i => i.customId === 'skill1' && i.user.id === interaction.user.username.id;

            const collectorSkill1 = interaction.channel.createMessageComponentCollector({ filter2, time: 50000 });
            
            collectorSkill1.on('collect', async i => {
            if (i.customId === 'skill1') {
                await i.deferUpdate();
                await i.editReply({ embeds: [skill1Embed], components: [row, row2] });
            }
            });

        const filter3 = i => i.customId === 'skill2' && i.user.id === interaction.user.username.id;

            const collectorSkill2 = interaction.channel.createMessageComponentCollector({ filter3, time: 50000 });
            
            collectorSkill2.on('collect', async i => {
            if (i.customId === 'skill2') {
                await i.deferUpdate();
                await i.editReply({ embeds: [skill2Embed], components: [row, row2] });
            }
            });

        const filter4 = i => i.customId === 'skill3' && i.user.id === interaction.user.username.id;

            const collectorSkill3 = interaction.channel.createMessageComponentCollector({ filter4, time: 50000 });
            
            collectorSkill3.on('collect', async i => {
            if (i.customId === 'skill3') {
                await i.deferUpdate();
                await i.editReply({ embeds: [skill3Embed], components: [row, row2] });
            }
            });

        // PASSIVE 

        const filter5 = i => i.customId === 'passive' && i.user.id === interaction.user.username.id;

            const collectorPassive = interaction.channel.createMessageComponentCollector({ filter5, time: 50000 });
            
            collectorPassive.on('collect', async i => {
            if (i.customId === 'passive') {
                await i.deferUpdate();
                await i.editReply({ embeds: [passiveEmbed], components: [row, row2] });
            }
            });

        // Constellation 1 - 6

        const filter6 = i => i.customId === 'con12' && i.user.id === interaction.user.username.id;

            const collectorCon12 = interaction.channel.createMessageComponentCollector({ filter6, time: 50000 });
            
            collectorCon12.on('collect', async i => {
            if (i.customId === 'con12') {
                await i.deferUpdate();
                await i.editReply({ embeds: [con12Embed], components: [row, row2] });
            }
            });

        const filter7 = i => i.customId === 'con34' && i.user.id === interaction.user.username.id;

            const collectorCon34 = interaction.channel.createMessageComponentCollector({ filter7, time: 50000 });
            
            collectorCon34.on('collect', async i => {
            if (i.customId === 'con34') {
                await i.deferUpdate();
                await i.editReply({ embeds: [con34Embed], components: [row, row2] });
            }
            });

        const filter8 = i => i.customId === 'con12' && i.user.id === interaction.user.username.id;

            const collectorCon56 = interaction.channel.createMessageComponentCollector({ filter8, time: 50000 });
            
            collectorCon56.on('collect', async i => {
            if (i.customId === 'con56') {
                await i.deferUpdate();
                await i.editReply({ embeds: [con56Embed], components: [row, row2] });
            }
            });

        cooldown.add(interaction.user.id);
        
        setTimeout(function () {
            row.components[0].setDisabled(true);
            row.components[1].setDisabled(true);
            row.components[2].setDisabled(true);
            row.components[3].setDisabled(true);
            row.components[4].setDisabled(true);

            row2.components[0].setDisabled(true);
            row2.components[1].setDisabled(true);
            row2.components[2].setDisabled(true);
            interaction.editReply({ embeds: [charEmbed], components: [row, row2] })
            }, 50000);
            
	}
};