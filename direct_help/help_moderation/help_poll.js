module.exports = {
    name: 'help-poll',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for poll command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Poll Help`, user.displayAvatarURL())
        .setTitle('Poll command')
        .setURL('https://dsc.gg/elina')
        .setDescription('poll command with usage')
        .addFields(
            {name: 'Aliases: ', value: "poll"},
            {name: 'Usage: ', value: "=poll #channel.mention {Poll description}"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage("https://media.discordapp.net/attachments/809715777628405801/863749137421041664/unknown.png")
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}