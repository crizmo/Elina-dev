module.exports = {
    name: 'help-boop',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for boop command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Boop Help`, user.displayAvatarURL())
        .setTitle('Boop command')
        .setURL('https://dsc.gg/elina')
        .setDescription('Boop command with usage')
        .addFields(
            {name: 'Aliases: ', value: "boop"},
            {name: 'Usage: ', value: "=boop @mention | =boop"},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage('http://www.simpleimageresizer.com/_uploads/photos/5a9b1d8c/resized-image-Promo_2_75.jpeg')
        .setFooter('You can get info of different command using =help{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}