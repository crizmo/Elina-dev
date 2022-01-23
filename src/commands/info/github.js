const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('github command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("username")
            .setDescription("Github information")
            .addStringOption(option => option.setName("username").setDescription("The github username")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get github command info")),

	async execute(interaction, client) {

        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        const githubName = interaction.options.getString('username');

		if (interaction.options.getSubcommand() === "username"){
            if (githubName){

                fetch(`https://api.github.com/users/${githubName}`)
                .then(response => response.json())
                .then(data => {
                    let avatar = data.avatar_url.toLocaleString()
                    let type = data.type.toLocaleString()
                    let username = data.name.toLocaleString()
                    let public_repos = data.public_repos.toLocaleString()
                    let public_gists = data.public_gists.toLocaleString()
                    let created_at = data.created_at.toLocaleString()
                    let updated_at = data.updated_at.toLocaleString()
                    let followers = data.followers.toLocaleString()
                    let following= data.following.toLocaleString()

                    let login = data.login.toLocaleString()
                    
                const userEmbed = new MessageEmbed()
                    .setTitle(`${username}'s Github profile!`)
                    .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                    .setDescription(`${githubName}'s github profile info and starts'`)
                    .addFields(
                        {name: `Username`, value: `${username}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Type`, value: `${type}`, inline: true},
                        {name: `Followers`, value: `${followers}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Following`, value: `${following}`, inline: true},
                        {name: `Public Repo`, value: `${public_repos}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Public Gists`, value: `${public_gists}`, inline: true},
                        {name: `Created At`, value: `${created_at}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Updated At`, value: `${updated_at}`, inline: true},
                    )
                    .setThumbnail(avatar)
                    .setFooter("For more commands do /help")
                    .setTimestamp()

                    const row = new MessageActionRow().addComponents(
                        new MessageButton()
                            .setURL(`https://github-readme-stats.vercel.app/api?username=${login}&theme=radical&show_icons=true&hide_border=true.gif`)
                            .setLabel('Stats')
                            .setStyle('LINK'),
                        new MessageButton()
                            .setURL(`https://github.com/${login}`)
                            .setLabel('Profile')
                            .setStyle('LINK'),
                        new MessageButton()
                            .setURL(`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&show_icons=true&hide_border=true&layout=compact&langs_count=8&theme=tokyonight`)
                            .setLabel('Languages')
                            .setStyle('LINK'),
                            );

                        interaction.reply({ embeds: [userEmbed], components: [row]})
                    }).catch(e => {
                        const githubinfo = new MessageEmbed()
                        .setTitle("Github command")
                        .setDescription("Github command usage and informaion")
                        .addFields(
                            {name: `Usage`, value: "`\/github\`", inline: true},
                            {name: `\u200B`, value: `\u200B`, inline: true},
                            {name: `Usage`, value: "`\/github username {github_username}\`", inline: true},
                        )
                        .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                        .setThumbnail(interaction.guild.iconURL())
                        .setImage("https://media.discordapp.net/attachments/912047994713550928/914364514047229962/unknown.png?width=495&height=404")
                        .setTimestamp()
                        .setColor("RANDOM")
                        .setFooter("For info of all command do /help");
        
                        const userEmbed1 = new MessageEmbed()
                            .setTitle("Github command")
                            .setDescription("To use the command do:\n\n /github username {github_username}\n\n`\ For more details click on the button below \`")
                            .setTimestamp()
                            .setColor("RANDOM")
                            .setFooter(":)");
        
                        const row = new MessageActionRow().addComponents(
                            new MessageButton()
                                .setCustomId('help')
                                .setLabel('Github info')
                                .setStyle('PRIMARY'),
                                );
                        interaction.reply({ embeds: [userEmbed1], components: [row]})
        
                        const filter = i => i.customId === 'help' && i.user.id === interaction.member.user.id;
        
                        const collectorHelp = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });
                        
                        collectorHelp.on('collect', async i => {
                          if (i.customId === 'help') {
                            await i.deferUpdate()
                            await i.editReply({ embeds: [githubinfo] });
                          }
                        });
                    })
            } else {
                const githubinfo = new MessageEmbed()
                .setTitle("Github command")
                .setDescription("Github command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/github\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/github username {github_username}\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/782648013515784232/925706275323531274/unknown.png?width=391&height=95")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");


                const userEmbed1 = new MessageEmbed()
                    .setTitle("Github command")
                    .setDescription("To use the command do:\n\n /github username {github_username}\n\n`\ For more details click on the button below \`")
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(":)");

                const row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setCustomId('help')
                        .setLabel('Github info')
                        .setStyle('PRIMARY'),
                        );
                await interaction.reply({ embeds: [userEmbed1], components: [row]})

                const filter = i => i.customId === 'help' && i.user.id === interaction.member.user.id;

                const collectorHelp = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });
                
                collectorHelp.on('collect', async i => {
                  if (i.customId === 'help') {  
                    await i.deferUpdate()
                    await i.editReply({ embeds: [githubinfo] });
                  }
                });
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const githubinfo = new MessageEmbed()
                .setTitle("Github command")
                .setDescription("Github command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/github\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/github username {github_username}\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/782648013515784232/925706275323531274/unknown.png?width=391&height=95")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [githubinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};