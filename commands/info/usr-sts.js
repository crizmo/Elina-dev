const Discord = require("discord.js");

module.exports = {
  name: "activity",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "user activity",
    async execute(client, message, args, Discord, cmd){

        const user = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(user.id);
        // console.log(member);
        // console.log(member.presence.activities[0]);

        const activity = member.presence.activities[0]
        console.log(activity);

        const info = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("User Presence")
        .setTitle(`${message.member.displayName}'s presence`)
        .setDescription(`**Activity:**\n> ${activity.name}`)
        .setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        .addField("**Type:**", `${activity.type}`, true)
        .addField("**Details:**", `${activity.details}`, true)
        .addField("**State:**", `${activity.state}`, true)
        .setTimestamp(new Date)
        .setFooter(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 64 }));
        message.channel.send({embeds: [info]});
        
      }
}