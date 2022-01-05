const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setitem",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "add item command",

    async execute(client, message, args, Discord) {

        cs.setItems({
            guild: { id : null },
            shop: [{
              name: 'Watch',
              price: 20
            }, {
                name: 'Rolex',
                price: 1230
              }]
          }).then(console.log)
    }
}