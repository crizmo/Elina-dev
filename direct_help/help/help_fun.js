const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
    name: "help-fun2",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Help command for all fun commands",

    execute(client, message, args, Discord){

        const user = message.mentions.users.first() || message.member.user
        let avatar = user.displayAvatarURL()
        
        const embed = new MessageEmbed()
        .setTitle("Fun commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const coinflipEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Coinflip help command `, user.displayAvatarURL())
        .setTitle('Coinflip command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ coinflip \`"},
            {name: 'Usage: ', value: "`\ =coinflip \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const c4Embed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Connect four help command `, user.displayAvatarURL())
        .setTitle('Connect four command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ c4 \`"},
            {name: 'Usage: ', value: "`\ =c4 @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const diceEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Roll help command `, user.displayAvatarURL())
        .setTitle('Roll {dice} command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ roll \`"},
            {name: 'Usage: ', value: "`\ =roll \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const ejectEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Eject help command `, user.displayAvatarURL())
        .setTitle('Among us Eject command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ eject \`"},
            {name: 'Usage: ', value: "`\ =eject \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const pokemonEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Guess the pokemon help command `, user.displayAvatarURL())
        .setTitle('Guess the pokemon command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ gtp \` || `\ pokemon \`"},
            {name: 'Usage: ', value: "`\ =gtp \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const rpsEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Rock papaer scissors help command `, user.displayAvatarURL())
        .setTitle('Rock papaer scissors command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ rps \`"},
            {name: 'Usage: ', value: "`\ =rps @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const snakeEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Snake help command `, user.displayAvatarURL())
        .setTitle('Snake command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ snake \`"},
            {name: 'Usage: ', value: "`\ =snake \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const triviaEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Trivia help command `, user.displayAvatarURL())
        .setTitle('Trivia command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ trivia \`"},
            {name: 'Usage: ', value: "`\ =trivia \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const tttEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Tic-tac-toe help command `, user.displayAvatarURL())
        .setTitle('Tic-tac-toe command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ ttt \`"},
            {name: 'Usage: ', value: "`\ =ttt @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const wyrEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Would you rather help command `, user.displayAvatarURL())
        .setTitle('Would you rather command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ wyr \`"},
            {name: 'Usage: ', value: "`\ =wyr \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const ballEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`8ball help command `, user.displayAvatarURL())
        .setTitle('8ball command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ 8ball \`"},
            {name: 'Usage: ', value: "`\ =8ball \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const slotsEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Slots help command `, user.displayAvatarURL())
        .setTitle('Slots command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ slt \` || `\ nor-slots \`"},
            {name: 'Usage: ', value: "`\ =slt \` || `\ =nor-slots \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const whoaskedEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Whoasked help command `, user.displayAvatarURL())
        .setTitle('whoasked command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ whoasked \`"},
            {name: 'Usage: ', value: "`\ =whoasked \` || `\ =whoasked @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('fun')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('coinflip')
                .setLabel('Coinflip')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('c4')
                .setLabel('Connect-Four')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('roll')
                .setLabel('Dice')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('eject')
                .setLabel('Eject')
                .setStyle('SECONDARY'),
            );
        
        const row2 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('gtp')
                .setLabel('Pokemon')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('rps')
                .setLabel('Rps')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('snake')
                .setLabel('Snake')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('trivia')
                .setLabel('Trivia')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('ttt')
                .setLabel('Tic-tac-toe')
                .setStyle('SECONDARY'),
              );

        const row3 = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('wyr')
                .setLabel('Would-you-rather')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('ball')
                .setLabel('8-ball')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('slots')
                .setLabel('Slots-co')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('whoasked')
                .setLabel('Who-asked')
                .setStyle('SECONDARY'),
              );

        message.channel.send({embeds: [embed], components: [row , row2 , row3]})

        const filter = i => i.customId === 'fun' && i.user.id === message.member.user.id;

          const collectorHelp = message.channel.createMessageComponentCollector({ filter, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'fun') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed], components: [row, row2 , row3] });
            }
          });

        const filter1 = i => i.customId === 'coinflip' && i.user.id === message.member.user.id;

          const collectorCoin = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorCoin.on('collect', async i => {
            if (i.customId === 'coinflip') {
              await i.deferUpdate()
              await i.editReply({ embeds: [coinflipEmbed], components: [row, row2 , row3] });
            }
          });

        const filter2 = i => i.customId === 'c4' && i.user.id === message.member.user.id;

          const collectorC4 = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorC4.on('collect', async i => {
            if (i.customId === 'c4') {
              await i.deferUpdate()
              await i.editReply({ embeds: [c4Embed], components: [row, row2 , row3] });
            }
          });

        const filter3 = i => i.customId === 'roll' && i.user.id === message.member.user.id;

          const collectorDice = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorDice.on('collect', async i => {
            if (i.customId === 'roll') {
              await i.deferUpdate()
              await i.editReply({ embeds: [diceEmbed], components: [row, row2 , row3] });
            }
          });

        const filter4 = i => i.customId === 'eject' && i.user.id === message.member.user.id;

          const collectorEject = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
          
          collectorEject.on('collect', async i => {
            if (i.customId === 'eject') {
              await i.deferUpdate()
              await i.editReply({ embeds: [ejectEmbed], components: [row, row2 , row3] });
            }
          });

        const filter5 = i => i.customId === 'gtp' && i.user.id === message.member.user.id;

          const collectorPokemon = message.channel.createMessageComponentCollector({ filter5, time: 50000 });
          
          collectorPokemon.on('collect', async i => {
            if (i.customId === 'gtp') {
              await i.deferUpdate()
              await i.editReply({ embeds: [pokemonEmbed], components: [row, row2 , row3] });
            }
          });

        const filter6 = i => i.customId === 'rps' && i.user.id === message.member.user.id;

          const collectorRps = message.channel.createMessageComponentCollector({ filter6, time: 50000 });
          
          collectorRps.on('collect', async i => {
            if (i.customId === 'rps') {
              await i.deferUpdate()
              await i.editReply({ embeds: [rpsEmbed], components: [row, row2 , row3] });
            }
          });

        const filter7 = i => i.customId === 'snake' && i.user.id === message.member.user.id;

          const collectorSnake = message.channel.createMessageComponentCollector({ filter7, time: 50000 });
          
          collectorSnake.on('collect', async i => {
            if (i.customId === 'snake') {
              await i.deferUpdate()
              await i.editReply({ embeds: [snakeEmbed], components: [row, row2 , row3] });
            }
          });

        const filter8 = i => i.customId === 'trivia' && i.user.id === message.member.user.id;

          const collectorTrivia = message.channel.createMessageComponentCollector({ filter8, time: 50000 });
          
          collectorTrivia.on('collect', async i => {
            if (i.customId === 'trivia') {
              await i.deferUpdate()
              await i.editReply({ embeds: [triviaEmbed], components: [row, row2 , row3] });
            }
          });

        const filter9 = i => i.customId === 'ttt' && i.user.id === message.member.user.id;

          const collectorTtt = message.channel.createMessageComponentCollector({ filter9, time: 50000 });
          
          collectorTtt.on('collect', async i => {
            if (i.customId === 'ttt') {
              await i.deferUpdate()
              await i.editReply({ embeds: [tttEmbed], components: [row, row2 , row3] });
            }
          });

        const filter10 = i => i.customId === 'wyr' && i.user.id === message.member.user.id;

          const collectorWyr = message.channel.createMessageComponentCollector({ filter10, time: 50000 });
          
          collectorWyr.on('collect', async i => {
            if (i.customId === 'wyr') {
              await i.deferUpdate()
              await i.editReply({ embeds: [wyrEmbed], components: [row, row2 , row3] });
            }
          });

        const filter11 = i => i.customId === 'ball' && i.user.id === message.member.user.id;

          const collectorBall = message.channel.createMessageComponentCollector({ filter11, time: 50000 });
          
          collectorBall.on('collect', async i => {
            if (i.customId === 'ball') {
              await i.deferUpdate()
              await i.editReply({ embeds: [ballEmbed], components: [row, row2 , row3] });
            }
          });

        const filter12 = i => i.customId === 'slots' && i.user.id === message.member.user.id;

          const collectorSlots = message.channel.createMessageComponentCollector({ filter12, time: 50000 });
          
          collectorSlots.on('collect', async i => {
            if (i.customId === 'slots') {
              await i.deferUpdate()
              await i.editReply({ embeds: [slotsEmbed], components: [row, row2 , row3] });
            }
          });

        const filter13 = i => i.customId === 'whoasked' && i.user.id === message.member.user.id;

          const collectorWhoasked = message.channel.createMessageComponentCollector({ filter13, time: 50000 });
          
          collectorWhoasked.on('collect', async i => {
            if (i.customId === 'whoasked') {
              await i.deferUpdate()
              await i.editReply({ embeds: [whoaskedEmbed], components: [row, row2 , row3] });
            }
          });
}
}