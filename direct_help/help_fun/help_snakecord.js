module.exports = {
    name: 'help-snake',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for snakecord command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Snake Help`, user.displayAvatarURL())
        .setTitle('Snake command')
        .setURL('https://dsc.gg/elina')
        .setDescription('Snake command with usage')
        .addFields(
            {name: 'Aliases: ', value: ['snake']},
            {name: 'Usage: ', value: "=snake"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage("https://media.discordapp.net/attachments/864498140987260980/864500526560051220/unknown.png")
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}