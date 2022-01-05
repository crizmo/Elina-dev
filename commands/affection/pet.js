module.exports = {
    name: "pet",
    permissions: ["SEND_MESSAGES"],
    description: "send yourself or another user a pet",

    execute(client, message, args, Discord) {
        petLinks = [ 'https://cdn.discordapp.com/attachments/810026230089908256/843546732990169138/image0.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546733764935740/image2.jpg',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546734209794109/image4.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546733341966356/image1.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546734734999573/image5.gif']

        const randomNum = Math.floor(Math.random() * Math.floor(petLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} pets ${member.displayName} !`)
                .setTimestamp()
                .setImage(petLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(petLinks[randomNum])
            message.channel.send({embeds: [firstEmbed]})
        }
    }
}