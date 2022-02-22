const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
const prefix = require("../../direct_help/json/config.json").prefix;
const emo = require("../../direct_help/json/emoji.json");
let color = "#00ccff";

module.exports = {
  name: "help",
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "The help command, what do you expect?",

  async execute(client, message, args, Discord) {

    if (!args[0]) {
      let categories = [];

      //categories to ignore
      let ignored = [
        "dev",
        "configuration",
        "utils",
        "reportadd",
      ];

      readdirSync("./commands/").forEach((dir) => {
        if (ignored.includes(dir.toLowerCase())) return;
        const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()}`;
        let cats = new Object();

        cats = {
          name: name,
          value: `\`${prefix}help-${dir.toLowerCase()}\``,
          inline: true,
        };

        categories.push(cats);
        //cots.push(dir.toLowerCase());
      });

      const user = message.mentions.users.first() || message.member.user
      let avatar = user.displayAvatarURL()

      const affection = new MessageEmbed()
        .setTitle("Affection commands!")
        .setDescription("To get info of commands `\ =help-affection \`")
        .setAuthor(`${user.username}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ boop \` , `\ dance \` , `\ horny \` , `\ howgay \` , `\ hug \` \n `\ kill \` , `\ kiss \` , `\ match \` , `\ pet \` , `\ simp \` , `\ slap \` \n `\ spank \` , `\ spit \` , `\ yaoi \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759391/android/sticker.png")
        .setColor(color);

      const bot = new MessageEmbed()
        .setTitle("Bot commands commands!")
        .setDescription("To get info of commands `\ =help-bot \`")
        .setAuthor(`${user.username}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ invite \` , `\ ping \` , `\ stats \` , `\ suggest \` , `\ bug \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759375/android/sticker.png")
        .setColor(color);

      const economy = new MessageEmbed()
        .setTitle("Economy commands!")
        .setDescription("Elina economy commands \n To get more information about elina's economy commands do `\ =help-eco \` then click the respective buttons to get per command information")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/98093817/android/sticker.png")
        .setColor(color);

      const fun = new MessageEmbed()
        .setTitle("Fun commands!")
        .setDescription("To get info of commands `\ =help-fun \`")
        .setAuthor(`${user.username}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ 8ball \` , `\ coinflip \` , `\ connectfour \` , `\ eject \` \n `\ pokemon \` , `\ rps \` , `\ slots \` , `\ snake \` , `\ trivia \` \n `\ tic-tac-toe \` , `\ aki \` , `\ wyr \` , `\ qr \` , `\ topic \`\n `\ waifu \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759403/android/sticker.png")
        .setColor(color);

      const info = new MessageEmbed()
        .setTitle("Info command!")
        .setDescription("To get info of commands `\ =help-info \`")
        .setAuthor(`${message.author.tag}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ anime \` , `\ djs || docs \` , `\ chatbot \` , `\ covid \` \n `\ credits \` , `\ github \`, `\ math \`, `\ poll \` , `\ weather \` \n `\ whois \` , `\ worldclock \` , `\ calculator \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759396/android/sticker.png")
        .setColor(color);

      const moderation = new MessageEmbed()
        .setTitle("Moderation command!")
        .setDescription("To get info of commands `\ =help-mod \`")
        .setAuthor(`${message.author.tag}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ ban \` , `\ clear \` , `\ kick \` , `\ roles \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759406/android/sticker.png")
        .setColor(color);

      const profile = new MessageEmbed()
        .setTitle("Profile command!")
        .setDescription("To get info of commands `\ =help-profile \`")
        .setAuthor(`${message.author.tag}`, avatar)
        .addFields(
          { name: `\u200B`, value: "`\ avatar \` , `\ deepfry \` , `\ tweet \`", inline: true },
        )
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail("https://stickershop.line-scdn.net/stickershop/v1/sticker/432759410/android/sticker.png")
        .setColor(color);

      const genEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact - Commands`)
        .setDescription("Genshin impact commands")
        .addFields(
          { name: `Artifacts`, value: "`\ =gen-arti {artifact_name} \` || `\ =genshin-artifact \`" },
          { name: `Characters`, value: "`\ =gen-char {character_name} \` || `\ =genshin-character \`" },
          { name: `Elements`, value: "`\ =gen-el {element_name} \` || `\ =genshin-elements \`" },
          { name: `Nations`, value: "`\ =gen-nat {nation_name} \` || `\ =genshin-nations \`" },
          { name: `Weapons`, value: "`\ =gen-wp {weapon_name} \` || `\ =genshin-weapons \`" },
        )
        .setThumbnail(client.user.displayAvatarURL({
          dynamic: true,
        }))
        .setFooter("For more info do =genshin || =help-genshin")

      const embed = new Discord.MessageEmbed()
        .setTitle("Our full help menu!")
        .setDescription(
          `\`\`\`js\nPrefix: ${prefix}\nExtra information: <> If you see any error or any kind of bug please report to us!\`\`\`\n> To invite me : [Invite me](https://discord.com/api/oauth2/authorize?client_id=842397001954230303&permissions=1515552374487&scope=bot%20applications.commands)\n\n> To check out a category, use \`${prefix}help-[category-name]\``
        )
        .addFields(categories)
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setThumbnail(
          client.user.displayAvatarURL({
            dynamic: true,
          })
        )
        .setColor(color);

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

      const sentMessage = await message.channel.send({ embeds: [embed], components: [row, row2] })

      const filter = i => i.customId === 'base' && i.user.id === message.member.user.id;

      const collectorHelp = message.channel.createMessageComponentCollector({ filter, time: 50000 });

      collectorHelp.on('collect', async i => {
        if (i.customId === 'base') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [embed], components: [row, row2] });
        }
      });

      const filter1 = i => i.customId === 'affection' && i.user.id === message.member.user.id;

      const collectorAff = message.channel.createMessageComponentCollector({ filter1, time: 50000 });

      collectorAff.on('collect', async i => {
        if (i.customId === 'affection') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [affection], components: [row, row2] });
        }
      });

      const filter2 = i => i.customId === 'bot' && i.user.id === message.member.user.id;

      const collectorBot = message.channel.createMessageComponentCollector({ filter2, time: 50000 });

      collectorBot.on('collect', async i => {
        if (i.customId === 'bot') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [bot], components: [row, row2] });
        }
      });

      const filter3 = i => i.customId === 'economy' && i.user.id === message.member.user.id;

      const collectorEco = message.channel.createMessageComponentCollector({ filter3, time: 50000 });

      collectorEco.on('collect', async i => {
        if (i.customId === 'economy') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [economy], components: [row, row2] });
        }
      });

      const filter4 = i => i.customId === 'fun' && i.user.id === message.member.user.id;

      const collectorFun = message.channel.createMessageComponentCollector({ filter4, time: 50000 });

      collectorFun.on('collect', async i => {
        if (i.customId === 'fun') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [fun], components: [row, row2] });
        }
      });

      const filter5 = i => i.customId === 'info' && i.user.id === message.member.user.id;

      const collectorInfo = message.channel.createMessageComponentCollector({ filter5, time: 50000 });

      collectorInfo.on('collect', async i => {
        if (i.customId === 'info') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [info], components: [row, row2] });
        }
      });

      const filter6 = i => i.customId === 'moderation' && i.user.id === message.member.user.id;

      const collectorMod = message.channel.createMessageComponentCollector({ filter6, time: 50000 });

      collectorMod.on('collect', async i => {
        if (i.customId === 'moderation') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [moderation], components: [row, row2] });
        }
      });

      const filter7 = i => i.customId === 'profile' && i.user.id === message.member.user.id;

      const collectorPro = message.channel.createMessageComponentCollector({ filter7, time: 50000 });

      collectorPro.on('collect', async i => {
        if (i.customId === 'profile') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [profile], components: [row, row2] });
        }
      });

      const filter8 = i => i.customId === 'genshin' && i.user.id === message.member.user.id;

      const collectorGen = message.channel.createMessageComponentCollector({ filter8, time: 50000 });

      collectorGen.on('collect', async i => {
        if (i.customId === 'genshin') {
          await i.deferUpdate();
          await sentMessage.edit({ embeds: [genEmbed], components: [row, row2] });
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
        sentMessage.edit({ embeds: [embed], components: [row, row2] })
      }, 40000);

    }
  }
}