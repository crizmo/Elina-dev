const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "whois",
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: "user info command",

    execute (client, message, args, Discord) {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        let person = message.mentions.users.first() || message.author
        let avatar = person.displayAvatarURL({dynamic: true, size: 1024})

        const userEmbed = new MessageEmbed()
        .setTitle(`${user.username}'s Information:`)
        .setDescription("User info command to get information of a user.")
        .setAuthor(`${user.username}`, avatar )
        .setThumbnail(avatar)
        .addFields(
            {name: `Username:`, value: `${user.username}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Tag:`, value: `#${user.discriminator}`, inline: true},
            {name: `Created at:`, value: `${user.createdAt.toLocaleString()}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Joined at:`, value: `${member.joinedAt.toLocaleString()}`, inline: true},
            {name: `Booster:`, value: `${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Bot:`, value: `${user.bot}`, inline: true}
        )
        .setTimestamp()
        .setColor("BLACK")
        .setFooter(client.user.tag , client.user.displayAvatarURL());

        message.channel.send({ embeds: [userEmbed]})
    }
}