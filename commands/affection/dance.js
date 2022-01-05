module.exports = {
    name: "dance",
    description: "Dance with yourself or with someone",
    usage: `=dance (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {

        danceLinks = [ 'https://i.kym-cdn.com/photos/images/newsfeed/001/062/639/3fc.gif',
                'https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif?1525707539',
                'https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/19carnivalphantasm.gif?resize=422%2C238&ssl=1',
                'https://64.media.tumblr.com/6d96d14077f04fdcdac6688e5a80a526/7f100653d5dd2f51-3e/s540x810/0bcc467120fc4aaf2bfbdc6c649dd3c7cb9872c2.gifv',
                'https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/2harehareyukai.gif?resize=640%2C360&ssl=1' ]
        const randomNum = Math.floor(Math.random() * Math.floor(danceLinks.length))

        danceAloneLinks = [ 'https://giffiles.alphacoders.com/211/211791.gif',
                'https://c.tenor.com/15NLF1281h8AAAAM/anime-dance.gif',
                'https://tenor.com/view/copy-cat-vibe-dance-cute-sweet-gif-22026064',
                'https://tenor.com/view/paiyumi-anime-vibe-vtuber-anime-dance-paiyumi-dance-gif-22786428',
                'https://media.discordapp.net/attachments/883909391227691128/890522382375206942/idoly-pride-dance.gif',
                'https://media.discordapp.net/attachments/850224590092369970/871265966837870612/image0.gif' ]

        const randomAloneNum = Math.floor(Math.random() * Math.floor(danceAloneLinks.length))

        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} danced with ${member.displayName} !`)
                .setTimestamp()
                .setImage(danceLinks[randomNum])
                .setFooter("Nice !!");
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} is dancing alone?! !`)
                .setTimestamp()
                .setImage(danceAloneLinks[randomAloneNum])
                .setFooter("Next time dance with me :>");
            message.channel.send({embeds: [firstEmbed]})

        }
    }
}