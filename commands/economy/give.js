const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: "give",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Transfer money command",

    async execute(client, message, args, Discord) {

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if (user) user = user.user;;
        } else {
            user.id = "1"
        }

        if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
        if (!client.users.cache.get(user.id) || !user) return message.channel.send('Sorry, you forgot to mention somebody.');

        let amount = args[1];
        if (!amount) return message.channel.send("Enter amount of yen to add.");
        if (amount.includes("-")) return message.channel.send("You can't send negitive yen.")
        let money = parseInt(amount);

        let result = await cs.transferMoney({
            user: message.author,
            user2: user,
            guild: { id : null },
            amount: money
        });
        if (result.error) return message.channel.send(`You don't have enough yen in your wallet.`);
        else message.channel.send(`**${message.author.username}**, Successfully transfered **${result.money}** to **${result.user2.username}**`)
    }
}