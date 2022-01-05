const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: "withdraw",
    aliases: ["with"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Withdraw command",

    async execute(client, message, args, Discord) {

        let money = args.join(" ");
        if (!money) return message.channel.send("Enter the amount you want to withdraw.");

        let result = await cs.withdraw({
            user: message.author,
            guild: { id : null },
            amount: money
        });
        if (result.error) {
            if (result.type === 'money') return message.channel.send("Specify an amount to withdraw")
            if (result.type === 'negative-money') return message.channel.send("You can't withdraw negative yen, please use deposit command")
            if (result.type === 'low-money') return message.channel.send("You don't have that much yen in bank.")
            if (result.type === 'no-money') return message.channel.send("You don't have any yen to withdraw")
        } else {
            if (result.type === 'all-success') return message.channel.send("You have withdraw'd all your yen from your bank")
            if (result.type === 'success') return message.channel.send(`You have withdraw ${result.amount} ¥ from your bank.`)

        }
    }
}