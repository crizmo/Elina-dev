module.exports = {
    name: "avatar",
    aliases: ["av"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Brodcast someone's avatar",

    execute(client, message, args, Discord) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic: true, size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send({embeds: [embed]});
    }
}