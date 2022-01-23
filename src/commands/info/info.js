const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Gets user info")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("server")
            .setDescription("Gets server info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){
            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const file = new MessageAttachment("./src/images/port_web.gif");
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information:`)
                    .setDescription("User info command to get information of a user.")
                    .setAuthor(`${user.username}`, avatar )
                    .setThumbnail(avatar)
                    .addFields(
                        {name: `Username:`, value: `${user.username}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Tag:`, value: `#${user.discriminator}`, inline: true},
                        {name: `Created at:`, value: `${user.createdAt.toLocaleString()}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Joined at:`, value: `${member.joinedAt.toLocaleString()}`, inline: true},
                        {name: `Booster:`, value: `${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Bot:`, value: `${user.bot}`, inline: true}
                    )
                    .setImage("attachment://port_web.gif")
                    .setTimestamp()
                    .setColor("BLACK")
                    .setFooter(client.user.tag , client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed], files: [file]})
            } else {
                const file1 = new MessageAttachment("./src/images/port_web.gif");
                const userEmbed1 = new MessageEmbed()
                .setTitle(`${interaction.user.username}'s Information:`)
                .setDescription("User info command to get informaio of a user.")
                .setAuthor(`${interaction.user.username}`, avatar )
                .setThumbnail(avatar)
                .addFields(
                    {name: `Username:`, value: `${interaction.user.username}`, inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Tag:`, value: `#${interaction.user.discriminator}`, inline: true},
                    {name: `Created at:`, value: `${interaction.user.createdAt.toLocaleString()}`, inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Joined at:`, value: `${interaction.member.joinedAt.toLocaleString()}`, inline: true},
                    {name: `Booster:`, value: `${interaction.member.premiumSince ? 'since ' + interaction.member.premiumSince.toLocaleString() : 'Nope'}`, inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Bot:`, value: `${interaction.user.bot}`, inline: true}
                )
                .setImage("attachment://port_web.gif")
                .setTimestamp()
                .setColor("BLACK")
                .setFooter(client.user.tag , client.user.displayAvatarURL());

                await interaction.reply({ embeds: [userEmbed1], files: [file1]})
            }
        } else if (interaction.options.getSubcommand() === "server"){

            const serverimage = new MessageAttachment("./src/images/port_web.gif");
            const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
            const emojis = interaction.guild.emojis.cache;
            const members = interaction.guild.members.cache;
            const ownerguy = interaction.guild.members.cache.get(interaction.guild.ownerId)
            const serverinfo = new MessageEmbed()
                .setTitle(`${interaction.guild.name}'s Information:`)
                .setDescription("Server information command to get information about the server.")
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .addFields(
                    {name: `Server Name:`, value: `${interaction.guild.name}`, inline: true},
                    {name: `Owner:`, value: `${ownerguy.user.username}#${ownerguy.user.discriminator}`, inline: true},
                    {name: `Total members:`, value: `${interaction.guild.memberCount}`, inline: true},
                    {name: `Bots Count:`, value: `${members.filter(member => member.user.bot).size}`, inline: true},
                    {name: `Emoji Count:`, value: `${emojis.size}`, inline: true},
                    {name: `Boost Count:`, value: `${interaction.guild.premiumSubscriptionCount || '0'}`, inline: true},
                    {name: `Role Count:`, value: `${roles.length - 1 }`, inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Channel Count:`, value: `${interaction.guild.channels.cache.size}`, inline: true},
                )
                .addFields(
                    {name: `Roles:`, value: `${interaction.guild.roles.cache.map( r => r).join(' ').replace("@everyone", " ")}`, inline: true},
                )
                .setImage("attachment://port_web.gif")
                .setTimestamp()
                .setColor("BLACK")
                .setFooter(client.user.tag , client.user.displayAvatarURL());
               
            await interaction.reply({ embeds: [serverinfo], files: [serverimage]})
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};