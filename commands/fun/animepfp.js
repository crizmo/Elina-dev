const anyanime = require("anyanime");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "anyanime",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "Get random anime image / pfp",
    execute(client, message, args, Discord, cmd) {
        // const anime = anyanime.anime();         // Returns a random anime image
        // message.channel.send(anime);

        const anime = anyanime.anime();
        const embed = new Discord.MessageEmbed().setImage(anime);      // Returns a random anime image but inside an embed
        message.channel.send({ embeds: [embed] });
    }
}