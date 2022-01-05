module.exports = {
    name: 'help-github',
    permissions: ["SEND_MESSAGES"],
    description: "Help function for github command with usage",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Github Help`, user.displaygithubURL())
        .setTitle('Github command')
        .setURL('https://dsc.gg/elina')
        .setDescription('github a comment using image scraper')
        .addFields(
            {name: 'Aliases: ', value: "github"},
            {name: 'Usage: ', value: "=github {user name on github} "},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/githubs/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage('https://media.discordapp.net/attachments/911920339884331028/912025305902895145/unknown.png?width=497&height=489')
        .setFooter('You can get info of different command using =help-{command name}');

        message.channel.send({embeds: [newEmbed]});
    }
}