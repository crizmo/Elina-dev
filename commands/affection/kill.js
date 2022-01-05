module.exports = {
    name: "kill",
    description: "send yourself or another user a kill",
    usage: `=kill (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        killLinks = [ 'https://thumbs.gfycat.com/ScrawnyCourteousAssassinbug-max-1mb.gif',
        'https://media.tenor.com/images/8ed0a4195855b6a7420feb9acb62bdc5/tenor.gif',
        'https://media.tenor.com/images/bdc0690ce19722e475ecd7479be44418/tenor.gif',
        'https://media1.tenor.com/images/717ab47f49d93f141900c20d0021f6c2/tenor.gif?itemid=14754968',
        'https://thumbs.gfycat.com/FickleForcefulBlobfish-max-1mb.gif',
        'https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif',
        'http://37.media.tumblr.com/8aac647e8c1bae75b43d38991f3945df/tumblr_nah08lNX2V1sijhkdo1_500.gif' ]
        
        const randomNum = Math.floor(Math.random() * Math.floor(killLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} killed ${member.displayName} !`)
                .setTimestamp()
                .setImage(killLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(killLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}