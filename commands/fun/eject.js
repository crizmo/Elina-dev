module.exports = {
    name: "eject",
    permissions: ["SEND_MESSAGES"],
    description: "sus command",
    usage: `=eject (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        suslinks = ['https://media1.tenor.com/images/f44ac2abdafc97a6d5db85e026d4a838/tenor.gif',
        'https://i.kym-cdn.com/photos/images/original/001/893/924/569.gif',
        'https://64.media.tumblr.com/7898d087981456a594c2313bbd7b93f3/e1f2f0b0f27e0eef-7a/s500x750/3f491f707d84734d797f6ed1551e3143af5d3862.gif']
        susmessage = ['That user was the imposter',
        'That user was not the imposter',
        'That user was not the imposter']
        
        const randomNum = Math.floor(Math.random() * Math.floor(susmessage.length))
        let member = message.mentions.members.first();

        if(member){
            const firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} ejected ${member.displayName} !`)
                .setDescription(susmessage[randomNum])
                .setImage(suslinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            const firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setDescription(`Who do you want to eject`)
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}