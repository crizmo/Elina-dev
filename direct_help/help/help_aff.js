const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
  name: "help-affection",
  aliases: ["help-aff"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Help command for all affection commands",

  async execute(client, message, args, Discord) {

    const user = message.mentions.users.first() || message.member.user
    let avatar = user.displayAvatarURL()

    const embed = new MessageEmbed()
      .setTitle("Affection commands & usage !")
      .setURL('https://elina-bot.netlify.app')
      .setDescription("To get info of commands `\ click \` on the respective buttons")
      .setAuthor(`${user.username}`, avatar)
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
      .setThumbnail(avatar)
      .setColor(color);

    const boopEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Boop help command `, user.displayAvatarURL())
      .setTitle('Boop command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ boop \`" },
        { name: 'Usage: ', value: "`\ =boop \` || `\ =boop @mention \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const danceEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Dance help command `, user.displayAvatarURL())
      .setTitle('Dance command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ dance \`" },
        { name: 'Usage: ', value: "`\ =dance @mention \` | `\ =dance \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const hugEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Hug help command`, user.displayAvatarURL())
      .setTitle('Hug command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ hug \`" },
        { name: 'Usage: ', value: "`\ =hug @mention \` || `\ =hug \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const killEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Kill help command `, user.displayAvatarURL())
      .setTitle('Kill command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ kill \`" },
        { name: 'Usage: ', value: "`\ =kill @mention \` || `\ =kill \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const kissEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Kiss help command `, user.displayAvatarURL())
      .setTitle('Kiss command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ kiss \`" },
        { name: 'Usage: ', value: "`\ =kiss @mention \` || `\ =kiss \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const matchEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Match help command `, user.displayAvatarURL())
      .setTitle('Match command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ match \`" },
        { name: 'Usage: ', value: "`\ =match @mention \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const petEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Pet help command `, user.displayAvatarURL())
      .setTitle('Pet command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ pet \`" },
        { name: 'Usage: ', value: "`\ =pet @mention \` || `\ =pet \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const simpEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Simp meter command `, user.displayAvatarURL())
      .setTitle('Simp command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ simp \`" },
        { name: 'Usage: ', value: "`\ =simp @mention \` || `\ simp \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const slapEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Slap command `, user.displayAvatarURL())
      .setTitle('Slap command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ slap \`" },
        { name: 'Usage: ', value: "`\ =slap @mention \` || `\ slap \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const spankEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Spank command `, user.displayAvatarURL())
      .setTitle('Spank command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ spank \`" },
        { name: 'Usage: ', value: "`\ =spank @mention \` || `\ =spank \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const spitEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Spit command `, user.displayAvatarURL())
      .setTitle('Spit command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ spit \`" },
        { name: 'Usage: ', value: "`\ =spit @mention \` || `\ =spit \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const hornyEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Horny command `, user.displayAvatarURL())
      .setTitle('Horny command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ horny \`" },
        { name: 'Usage: ', value: "`\ =horny @mention \` || `\ =horny \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const howgayEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Howgay command `, user.displayAvatarURL())
      .setTitle('Howgay command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ howgay \`" },
        { name: 'Usage: ', value: "`\ =howgay @mention \` || `\ =howgay \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const yaoiEmbed = new Discord.MessageEmbed()
      .setColor('#FFDBE9')
      .setAuthor(`Yaoi command `, user.displayAvatarURL())
      .setTitle('Yaoi command & usage')
      .setURL('https://elina-bot.netlify.app')
      .addFields(
        { name: 'Aliases: ', value: "`\ yaoi \`" },
        { name: 'Usage: ', value: "`\ =yaoi @mention \` || `\ =yaoi \`" },
      )
      .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('affection')
        .setLabel('Help')
        .setStyle('PRIMARY'),
      new MessageButton()
        .setCustomId('boop')
        .setLabel('Boop')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('dance')
        .setLabel('Dance')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('hug')
        .setLabel('Hug')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('kill')
        .setLabel('Kill')
        .setStyle('SECONDARY'),
    );

    const row2 = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('kiss')
        .setLabel('Kiss')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('match')
        .setLabel('Match')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('pet')
        .setLabel('Pet')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('simp')
        .setLabel('Simp')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('slap')
        .setLabel('Slap')
        .setStyle('SECONDARY')
    );

    const row3 = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('spank')
        .setLabel('Spank')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('spit')
        .setLabel('Spit')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('horny')
        .setLabel('Horny')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('howgay')
        .setLabel('Howgay')
        .setStyle('SECONDARY'),
      new MessageButton()
        .setCustomId('yaoi')
        .setLabel('Yaoi')
        .setStyle('SECONDARY')
    );

    const sentMessage = await message.channel.send({ embeds: [embed], components: [row, row2, row3] })

    const filter = i => i.customId === 'affection' && i.user.id === message.member.user.id;

    const collectorHelp = message.channel.createMessageComponentCollector({ filter, time: 50000 });

    collectorHelp.on('collect', async i => {
      if (i.customId === 'affection') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [embed], components: [row, row2, row3] });
      }
    });

    const filter1 = i => i.customId === 'boop' && i.user.id === message.member.user.id;

    const collectorBoop = message.channel.createMessageComponentCollector({ filter1, time: 50000 });

    collectorBoop.on('collect', async i => {
      if (i.customId === 'boop') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [boopEmbed], components: [row, row2, row3] });
      }
    });

    const filter2 = i => i.customId === 'dance' && i.user.id === message.member.user.id;

    const collectorDance = message.channel.createMessageComponentCollector({ filter2, time: 50000 });

    collectorDance.on('collect', async i => {
      if (i.customId === 'dance') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [danceEmbed], components: [row, row2, row3] });
      }
    });

    const filter3 = i => i.customId === 'hug' && i.user.id === message.member.user.id;

    const collectorHug = message.channel.createMessageComponentCollector({ filter3, time: 50000 });

    collectorHug.on('collect', async i => {
      if (i.customId === 'hug') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [hugEmbed], components: [row, row2, row3] });
      }
    });
    const filter4 = i => i.customId === 'kill' && i.user.id === message.member.user.id;

    const collectorKill = message.channel.createMessageComponentCollector({ filter4, time: 50000 });

    collectorKill.on('collect', async i => {
      if (i.customId === 'kill') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [killEmbed], components: [row, row2, row3] });
      }
    });
    const filter5 = i => i.customId === 'kiss' && i.user.id === message.member.user.id;

    const collectorKiss = message.channel.createMessageComponentCollector({ filter5, time: 50000 });

    collectorKiss.on('collect', async i => {
      if (i.customId === 'kiss') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [kissEmbed], components: [row, row2, row3] });
      }
    });

    const filter6 = i => i.customId === 'match' && i.user.id === message.member.user.id;

    const collectorMatch = message.channel.createMessageComponentCollector({ filter6, time: 50000 });

    collectorMatch.on('collect', async i => {
      if (i.customId === 'match') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [matchEmbed], components: [row, row2, row3] });
      }
    });

    const filter7 = i => i.customId === 'pet' && i.user.id === message.member.user.id;

    const collectorPet = message.channel.createMessageComponentCollector({ filter7, time: 50000 });

    collectorPet.on('collect', async i => {
      if (i.customId === 'pet') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [petEmbed], components: [row, row2, row3] });
      }
    });

    const filter8 = i => i.customId === 'simp' && i.user.id === message.member.user.id;

    const collectorSimp = message.channel.createMessageComponentCollector({ filter8, time: 50000 });

    collectorSimp.on('collect', async i => {
      if (i.customId === 'simp') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [simpEmbed], components: [row, row2, row3] });
      }
    });

    const filter9 = i => i.customId === 'slap' && i.user.id === message.member.user.id;

    const collectorSlap = message.channel.createMessageComponentCollector({ filter9, time: 50000 });

    collectorSlap.on('collect', async i => {
      if (i.customId === 'slap') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [slapEmbed], components: [row, row2, row3] });
      }
    });

    const filter10 = i => i.customId === 'spank' && i.user.id === message.member.user.id;

    const collectorSpank = message.channel.createMessageComponentCollector({ filter10, time: 50000 });

    collectorSpank.on('collect', async i => {
      if (i.customId === 'spank') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [spankEmbed], components: [row, row2, row3] });
      }
    });

    const filter11 = i => i.customId === 'spit' && i.user.id === message.member.user.id;

    const collectorSpit = message.channel.createMessageComponentCollector({ filter11, time: 50000 });

    collectorSpit.on('collect', async i => {
      if (i.customId === 'spit') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [spitEmbed], components: [row, row2, row3] });
      }
    });

    const filter12 = i => i.customId === 'horny' && i.user.id === message.member.user.id;

    const collectorHorny = message.channel.createMessageComponentCollector({ filter12, time: 50000 });

    collectorHorny.on('collect', async i => {
      if (i.customId === 'horny') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [hornyEmbed], components: [row, row2, row3] });
      }
    });

    const filter13 = i => i.customId === 'howgay' && i.user.id === message.member.user.id;

    const collectorHowgay = message.channel.createMessageComponentCollector({ filter13, time: 50000 });

    collectorHowgay.on('collect', async i => {
      if (i.customId === 'howgay') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [howgayEmbed], components: [row, row2, row3] });
      }
    });

    const filter14 = i => i.customId === 'yaoi' && i.user.id === message.member.user.id;

    const collectorYaoi = message.channel.createMessageComponentCollector({ filter14, time: 50000 });

    collectorYaoi.on('collect', async i => {
      if (i.customId === 'yaoi') {
        await i.deferUpdate()
        await sentMessage.edit({ embeds: [yaoiEmbed], components: [row, row2, row3] });
      }
    });
  }
}