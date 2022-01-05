module.exports = {
    name: 'help-server',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Server info  commands')
        .setURL('https://dsc.gg/elina')
        .setDescription("Some commands for the server's help")
        .addField('`=invite`', 'Get the bot invite link', true)
        .addField('`=rules`', 'To check the rules', true)
        .addField('`=ping`', 'Get the bot\'s API ping', true)
        .addField('`=suggestions`', 'To add suggestions | =suggest {suggestion}', true)
        .setThumbnail("https://media.discordapp.net/attachments/782648013515784232/862195108778082324/24697DDA-1579-4DDD-A413-6B2C55E5E608.png")
        .setFooter('Note:- These commands dont have dynamic help like others');

        message.channel.send({embeds: [newEmbed]});
    }
}