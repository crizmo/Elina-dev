const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-character",
    aliases: ["gen-char", "genshin-character", "gen-character", "genshin-char"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage !')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do =genshin char {character_name}')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/74o9e8vkvya5jizx_1603195749.jpeg")
        .setFooter('Enjoy');

        if (!name) return message.channel.send({ embeds: [errorEmbed] })

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setURL(`https://github-readme-stats.vercel.app/api?username=${name}&theme=radical&show_icons=true&hide_border=true.gif`)
                .setLabel('Stats')
                .setStyle('LINK'),
            new MessageButton()
                .setURL(`https://github.com/${name}`)
                .setLabel('Profile')
                .setStyle('LINK'),
            new MessageButton()
                .setURL(`https://github-readme-stats.vercel.app/api/top-langs/?username=${name}&show_icons=true&hide_border=true&layout=compact&langs_count=8&theme=tokyonight`)
                .setLabel('Languages')
                .setStyle('LINK'),
        );

        fetch(`https://api.github.com/users/${name}`)
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
                let following = data.following.toLocaleString()

                let login = data.login.toLocaleString()

                const userEmbed = new MessageEmbed()
                    .setTitle(`${username}'s Github profile!`)
                    .setAuthor(`${message.guild.name}`, client.user.displayAvatarURL())
                    .setDescription(`${name}'s github profile info and starts'`)
                    .addFields(
                        { name: `Username`, value: `${username}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Type`, value: `${type}`, inline: true },
                        { name: `Followers`, value: `${followers}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Following`, value: `${following}`, inline: true },
                        { name: `Public Repo`, value: `${public_repos}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Public Gists`, value: `${public_gists}`, inline: true },
                        { name: `Created At`, value: `${created_at}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Updated At`, value: `${updated_at}`, inline: true },
                    )
                    .setThumbnail(avatar)
                    .setFooter("For more commands do =help")
                    .setTimestamp()

                //   const embed = new MessageEmbed()
                //   .setTitle("Github profile/stats")
                //   .setDescription("Click on the buttons below to check their github profile or stats!")
                //   .setImage("https://giffiles.alphacoders.com/121/12113.gif")
                //   .setFooter(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 64 }))
                //   .setColor("#FFDBE9");

                message.channel.send({ embeds: [userEmbed], components: [row] });
            }
            )
    }
}