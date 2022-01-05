const profileModel = require("../../models/profileSchema");
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: ["SEND_MESSAGES"],
    description: "Check the user balance",

    execute (client, message, args, Discord, profileData) {
      const { guild, channel } = message

      const user = message.mentions.users.first() || message.member.user
      const member = guild.members.cache.get(user.id)

      let person = message.author
      let avatar = person.displayAvatarURL({dynamic: true, size: 1024})

      let embed = new MessageEmbed()
      .setTitle(`${message.author.username}'s Balance`, user.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(`Your wallet bal is **${profileData.coins}** ¥\nYour bank bal is **${profileData.bank}** ¥`)
      .setThumbnail(avatar)
      channel.send({embeds: [embed]})
    }
  };