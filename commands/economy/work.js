const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

module.exports = {
  name: "work",
  aliases: ["work"],
  permissions: ["SEND_MESSAGES"],
  cooldown: 60,
  description: "work for coins",
  async execute(client, message, args, Discord, profileData) {
    if(cooldown.has(message.author.id)) {
      message.reply('you are on cooldown wait 60 seconds')
    } else {
    
    workLinks = [ 'https://media.tenor.com/images/a0348aa71116be1e1e4f74112bb6acd2/tenor.gif',
                  'https://pa1.narvii.com/7325/fd600ff581260930ae5c7f6618be40b69fc718fbr1-370-300_hq.gif',
                  'http://pa1.narvii.com/5813/7aa8afa4fd3ddbc7d86f289e75202196bbf3741a_00.gif',
                  'https://66.media.tumblr.com/4396fd67014d4bd09b8e40fddafb6a3f/tumblr_pbv9b6oH0O1v1hotuo1_400.gif',
                  'https://media.tenor.com/images/98426bbf833507eb25cfd39ab6f7afe4/tenor.gif' ]

    const randomNum = Math.floor(Math.random() * Math.floor(workLinks.length))    
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
    .setDescription(`${message.author.username}, you worked and got ${randomNumber} **¥**`)
    .setImage(workLinks[randomNum])
    message.channel.send({embeds: [embed]})
    }
    cooldown.add(message.author.id);
        setTimeout(() => {
             cooldown.delete(message.author.id)
         }, 60000);
  },
};