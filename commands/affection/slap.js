module.exports = {
    name: "slap",
    description: "send yourself or another user a slap",
    usage: `=slap (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        slapLinks = [ 'https://media.tenor.com/images/9e7a8a7473f6535081805f0e85b7a09f/tenor.gif',
        'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
        'https://i.imgur.com/fm49srQ.gif',
        'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif',
        'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-18.gif',
        'https://i.pinimg.com/originals/1e/59/ec/1e59ecec2c4231509f633c7cea00e78d.gif' ]

        const randomNum = Math.floor(Math.random() * Math.floor(slapLinks.length))
        let member = message.mentions.members.first();
        let firstEmbed

        if(member){
             firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} slaped ${member.displayName} !`)
                .setTimestamp()
                .setImage(slapLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
             firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(slapLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}
