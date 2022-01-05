const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

module.exports = {
  name: "beg",
  aliases: ["beg"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 60,
  description: "beg for coins",
  async execute(client, message, args, Discord, profileData) {
    if(cooldown.has(message.author.id)) {
      message.reply('You Are On CoolDown Wait 60 Seconds')
    } else {
          const randomNumber = Math.floor(Math.random() * 500) + 1;
          const response = await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: randomNumber,
              },
            }
          );
          let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`${message.author.username}, you begged and received ${randomNumber} **¥**`)
          message.channel.send({embeds: [embed]})
        }
        cooldown.add(message.author.id);
        setTimeout(() => {
             cooldown.delete(message.author.id)
         }, 60000);
  },
};