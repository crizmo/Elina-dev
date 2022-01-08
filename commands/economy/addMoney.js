const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports = {
  name: "addMoney",
  permissions: ["ADMINISTRATOR"],
  cooldown: 5,
  description: "Add items command",
  async execute(client, message, args, Discord) {
    if(message.author.id !== '784141856426033233') return message.channel.send("U aint criz lol");
    let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if (user) user = user.user;;
        } else if (!args[0]) {
            return message.channel.send("Specify a user!");
        }
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("You do not have requied permissions.")
        let wheretoPutMoney = args[2] || "wallet"; //or bank
        let amount = args[1];
        if (!amount) return message.channel.send("Enter amount of money to Remove.");
        let money = (amount);
        
    let result = await cs.addMoney({
      user: user,
      guild: message.guild,
      amount: money,
      wheretoPutMoney: wheretoPutMoney
    });
    if (result.error) return message.reply("You cant add negitive money");
    else message.reply(`Successfully added $${money} to ${user.username}, ( in ${wheretoPutMoney} )`)
  }
};