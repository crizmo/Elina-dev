const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
let color = "#00ccff";
const { readdirSync } = require("fs");
const emo = require("./emoji.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with subcmd!'),
	async execute(interaction, client) {

		const user = interaction.user
        let avatar = user.displayAvatarURL()

		let categories = [];
    
        let ignored = [
          "dev",
          "configuration",
          "utils",
          "reportadd",
        ];
  
        readdirSync("./src/slash/").forEach((dir) => {
          if (ignored.includes(dir.toLowerCase())) return;
          const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()}`;
          let cats = new Object();
  
          cats = {
            name: name,
            value: `\`${dir.toLowerCase()}\``,
            inline: true,
          };
  
          categories.push(cats);
        });

		const row = new MessageActionRow().addComponents(
				new MessageSelectMenu()
					.setCustomId('main')
					.setPlaceholder('Affection commands')
					.addOptions([
						{
							label: 'Affection commands',
							description: 'To get more info of affection commands',
							value: 'first_option',
						},
						{
							label: 'Bot commands',
							description: 'To get more info of bot commands',
							value: 'second_option',
						},
						{
							label: 'Economy commands',
							description: 'To get more info of economy commands',
							value: 'third_option',
						},
						{
							label: 'Fun commands',
							description: 'To get more info of fun commands',
							value: 'fourth_option',
						},
						{
							label: 'Info commands',
							description: 'To get more info of info commands',
							value: 'fifth_option',
						},
						{
							label: 'Genshin commands',
							description: 'To get more info of genshin commands',
							value: 'sixth_option',
						}
					]),
			)
			
			const affection = new MessageEmbed()
			.setTitle("Affection commands!")
			.setDescription("Cool way to show your love")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			  {name: `\u200B`, value: "`\ boop \` , `\ dance \` , `\ horny \` , `\ howgay \` , `\ hug \` \n `\ kill \` , `\ kiss \` , `\ match \` , `\ pet \` , `\ simp \` , `\ slap \` \n `\ spank \` , `\ yaoi \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);

			const bot = new MessageEmbed()
			.setTitle("Bot commands commands!")
			.setDescription("Basic bot related commands")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			  {name: `\u200B`, value: "`\ invite \` , `\ ping \` , `\ stats \` , `\ suggest \` \n `\ bugreport \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);

			const economy = new MessageEmbed()
			.setTitle("Economy commands!")
			.setDescription("Elina economy commands \n To get more information about elina's economy commands do `\ /help-eco \` then click the respective buttons to get per command information")
			.setAuthor(`${interaction.user.username}`, avatar)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);

			const fun = new MessageEmbed()
			.setTitle("Fun commands!")
			.setDescription("Fun commands to add new twist to your server")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			  {name: `\u200B`, value: "`\ 8ball \` , `\ coinflip \` , `\ connectfour \` , `\ eject \` \n `\ pokemon \` , `\ rps \` , `\ slots \` , `\ snake \` , `\ trivia \` \n `\ tic-tac-toe \` , `\ aki \` , `\ wyr \` , `\ qr \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);
	
			const info = new MessageEmbed()
			.setTitle("Info command!")
			.setDescription("Info commands to get information about different stuff !")
			.setAuthor(`${interaction.user.tag}`, avatar )
			.addFields(
			  {name: `\u200B`, value: "`\ anime \` , `\ chatbot \` , `\ covid \` , `\ credits \` \n `\ github \` , `\ poll \` , `\ weather \` , `\ whois \` \n `\ worldclock \` , `\ avatar \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(client.user.displayAvatarURL({
				dynamic: true,
			  }))
			.setColor(color);
	
			const genEmbed = new MessageEmbed()
			.setTitle(`Genshin Impact - Commands`) 
			.setDescription("Genshin impact game stats related commands")
			.addFields(
			  { name: `Artifacts`, value: "`\ gen-artifact \`"},
			  { name: `Characters`, value: "`\ gen-character \`"},
			  { name: `Elements`, value: "`\ gen-elements \`"}, 
			  { name: `Nations`, value: "`\ gen-nations \`"},
			  { name: `Weapons`, value: "`\ gen-weapons \`"},
			)
			.setThumbnail(client.user.displayAvatarURL({
			  dynamic: true,
			}))
			.setFooter("For any questions or suggestions, join our support server")

			const embed = new MessageEmbed()
			.setTitle("Our full help menu!")
			.setDescription(
			  `\`\`\`js\nPrefix: Slash command \nExtra information: <> If you see any error or any kind of bug please report to us!\`\`\`\n> To invite me : [Invite me](https://discord.com/api/oauth2/authorize?client_id=842397001954230303&permissions=1515552374487&scope=bot%20applications.commands)\n\n> To check out a category, use \` /help \``
			)
			.addFields(categories)
			.setFooter(`Requested by ${interaction.user.tag}`,interaction.user.displayAvatarURL({dynamic: true,}))
			.setTimestamp()
			.setThumbnail(client.user.displayAvatarURL({dynamic: true,}))
			.setColor(color);
		
			await interaction.reply({ embeds: [embed], components: [row] });

			const filter = inter=> inter.user.id === interaction.user.id;
			const collector = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });
                
			collector.on('collect', async interaction => {
				if (interaction.customId === 'main') {
					if(interaction.values[0] === 'first_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [affection]})
					}
					if(interaction.values[0] === 'second_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [bot]})
					}
					if(interaction.values[0] === 'third_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [economy]})
					}
					if(interaction.values[0] === 'fourth_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [fun]})
					}
					if(interaction.values[0] === 'fifth_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [info]})
					}
					if(interaction.values[0] === 'sixth_option') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [genEmbed]})
					}
				}
			});

			setTimeout(function () {
				row.components[0].setDisabled(true);
				interaction.editReply({ embeds: [embed], components: [row] })
				}, 50000);
	},
};