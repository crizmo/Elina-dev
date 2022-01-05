const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "tweet",
    permissions: ["SEND_MESSAGES"],
    description: "tweet something on twitter!",
    execute(client, message, args, Discord, cmd){
        if(!args[0]) return message.channel.send({content: 'bro give me some text to tweet'})
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Tweet!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send({embeds: [embed]})
        }).catch((error)=>{
            error;
        })
    }
}