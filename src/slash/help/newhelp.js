const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const cooldown = new Set();
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Discord } = require('discord.js');
const emo = require("./emoji.json");
let color = "#00ccff";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newhelp')
		.setDescription('Help command!'),
        
	async execute(interaction, client) {

        const user = interaction.user
        let avatar = user.displayAvatarURL()
        let categories = [];
    
        let ignored = [
          "dev",
          "configuration",
          "utils",
          "reportadd",
        ];
  
        readdirSync("./src/slash/").forEach((dir) => {                         // && ./commands/ to add commands dir to slash help
          if (ignored.includes(dir.toLowerCase())) return;
          const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()}`;
          let cats = new Object();
  
          cats = {
            name: name,
            value: `\`${dir.toLowerCase()}\``,
            inline: true,
          };
  
          categories.push(cats);
        });

        const affection = new MessageEmbed()
        .setTitle("Affection commands!")
        .setDescription("To get info of commands `\ =help-affection \`")
        .setAuthor(`${interaction.user.username}`, avatar)
        .addFields(
          {name: `\u200B`, value: "`\ boop \` , `\ dance \` , `\ horny \` , `\ howgay \` , `\ hug \` \n `\ kill \` , `\ kiss \` , `\ match \` , `\ pet \` , `\ simp \` , `\ slap \` \n `\ spank \` , `\ spit \` , `\ yaoi \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const bot = new MessageEmbed()
        .setTitle("Bot commands commands!")
        .setDescription("To get info of commands `\ =help-bot \`")
        .setAuthor(`${interaction.user.username}`, avatar)
        .addFields(
          {name: `\u200B`, value: "`\ invite \` , `\ ping \` , `\ stats \` , `\ suggest \` , `\ bug \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const economy = new MessageEmbed()
        .setTitle("Economy commands!")
        .setDescription("Elina economy commands \n To get more information about elina's economy commands do `\ =help-eco \` then click the respective buttons to get per command information")
        .setAuthor(`${interaction.user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const fun = new MessageEmbed()
        .setTitle("Fun commands!")
        .setDescription("To get info of commands `\ =help-fun \`")
        .setAuthor(`${interaction.user.username}`, avatar)
        .addFields(
          {name: `\u200B`, value: "`\ 8ball \` , `\ coinflip \` , `\ connectfour \` , `\ eject \` \n `\ pokemon \` , `\ rps \` , `\ slots \` , `\ snake \` , `\ trivia \` \n `\ tic-tac-toe \` , `\ aki \` , `\ wyr \` , `\ qr \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const info = new MessageEmbed()
        .setTitle("Info command!")
        .setDescription("To get info of commands `\ =help-info \`")
        .setAuthor(`${interaction.user.tag}`, avatar )
        .addFields(
          {name: `\u200B`, value: "`\ anime \` , `\ djs || docs \` , `\ chatbot \` , `\ covid \` \n `\ credits \` , `\ github \`, `\ math \`, `\ poll \` , `\ weather \` \n `\ whois \` , `\ worldclock \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(client.user.displayAvatarURL({
            dynamic: true,
          }))
        .setColor(color);

        const moderation = new MessageEmbed()
        .setTitle("Moderation command!")
        .setDescription("To get info of commands `\ =help-mod \`")
        .setAuthor(`${interaction.user.tag}`, avatar )
        .addFields(
          {name: `\u200B`, value: "`\ ban \` , `\ clear \` , `\ kick \` , `\ roles \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(client.user.displayAvatarURL({
            dynamic: true,
          }))
        .setColor(color);

        const profile = new MessageEmbed()
        .setTitle("Profile command!")
        .setDescription("To get info of commands `\ =help-profile \`")
        .setAuthor(`${interaction.user.tag}`, avatar )
        .addFields(
          {name: `\u200B`, value: "`\ avatar \` , `\ deepfry \` , `\ tweet \`", inline: true},
        )
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(client.user.displayAvatarURL({
            dynamic: true,
          }))
        .setColor(color);

        const genEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact - Commands`) 
        .setDescription("Genshin impact commands")
        .addFields(
          { name: `Artifacts`, value: "`\ =gen-arti {artifact_name} \` || `\ =genshin-artifact \`"},
          { name: `Characters`, value: "`\ =gen-char {character_name} \` || `\ =genshin-character \`"},
          { name: `Elements`, value: "`\ =gen-el {element_name} \` || `\ =genshin-elements \`"}, 
          { name: `Nations`, value: "`\ =gen-nat {nation_name} \` || `\ =genshin-nations \`"},
          { name: `Weapons`, value: "`\ =gen-wp {weapon_name} \` || `\ =genshin-weapons \`"},
        )
        .setThumbnail(client.user.displayAvatarURL({
          dynamic: true,
        }))
        .setFooter("For more info do =genshin || =help-genshin")

        const embed = new MessageEmbed()
        .setTitle("Our full help menu!")
        .setDescription(
          `\`\`\`js\nPrefix: \nExtra information: <> If you see any error or any kind of bug please report to us!\`\`\`\n> To invite me : [Invite me](https://discord.com/oauth2/authorize?client_id=842397001954230303&permissions=1642828528711&scope=bot)\n\n> To check out a category, use \`help-[category-name]\``
        )
        .addFields(categories)
        .setFooter(`Requested by ${interaction.user.tag}`,interaction.user.displayAvatarURL({dynamic: true,}))
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({dynamic: true,}))
        .setColor(color);

        // Constellation Embed End

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('base')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('affection')
                .setLabel('Affection')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('bot')
                .setLabel('Bot')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('economy')
                .setLabel('Economy')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('fun')
                .setLabel('Fun')
                .setStyle('SECONDARY'),
            );
        
        const row2 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('info')
                .setLabel('Info')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('moderation')
                .setLabel('Moderation')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('profile')
                .setLabel('Profile')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('genshin')
                .setLabel('Genshin')
                .setStyle('SECONDARY'),
            );

        // interaction.reply({ embeds: [charEmbed], components: [row, row2] })
        await interaction.reply({ embeds: [embed], components: [row, row2] })

        const filter = i => i.customId === 'base' && i.user.id === interaction.member.user.id;

          const collectorHelp = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'base') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed], components: [row, row2] });
            }
          });

        const filter1 = i => i.customId === 'affection' && i.user.id === interaction.user.username.id;

          const collectorAff = interaction.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorAff.on('collect', async i => {
            if (i.customId === 'affection') {
              await i.deferUpdate()
              await i.editReply({ embeds: [affection], components: [row, row2] });
            }
          });

        const filter2 = i => i.customId === 'bot' && i.user.id === interaction.user.username.id;

          const collectorBot = interaction.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorBot.on('collect', async i => {
            if (i.customId === 'bot') {
              await i.deferUpdate()
              await i.editReply({ embeds: [bot], components: [row, row2] });
            }
          });

        const filter3 = i => i.customId === 'economy' && i.user.id === interaction.user.username.id;

          const collectorEco = interaction.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorEco.on('collect', async i => {
            if (i.customId === 'economy') {
              await i.deferUpdate()
              await i.editReply({ embeds: [economy], components: [row, row2] });
            }
          });

        const filter4 = i => i.customId === 'fun' && i.user.id === interaction.user.username.id;

          const collectorFun = interaction.channel.createMessageComponentCollector({ filter4, time: 50000 });
          
          collectorFun.on('collect', async i => {
            if (i.customId === 'fun') {
              await i.deferUpdate()
              await i.editReply({ embeds: [fun], components: [row, row2] });
            }
          });

        const filter5 = i => i.customId === 'info' && i.user.id === interaction.user.username.id;

          const collectorInfo = interaction.channel.createMessageComponentCollector({ filter5, time: 50000 });
          
          collectorInfo.on('collect', async i => {
            if (i.customId === 'info') {
              await i.deferUpdate()
              await i.editReply({ embeds: [info], components: [row, row2] });
            }
          });

        const filter6 = i => i.customId === 'moderation' && i.user.id === interaction.user.username.id;

          const collectorMod = interaction.channel.createMessageComponentCollector({ filter6, time: 50000 });
          
          collectorMod.on('collect', async i => {
            if (i.customId === 'moderation') {
              await i.deferUpdate()
              await i.editReply({ embeds: [moderation], components: [row, row2] });
            }
          });

        const filter7 = i => i.customId === 'profile' && i.user.id === interaction.user.username.id;

          const collectorPro = interaction.channel.createMessageComponentCollector({ filter7, time: 50000 });
          
          collectorPro.on('collect', async i => {
            if (i.customId === 'profile') {
              await i.deferUpdate()
              await i.editReply({ embeds: [profile], components: [row, row2] });
            }
          });

          const filter8 = i => i.customId === 'genshin' && i.user.id === interaction.user.username.id;

          const collectorGen = interaction.channel.createMessageComponentCollector({ filter8, time: 50000 });
          
          collectorGen.on('collect', async i => {
            if (i.customId === 'genshin') {
              await i.deferUpdate()
              await i.editReply({ embeds: [genEmbed], components: [row, row2] });
            }
          });
        
        setTimeout(function () {
            row.components[0].setDisabled(true);
            row.components[1].setDisabled(true);
            row.components[2].setDisabled(true);
            row.components[3].setDisabled(true);
            row.components[4].setDisabled(true);

            row2.components[0].setDisabled(true);
            row2.components[1].setDisabled(true);
            row2.components[2].setDisabled(true);
            row2.components[3].setDisabled(true);
            interaction.editReply({ embeds: [embed], components: [row, row2] })
            }, 50000);
        
	}
};