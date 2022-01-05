module.exports = {
    name: 'help-kiss',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for kiss command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Kiss Help`, user.displayAvatarURL())
        .setTitle('Kiss command')
        .setURL('https://dsc.gg/elina')
        .setDescription('kiss command with usage')
        .addFields(
            {name: 'Aliases: ', value: "kiss"},
            {name: 'Usage: ', value: "=kiss @mention | =kiss"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage('https://media.discordapp.net/attachments/809634098880446479/863468719644082186/unknown.png')
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}