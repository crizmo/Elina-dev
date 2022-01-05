module.exports = {
    name: "kiss",
    permissions: ["SEND_MESSAGES"],
    description: "send yourself or another user a kiss",

    execute(client, message, args, Discord) {
        kissLinks = [ 'https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif?itemid=14816388',
        'https://i.pinimg.com/originals/5e/1e/8c/5e1e8c81c01a1e26db4c0e18ae8bafd5.gif',
        'https://media.tenor.com/images/4751eaa0b2d91140ab79c577809b566a/tenor.gif',
        'https://media.tenor.com/images/07b5bea3e050f380c6742500c1f1f7db/tenor.gif',
         'https://media.tenor.com/images/21fed1c94754d21acdbccd52adfb53d0/tenor.gif',
        'https://images-ext-1.discordapp.net/external/MTVSndEGkNUYyl4nUGhfD7pBYzhO1ycHZylGIE3XFoA/https/cdn.weeb.sh/images/rypMnpuvW.gif']

        const randomNum = Math.floor(Math.random() * Math.floor(kissLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} kissed ${member.displayName} !`)
                .setTimestamp()
                .setImage(kissLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(kissLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})

        }
        
    }
}