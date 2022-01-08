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

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spat on ${member.displayName}`)
                .setTimestamp()
                .setImage(spitLinks[randomNum])
                .setDescription('<:Elmo_Fire:805428510692343848> you <:cheese:880525560714002512> me <:flushedcool:808923862916923444>')
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(spitLinks[randomNum])
                .setDescription('<:Elmo_Fire:805428510692343848> <:cheese:880525560714002512> <:flushedcool:808923862916923444>')
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}