const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
  name: "help-info",
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Help command for all information commands",

  async execute(client, message, args, Discord) {

    const user = message.mentions.users.first() || message.member.user
    let avatar = user.displayAvatarURL()

    const embed = new MessageEmbed()
      .setTitle("Info commands & usage !")
      .setURL('https://elina-bot.netlify.app')
      .setDescription("To get info of commands `\ click \` on the respective buttons")
      .setAuthor(`${user.username}`, avatar)
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
      .setThumbnail(avatar)
      .setColor(color);

    const animeEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Anime help command `, user.displayAvatarURL())
      .setTitle('Anime command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ anime \`" },
        { name: 'Usage: ', value: "`\ =anime {anime_name} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const covidEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Covid help command `, user.displayAvatarURL())
      .setTitle('Covid command & usage')
      .setDescription("Doing `\ =covid all \` will display global covid stats")
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ covid \`" },
        { name: 'Usage: ', value: "`\ =covid \` || `\ =covid {country_name)} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const githubEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Github help command `, user.displayAvatarURL())
      .setTitle('Github command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ github \` || `\ git \`" },
        { name: 'Usage: ', value: "`\ =github {username} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const mathEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Maths help command `, user.displayAvatarURL())
      .setTitle('Maths command & usage')
      .setDescription("You need to enter the operation and operands next to the command as follow: add | sub | mult | divide | mod | pow | root")
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ math \` || `\ maths \`" },
        { name: 'Usage: ', value: "`\ =math \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const pollEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Poll help command `, user.displayAvatarURL())
      .setTitle('Poll command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ poll \`" },
        { name: 'Usage: ', value: "`\ =poll #{channel_name} {content} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const weatherEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Weather help command `, user.displayAvatarURL())
      .setTitle('Weather command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ weather \`" },
        { name: 'Usage: ', value: "`\ =weather {country_name} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const worldclockEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`World clock help command `, user.displayAvatarURL())
      .setTitle('World clock command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ clock || wc || worldclock \`" },
        { name: 'Usage: ', value: "`\ =wc \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const docsEmbed = new Discord.MessageEmbed()
      .setColor(`discord.js docs help command `, user.displayAvatarURL())
      .setTitle('Discord.js docs command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ djs || docs \`" },
        { name: 'Usage: ', value: "`\ =djs {stuff} \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const whoisEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Whois help command `, user.displayAvatarURL())
      .setTitle('Whois command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ whois \`" },
        { name: 'Usage: ', value: "`\ =whois @mention \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('info')
        .setLabel('Help')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('anime')
        .setLabel('Anime')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('covid')
        .setLabel('Covid')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('github')
        .setLabel('Github')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('math')
        .setLabel('Maths')
        .setStyle('SECONDARY'),
    );

    const row2 = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('poll')
        .setLabel('Poll')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('weather')
        .setLabel('Weather')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('wc')
        .setLabel('Worldclock')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('docs')
        .setLabel('Docs')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('whois')
        .setLabel('Whois')
        .setStyle('SECONDARY'),
    );

    const sentMessage = await message.channel.send({ embeds: [embed], components: [row, row2] })

    const filter1 = i => i.customId === 'info' && i.user.id === message.member.user.id;

    const collectorHelp = message.channel.createMessageComponentCollector({ filter1, time: 50000 });

    collectorHelp.on('collect', async i => {
      if (i.customId === 'info') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [embed], components: [row, row2] });
      }
    });

    const filter2 = i => i.customId === 'anime' && i.user.id === message.member.user.id;

    const collectorAnime = message.channel.createMessageComponentCollector({ filter2, time: 50000 });

    collectorAnime.on('collect', async i => {
      if (i.customId === 'anime') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [animeEmbed], components: [row, row2] });
      }
    });

    const filter3 = i => i.customId === 'covid' && i.user.id === message.member.user.id;

    const collectorCovid = message.channel.createMessageComponentCollector({ filter3, time: 50000 });

    collectorCovid.on('collect', async i => {
      if (i.customId === 'covid') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [covidEmbed], components: [row, row2] });
      }
    });

    const filter4 = i => i.customId === 'github' && i.user.id === message.member.user.id;

    const collectorGithub = message.channel.createMessageComponentCollector({ filter4, time: 50000 });

    collectorGithub.on('collect', async i => {
      if (i.customId === 'github') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [githubEmbed], components: [row, row2] });
      }
    });

    const filter5 = i => i.customId === 'math' && i.user.id === message.member.user.id;

    const collectorMaths = message.channel.createMessageComponentCollector({ filter5, time: 50000 });

    collectorMaths.on('collect', async i => {
      if (i.customId === 'math') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [mathEmbed], components: [row, row2] });
      }
    });

    const filter6 = i => i.customId === 'poll' && i.user.id === message.member.user.id;

    const collectorPoll = message.channel.createMessageComponentCollector({ filter6, time: 50000 });

    collectorPoll.on('collect', async i => {
      if (i.customId === 'poll') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [pollEmbed], components: [row, row2] });
      }
    });

    const filter7 = i => i.customId === 'weather' && i.user.id === message.member.user.id;

    const collectorWeather = message.channel.createMessageComponentCollector({ filter7, time: 50000 });

    collectorWeather.on('collect', async i => {
      if (i.customId === 'weather') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [weatherEmbed], components: [row, row2] });
      }
    });

    const filter8 = i => i.customId === 'wc' && i.user.id === message.member.user.id;

    const collectorWc = message.channel.createMessageComponentCollector({ filter8, time: 50000 });

    collectorWc.on('collect', async i => {
      if (i.customId === 'wc') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [worldclockEmbed], components: [row, row2] });
      }
    });

    const filter9 = i => i.customId === 'docs' && i.user.id === message.member.user.id;

    const collectorDocs = message.channel.createMessageComponentCollector({ filter9, time: 50000 });

    collectorDocs.on('collect', async i => {
      if (i.customId === 'docs') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [docsEmbed], components: [row, row2] });
      }
    });

    const filter10 = i => i.customId === 'whois' && i.user.id === message.member.user.id;

    const collectorWhois = message.channel.createMessageComponentCollector({ filter10, time: 50000 });

    collectorWhois.on('collect', async i => {
      if (i.customId === 'whois') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [whoisEmbed], components: [row, row2] });
      }
    });
  }
}