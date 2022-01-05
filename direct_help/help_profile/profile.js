module.exports = {
    name: 'help-profile',
    permissions: ["SEND_MESSAGES"],
    description: "idk",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#00FFFF')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Profile edit commands')
        .setURL('https://dsc.gg/elina')
        .setDescription('Image emved commands')
        .addField('`=image`', 'Search a image using image scraper', true)
        .addField('`=tweet`', 'tweet command', true)
        .addField('`=deepfry`', 'deepfry command', true)
        .addField('`=avatar`', 'To get users avatar', true)
        .setThumbnail("https://media.discordapp.net/attachments/782648013515784232/862543535927853076/1CAC0373-930F-45C4-8737-985EC4F501D5.png")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}