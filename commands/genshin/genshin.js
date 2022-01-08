module.exports = {
    name: 'genshin',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Still working")
        .setDescription('lol')
        message.channel.send({embeds: [newEmbed]})
    }
}