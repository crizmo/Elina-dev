const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yaoi')
		.setDescription('Match command usage and information!')
        .addUserOption(option => option.setName("with").setDescription("The user mentioned")),

	async execute(interaction, client) {

            let rng = Math.floor(Math.random() * 101);
            const rngIndex = Math.floor(rng / 10);
            const rngLevel = "💖".repeat(rngIndex) + "💔".repeat(10 - rngIndex);

            const rngTop = 50;

            const user = interaction.options.getUser("with")
            const member = interaction.options.getMember("with") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                if (rngTop < rng){
                    const yaoi = "You two will make a good yaoi";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see your ship !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} matched with ${user.username} by ` + rng + " %"},
                            {name: "Score", value: yaoi},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good yaoi !");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
                else {
                    const notyaoi = "Oof not a good yaoi ship";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see your ship !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} matched with ${user.username} by ` + rng + " %"},
                            {name: "Score", value: notyaoi},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Sad !");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
            } else {
                if (rngTop < rng){
                    const yaoi = "Yaoi with themselves";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you make a good yaoi with yourself !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} made yaoi with ` + rng + " %"},
                            {name: "Score", value: yaoi},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good ship !");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
                else {
                    const notyaoi = "Yaoi not possible";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you make a good yaoi with yourself !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} made yaoi with ` + rng + " %"},
                            {name: "Score", value: notyaoi},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Oof !");

                    await interaction.reply({ embeds: [userEmbed]})
                }
            }
	},
};