const akinator = require("discord.js-akinator");

module.exports = {
    name: "aki",
    aliases: ["akinator"],
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "akinator command!",
    execute(client, message, args, Discord, cmd){
        akinator(message, client);
    }
}