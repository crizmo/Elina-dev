const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coinflip",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "flips a coin!",
    execute(client, message, args, Discord, cmd){
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        message.channel.send({embeds: [embed]})
    }
}