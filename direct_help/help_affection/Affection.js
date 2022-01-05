module.exports = {
    name: 'help-affection',
    permissions: ["SEND_MESSAGES"],
    description: "",
    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()

        .setColor('#FFDBE9')
        .setAuthor(`Command used by ${user.username}`, user.displayAvatarURL())
        .setTitle('Affection commands')
        .setURL('https://dsc.gg/elina')
        .setDescription('Spread love though these command')
        .addField('`=kiss`', 'To kiss a user | =kiss @user', true)
        .addField('`=hug`', 'To hug a user | =hug @user', true)
        .addField('`=slap`', 'To slap a user | =slap @user', true)
        .addField('`=boop`', 'To boop a user | =boop @user', true)
        .addField('`=kill`', 'To kill a user | =kill @user', true)
        .addField('`=pat`', 'To pat a user | =pat @user', true)
        .addField('`=spank`', 'To spank a user | =spank @user', true)
        .addField('`=match`', 'Love meter between 2 users | =match @user', true)
        .addField('`=simp`', 'simp meter', true)
        .setThumbnail("https://media.discordapp.net/attachments/782648013515784232/862195106228600832/8331AFCD-CC80-4BB2-A934-7292EBE96E5C.png")
        .setFooter('Enjoy for more commands do =help');

        message.channel.send({embeds: [newEmbed]});
    }
}