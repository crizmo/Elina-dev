const anyanime = require("anyanime");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "anyanime",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "flips a coin!",
    execute(client, message, args, Discord, cmd) {
        const anime = anyanime.anime();
        message.channel.send(anime)
    }
}