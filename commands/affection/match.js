const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "match",
    aliases: ["affinity"],
    permissions: ["SEND_MESSAGES"],
    description: "Calculates the love affinity you have for another person.",
    usage: "[mention | id | username]",
    execute (client, message, args, Discord, cmd) {
    

        let person = message.mentions.members.first();

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if(person){
        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send({embeds: [embed]})
        }else{
            const embed1 = new MessageEmbed()
            .setColor("#ffb6c1")
            .setDescription("Please mention a user who you want to match with");
            message.channel.send({embeds: [embed1]})
        }
    }
}