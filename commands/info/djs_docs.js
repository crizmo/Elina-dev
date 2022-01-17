const axios = require("axios");

module.exports = {
    name: "djs",
    aliases: ["docs"],
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "qr code encoder command!",
    execute(client, message, args, Discord, cmd){

        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
            args
          )}`
          axios
            .get(uri)
            .then((embed) => {
              const { data } = embed
              if (data && !data.error) {
                message.channel.send({ embeds: [data] })
              } else {
                message.reply('Could not find that documentation')
              }
            })
            .catch((err) => {
              console.error(err)
            })
    }
}