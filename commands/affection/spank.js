module.exports = {
    name: "spank",
    description: "spank",
    usage: `=spank (@user)`,
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    aliases: [],

    execute(client, message, args, Discord) {
        spankLinks = [ 'http://i.imgur.com/7ns8h8Q.gif',
        'https://c.tenor.com/WN-vExb3SlgAAAAC/anime-schoolgirl.gif',
        'https://24.media.tumblr.com/38094ad70dcf7722b7aceb6bbd82507f/tumblr_mqqu76NpRP1srsfpho1_400.gif',
        'http://pa1.narvii.com/5792/c53f613f30bd0053e1eb561d336db90f2a02ec46_hq.gif',
        'https://tenor.com/view/whip-punish-ouch-no-angry-gif-15788990',
        'https://tenor.com/view/demon-slayer-tengen-uzui-aoi-spanking-spank-gif-24069350' ]

        const randomNum = Math.floor(Math.random() * Math.floor(spankLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spanked ${member.displayName} 😳!`)
                .setImage(spankLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(spankLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})

        }
    }
}