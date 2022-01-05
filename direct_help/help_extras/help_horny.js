module.exports = {
    name: 'help-horny',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for horny command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Horny Help`, user.displayAvatarURL())
        .setTitle('Horny command')
        .setURL('https://dsc.gg/elina')
        .setDescription('Horny meter for people')
        .addFields(
            {name: 'Aliases: ', value: "horny"},
            {name: 'Usage: ', value: "=horny"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage('https://media.discordapp.net/attachments/809715777628405801/863787713650884628/unknown.png')
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}