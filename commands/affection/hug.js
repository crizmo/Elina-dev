module.exports = {
    name: "hug",
    description: "send yourself or another user a hug",
    usage: `=hug (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        hugLinks = [ 'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
        'https://media1.tenor.com/images/b8a6eed08e17e94dad7eada8c63b69f5/tenor.gif?itemid=17363491',
        'https://i.gifer.com/2QEa.gif',
        'https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif',
        'https://media.discordapp.net/attachments/810026230089908256/836132603760345088/image1.gif',
        'https://media.discordapp.net/attachments/810026230089908256/836132603446296616/image0.gif' ]

        const randomNum = Math.floor(Math.random() * Math.floor(hugLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} sent ${member.displayName} a hug!`)
                .setTimestamp()
                .setImage(hugLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(hugLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}