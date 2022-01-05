module.exports = {
    name: 'help-fun',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Fun commands')
        .setURL('https://dsc.gg/elina')
        .setDescription('Fun commands to bring a new twist to your server')
        .addField('`=gtp`', 'Guess the pokemon game', true)
        .addField('`=ttt`', 'To play tictactoe against AI | =ttt @user to play against a user', true)
        .addField('`=snake`', 'snake game', true)
        .addField('`=rps`', 'To play rps | =rps rock / paper / scissors', true)
        .addField('`=coinflip`', 'To do a coinflip | =coinflip', true)
        .addField('`=eject`', 'To eject a use | =eject @user', true)
        .addField('`=em`', 'To start a emergiency meeting', true)
        .addField('`=roll`', 'To roll a dice', true)
        .addField('`=wyr`', 'would you rather', true)
        .addField('`=trivia`', 'Trivia command', true)
        .addField('`=c4`', 'play connect four with 2 people', true)
        .setThumbnail("https://i.imgur.com/2TDoFTC.gif")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}