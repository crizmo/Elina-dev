module.exports = {
    name: "ping",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "test command",

    execute(client, message, args, Discord) {
        const ping = new Discord.MessageEmbed()
        .setDescription(`Pong! Elina has \`${client.ws.ping}\` ms ping 🏓`);

        message.channel.send({embeds: [ping]});
    }
}