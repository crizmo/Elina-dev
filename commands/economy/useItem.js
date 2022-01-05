const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "use",
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Use command",

  async execute(client, message, args, Discord) {

    let item = args[0];
    if (!item) return message.reply("What item you wana use?")
    if (parseInt(args[0])) return message.reply("Please use the name of the item, not the ID.")
    let haveItem = false;
    const arr = await cs.getUserItems({
      user: message.author,
      guild: { id : null },
    });
    let i;
    for (key in arr.inventory) {
      if (arr.inventory[key].name.toLowerCase().includes(item.toLowerCase())) haveItem = true
      i = key;
    };
    if (haveItem) {
      let money = Math.floor((Math.random() * 10) + 1) * 100 // 100 - 1000
      let result = await cs.addMoney({
        user: message.author,
        guild: { id : null },
        amount: money,
        wheretoPutMoney: 'wallet'
      });
      let a = await cs.removeUserItem({
        user: message.author,
        guild: { id : null },
        item: i+1
      });
      if (result.error) {
        console.log(result)
        return message.reply("Unknown error occured see console.")
      } else return message.reply("You've used " + item + " and earned $" + money)

    } else return message.reply("Please buy the item first!")

  }
}