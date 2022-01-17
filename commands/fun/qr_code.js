const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "qr",
    aliases: ["qr-code"],
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "qr code encoder command!",
    execute(client, message, args, Discord, cmd){

        const Msg = args.join("+");
        const qrcode = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(encodeURI(`https://chart.googleapis.com/chart?chl=${Msg}&chs=200x200&cht=qr&chld=H%7C0`))
        .setTimestamp();
        message.delete()

        return message.channel.send({embeds:[qrcode]});
    }
}