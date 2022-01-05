module.exports = {
    name: 'help-extra',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Extra commands')
        .setURL('https://dsc.gg/elina')
        .setDescription('More fun commands')
        .addField('`=chatbot`', 'Auto chat with the bot', true)
        .addField('`=whoasked`', 'who asked command', true)
        .addField('`=embed`', 'To create your own embed', true)
        .addField('`=howgay`', 'gay calc', true)
        .addField('`=howstraight`', 'straight calc', true)
        .addField('`=8ball`', 'To play 8ball | =8ball Is Elina sus?', true)
        .setThumbnail("https://i.imgur.com/2TDoFTC.gif")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}