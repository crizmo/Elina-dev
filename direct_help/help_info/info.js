module.exports = {
    name: 'help-info',
    permissions: ["SEND_MESSAGES"],
    description: "information",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Information commands')
        .setURL('https://dsc.gg/elina')
        .setDescription('Search and information commands')
        .addField('`=anime`', 'Search anime using api scraper', true)
        .addField('`=credits`', 'For the people who helped with the bot development', true)
        .addField('`=whois`', 'user info command', true)
        .addField('`=github`', 'Get a users github account info', true)
        .addField('`=covid`', 'To get covid stats per country | =covid japan', true)
        .addField('`=weather`', 'Checks weather forecast for provided location', true)
        .addField('`=math`', 'To solve basics maths', true)
        .addField('`=emojify`', 'To emojify a text', true)
        .addField('`=worldclock`', 'To get world clock', true)
        .setThumbnail("https://media.discordapp.net/attachments/782648013515784232/862195085537312798/1F514150-19EE-4C76-AF97-C92DD0A0E326.png")
        .setFooter('Enjoy, for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}