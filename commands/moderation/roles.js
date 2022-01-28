const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "roles",
    permissions: ["ADMINISTRATOR"],
    description: "Displays someone's roles!",
    execute(client, message, args, Discord, cmd) {
        const user = message.mentions.members.first() || message.member || message.guild.members.cache.find(u => u.id === args[0])
        if(!user) return message.reply("Please give a valid user!")
        
        const userRoles = user.roles.cache
        .filter((role) => role.id !== message.guild.id)
        .map((roles) => roles.toString())
        .join(", ")

        if(!userRoles) return message.reply("This user has no roles!")

        let embed = new MessageEmbed()
        .addField("Roles", userRoles)
        .setFooter(user.user.tag, user.user.displayAvatarURL({ dynamic: true}))
        message.channel.send({embeds: [embed]})
    }
}