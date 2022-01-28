const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
let color = "#00ccff";
const { Discord } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help-eco')
		.setDescription('Economy help command!'),
        
	async execute(interaction, client) {

      const user = interaction.user;
      let avatar = user.displayAvatarURL()

      const embed = new MessageEmbed()
        .setTitle("Economy commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const earningsEmbed = new MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Earnings commands `, user.displayAvatarURL())
        .setTitle('Earning commands & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: `\ work \`', value: " > work "},
            {name: 'Aliases: `\ rob \`', value: "> rob @mention"},
            {name: 'Aliases: `\ beg \`', value: "> beg "},
            {name: 'Aliases: `\ daily \`', value: "> daily "},
            {name: 'Aliases: `\ weekly \`', value: "> weekly "},
            {name: 'Aliases: `\ monthly \`', value: "> monthly "},
            {name: 'Aliases: `\ slotseco \`', value: "> slotseco  "},
            {name: 'Aliases: `\ gamble \`', value: "> gamble {amount} "},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const shopEmbed = new MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Shop related commands `, user.displayAvatarURL())
        .setTitle('Shop related commands & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
          {name: 'Usage: `\ shop \`', value: " > To check shop items which users can buy"},
          {name: 'Usage: `\ additem \`', value: "> Admin command to add items in the shop "},
          {name: 'Usage: `\ removeitem \`', value: "> Admin command to remove items from the shop "},
          {name: 'Usage: `\ inventory \`', value: "> To check user inventory "},
          {name: 'Usage: `\ banknote \`', value: "> Use banknote to increase bank space by 5000 "},
          {name: 'Usage: `\ buy \`', value: "> To buy item from shop :- __buy {item_number}__ "},
          {name: 'Usage: `\ use \`', value: "> To use items and get yen through using them :- __use {item_name}__ "},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const balanceEmbed = new MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`User balance commands `, user.displayAvatarURL())
        .setTitle('User balance commands & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
          {name: 'Usage: `\ bal \`', value: " > To check user balance"},
          {name: 'Usage: `\ deposit \`', value: "> To deposit yen in the bank. "},
          {name: 'Usage: `\ withdraw \`', value: "> To withdraw yen from your bank"},
          {name: 'Usage: `\ give \`', value: "> To give yen to another user "},
          {name: 'Usage: `\ glb \`', value: "> To check global yen leaderboard "},
          {name: 'Usage: `\ lb \`', value: "> To check server only leaderboard"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
          new MessageButton()
              .setCustomId('main')
              .setLabel('Economy')
              .setStyle('PRIMARY'),
          new MessageButton()
              .setCustomId('cmd')
              .setLabel('Earnings')
              .setStyle('SECONDARY'),
          new MessageButton()
              .setCustomId('shop')
              .setLabel('Shop')
              .setStyle('SECONDARY'),
          new MessageButton()
              .setCustomId('balance')
              .setLabel('Balance')
              .setStyle('SECONDARY'),
          );

         await interaction.reply({ embeds: [embed], components: [row] })

        const filter = i => i.customId === 'main' && i.user.id === interaction.member.user.id;

          const collectorHelp = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'main') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed], components: [row] });
            }
          });

        const filter1 = i => i.customId === 'cmd' && i.user.id === interaction.user.username.id;

          const collectorAff = interaction.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorAff.on('collect', async i => {
            if (i.customId === 'cmd') {
              await i.deferUpdate()
              await i.editReply({ embeds: [earningsEmbed], components: [row] });
            }
          });

        const filter2 = i => i.customId === 'shop' && i.user.id === interaction.user.username.id;

          const collectorBot = interaction.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorBot.on('collect', async i => {
            if (i.customId === 'shop') {
              await i.deferUpdate()
              await i.editReply({ embeds: [shopEmbed], components: [row] });
            }
          });

        const filter3 = i => i.customId === 'balance' && i.user.id === interaction.user.username.id;

          const collectorEco = interaction.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorEco.on('collect', async i => {
            if (i.customId === 'balance') {
              await i.deferUpdate()
              await i.editReply({ embeds: [balanceEmbed], components: [row] });
            }
          });

          setTimeout(function () {
            row.components[0].setDisabled(true);
            row.components[1].setDisabled(true);
            row.components[2].setDisabled(true);
            row.components[3].setDisabled(true);

            interaction.editReply({ embeds: [embed], components: [row] })
            }, 50000);
	  }
};