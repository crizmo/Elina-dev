const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simp')
		.setDescription('Simp command usage and information!')
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
                    const simp = "User is a simp";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you are a simp !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} simped with ${user.username} by ` + rng + " %"},
                            {name: "Score", value: simp},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good match ?!");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
                else {
                    const notsimp = "User is not a simp";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you are a simp !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} simped with ${user.username} by ` + rng + " %"},
                            {name: "Score", value: notsimp},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good match ?!");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
            } else {
                if (rngTop < rng){
                    const simp = "User is a simp";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you are a simp !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} simped with ` + rng + " %"},
                            {name: "Score", value: simp},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good match ?!");

                    await interaction.reply({ embeds: [userEmbed]})
                    }
                else {
                    const notsimp = "User is not a simp";
                
                    const userEmbed = new MessageEmbed()
                        .setTitle(`${interaction.user.username} let's see if you are a simp !`)
                        .addFields(
                            {name: "Checking !!", value: `${interaction.user.username} did not simp with ` + rng + " %"},
                            {name: "Score", value: notsimp},
                            {name: `\u200B`, value: `${rngLevel}`},
                        )
                        .setTimestamp()
                        .setColor("RED")
                        .setFooter("Good ?!");

                    await interaction.reply({ embeds: [userEmbed]})
                }
            }
	},
};