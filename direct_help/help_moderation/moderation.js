module.exports = {
    name: 'help-moderation',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setTitle('Moderation commands🎒')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setURL('https://dsc.gg/elina')
        .setDescription('Moderation commands require `Admin` permissions .')
        .addField('`=kick`', 'Kicks a member from your server via mention or ID', true)
        .addField('`=ban`', 'Bans a member from your server via mention or ID', true)
        .addField('`=clear`', 'Purges messages', true)
        .addField('`=roles`', 'to check someones roles', true)
        .addField('`=poll`', 'To create a poll', true)
        .setThumbnail("https://images-ext-2.discordapp.net/external/7yrmrRu2uU8KwVc9twkB5KGnIdkB2fpUpDnsVsby3hw/https/i.pinimg.com/originals/8e/54/dd/8e54ddbab06543527f3421e520812f56.gif")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}