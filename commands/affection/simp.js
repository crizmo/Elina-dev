const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "simp",
    aliases: ["simp"],
    permissions: ["SEND_MESSAGES"],
    description: "Calculates the simp affinity you have for another person.",
    execute (client, message, args, Discord, cmd) {

        const simp = Math.random() * 100;
        const simpIndex = Math.floor(simp / 10);
        const simpLevel = "😏".repeat(simpIndex) + "🤖".repeat(10 - simpIndex);

        const embed = new MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`**${message.member.displayName}** is a simp`,
            `🤭 ${Math.floor(simp)}%\n\n${simpLevel}`);

        message.channel.send({embeds: [embed]})
    }
}