const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "additem",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "add item command",

    async execute(client, message, args, Discord) {
                try {
            const cookie = new MessageEmbed()
                .setDescription('What should be item name?')
                .setColor('#00ccff')
            message.reply({
                embeds: [cookie],
                allowedMentions: {
                    repliedUser: false
                }
            })

            const filter = m => m.author.id === message.author.id;
            let Name = await message.channel.awaitMessages({
                filter,
                max: 1,
                time: 10000,
                errors: ['time']
            })

            const embed = new MessageEmbed()
                .setDescription('What should be item price?')
                .setColor('#00ccff')
            message.reply({
                embeds: [embed],
                allowedMentions: {
                    repliedUser: false
                }
            })
            let Price = await message.channel.awaitMessages({
                filter,
                max: 1,
                time: 10000,
                errors: ['time']
            })

            const des = new MessageEmbed()
                .setDescription('What should be item description?')
                .setColor('#00ccff')
            message.reply({
                embeds: [des],
                allowedMentions: {
                    repliedUser: false
                }
            })
            let description = await message.channel.awaitMessages({
                filter,
                max: 1,
                time: 10000,
                errors: ['time']
            })
            let result = await cs.addItem({
                guild: { id: null },
                inventory: {
                    name: Name.first().content,
                    price: parseInt(Price.first().content),
                    description: description.first().content
                }
            });
            const error1 = new MessageEmbed()
                .setDescription('There was a error')
                .setColor('#00ccff')
                
            const error2 = new MessageEmbed()
                .setDescription('There was a error, invalid price!')
                .setColor('#00ccff')
                
            const error3 = new MessageEmbed()
                .setDescription('There was a error, You didnt specify price!')
                .setColor('#00ccff')
                
            const error4 = new MessageEmbed()
                .setDescription('There was a error, No data recieved!')
                .setColor('#00ccff')
                
            const Noerror = new MessageEmbed()
                .setDescription('Done! Successfully added `' + Name.first().content + '` to the shop!')
                .setColor('#00ccff')
                
            if (result.error) {
                if (result.type == 'No-Inventory-Name') return message.reply({
                    embeds: [error1],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
                if (result.type == 'Invalid-Inventory-Price') return message.reply({
                    embeds: [error2],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
                if (result.type == 'No-Inventory-Price') return message.reply({
                    embeds: [error3],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
                if (result.type == 'No-Inventory') return message.reply({
                    embeds: [error4],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            } else message.reply({
                embeds: [Noerror],
                allowedMentions: {
                    repliedUser: false
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}