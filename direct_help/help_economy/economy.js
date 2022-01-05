module.exports = {
    name: 'help-economy',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#00FFFF')
        .setTitle('Economy 💰')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setURL('https://dsc.gg/elina')
        .setDescription("Economy command **[updating]**")
        .addField('`=balance`', 'To check your balance', true)
        .addField('`=work`', 'Earnings method', true)
        .addField('`=beg`', 'Earnings method', true)
        .addField('`=rob`', 'Earnings method', true)
        .addField('`=gamble`', 'Earnings method', true)
        .addField('`=slots`', 'Earnings method', true)
        .addField('`=daily`', 'Daily method', true)
        .addField('`=weekly`', 'Weekly method', true)
        .addField('`=monthly`', 'Monthly method', true)
        .addField('`=deposit`', 'Deposit money in your bank', true)
        .addField('`=withdraw`', 'withdraw money from your bank', true)
        .addField('`=give`', 'Give money to another user', true)
        .addField('`=leaderboard`', 'To check cash leaderboard', true)
        .addField('\u200B', "\u200B", true)
        .addField('`=glb`', 'To check global leaderboard', true)
        .setThumbnail("https://media.discordapp.net/attachments/782648013515784232/862195106228600832/8331AFCD-CC80-4BB2-A934-7292EBE96E5C.png")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}