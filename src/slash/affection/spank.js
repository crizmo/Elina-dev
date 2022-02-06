const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spank')
		.setDescription('Spank command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {

            spankLinks = [ 'http://i.imgur.com/7ns8h8Q.gif',
                    'https://c.tenor.com/WN-vExb3SlgAAAAC/anime-schoolgirl.gif',
                    'https://24.media.tumblr.com/38094ad70dcf7722b7aceb6bbd82507f/tumblr_mqqu76NpRP1srsfpho1_400.gif',
                    'http://pa1.narvii.com/5792/c53f613f30bd0053e1eb561d336db90f2a02ec46_hq.gif',
                    'https://tenor.com/view/whip-punish-ouch-no-angry-gif-15788990',
                    'https://tenor.com/view/demon-slayer-tengen-uzui-aoi-spanking-spank-gif-24069350' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(spankLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} spanked ${user.username} !`)
                    .setDescription("Damn :c")
                    .setImage(spankLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Why tho ?!");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} spanked , but who ??`)
                    .setDescription("Jeez :v")
                    .setImage(spankLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Imagine spanking noone ;D");

                await interaction.reply({ embeds: [userEmbed1]})
            }   
	},
};