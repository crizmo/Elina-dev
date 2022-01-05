const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "roll",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "roll a dice!",
    execute(client, message, args, Discord, cmd){

        const roll1= ["1", "2","3","4","5","6"];
        const die = roll1[Math.floor(Math.random() * roll1.length)];

        let embed = new MessageEmbed()
        .setTitle('Roll')
        .setDescription(` You rolled a dice and got ${die} `)
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}