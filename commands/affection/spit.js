module.exports = {
    name: "spit",
    description: "spit",
    usage: `=spit (@user)`,
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    aliases: [],

    execute(client, message, args, Discord) {
        spitLinks = [ 'https://media.tenor.com/images/417b595f68cd87b5574b5cbf4cc8ce49/tenor.gif' ]

        const randomNum = Math.floor(Math.random() * Math.floor(spitLinks.length))
        let member = message.mentions.members.first();
        let firstEmbed

        if(member){
             firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spat on ${member.displayName}`)
                .setTimestamp()
                .setImage(spitLinks[randomNum])
                .setDescription('Ew why !!')
            message.channel.send({embeds: [firstEmbed]})
        }else{
             firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(spitLinks[randomNum])
                .setDescription('Uhm...')
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}
