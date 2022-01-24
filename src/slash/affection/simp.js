const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simp')
		.setDescription('Simp command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Check how much simp a user is !")
            .addUserOption(option => option.setName("with").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get simp command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

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
        } else if (interaction.options.getSubcommand() === "info"){
            const simpinfo = new MessageEmbed()
                .setTitle("Simp command")
                .setDescription("Simp command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\ /simp \`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\ /simp user @member \`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [simpinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};