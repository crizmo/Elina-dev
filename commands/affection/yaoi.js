const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "yaoi",
    aliases: ["yaoi"],
    permissions: ["SEND_MESSAGES"],
    description: "yaoi",
    usage: "[mention | id | username]",
    execute (client, message, args, Discord, cmd) {
    
        let person = message.mentions.members.first();

        const yaoi = Math.random() * 100;
        const yaoiIndex = Math.floor(yaoi / 10);
        const yaoiLevel = "💖".repeat(yaoiIndex) + "💔".repeat(10 - yaoiIndex);

        if(person){
        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** and **${message.member.displayName}** will make a good yaoi`,
            `💟 ${Math.floor(yaoi)}%\n\n${yaoiLevel}`);

        message.channel.send({embeds: [embed]});
        }else{
            const embed1 = new MessageEmbed()
            .setColor("#ffb6c1")
            .setDescription("Please mention a user who you want to match with");
            message.channel.send({embeds: [embed1]})
        }
    }
}