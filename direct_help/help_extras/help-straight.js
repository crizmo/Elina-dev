module.exports = {
    name: 'help-straight',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for straight command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`straight Help`, user.displayAvatarURL())
        .setTitle('straight command')
        .setURL('https://dsc.gg/elina')
        .setDescription('straight meter for people')
        .addFields(
            {name: 'Aliases: ', value: "straight , howstraight"},
            {name: 'Usage: ', value: "=straight"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage('https://media.discordapp.net/attachments/911920339884331028/912023394403364894/unknown.png?width=287&height=186')
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}