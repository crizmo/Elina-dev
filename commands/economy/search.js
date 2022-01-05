const profileModel = require("../../models/profileSchema");
const cooldown = new Set();

module.exports = {
    name: "search",
    aliases: [],
    permissions: [],
    cooldown: 60,
    description: "Search for some coin!",
    async execute(client, message, args, Discord, profileData, cmd) {
      if(cooldown.has(message.author.id)) {
      message.reply('you are on cooldown wait 60 seconds')
    } else {

        const locations = [
            "car",
            "bathroom",
            "park",
            "truck",
            "pocket",
            "computer",
            "zey"
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);
        message.channel.send(`<@${message.author.id}> Which location would you like to search?\n Type the location in this channel\n \`${chosenLocations.join('` `')}\``);
        const filter = m => m.author.id == message.author.id;

        const collector = message.channel.createMessageCollector({ filter });

        const earnings = Math.floor(Math.random() * (600 - 100 + 1)) + 100;


        collector.on('collect', async (m) => {
            collector.stop();
            message.channel.send(`You found ${earnings} coins!`);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('You ran out of time!');
            }
        });
      }
      cooldown.add(message.author.id);
        setTimeout(() => {
             cooldown.delete(message.author.id)
         }, 60000);
    }
}