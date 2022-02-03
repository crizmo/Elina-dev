const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
let color = "#00ccff";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('genshin')
		.setDescription('Gneshin impact stats command info!'),
	async execute(interaction, client) {

		const user = interaction.user
        let avatar = user.displayAvatarURL()

		const row = new MessageActionRow().addComponents(
				new MessageSelectMenu()
					.setCustomId('main')
					.setPlaceholder('Genshin commands')
					.addOptions([
						{
							label: 'Artifacts stats',
							description: 'To get more info of artifacts',
							value: 'arti',
						},
						{
							label: 'Character stats',
							description: 'To get more info of characters',
							value: 'char',
						},
						{
							label: 'Elements stats',
							description: 'To get more info of elements',
							value: 'element',
						},
						{
							label: 'Nations stats',
							description: 'To get more info of nations',
							value: 'nat',
						},
						{
							label: 'Weapons commands',
							description: 'To get more info of weapons',
							value: 'weapon',
						},
						{
							label: 'Genshin commands',
							description: 'To get more info of genshin commands',
							value: 'gen',
						}
					]),
			)

            const artiInfo = "Artifacts affect a lot of character stats including healing bonuses, damage output. HP, and critical hits so you want to select which artifact you equip wisely. There are also five different types of artifacts that fall into sets, giving you even better perks from equipping artifacts in the same set."
			const elements = "`\ anemo \` `\ cryo \` `\ dendro \` `\ electro \` `\ geo \` `\ hydro \` \n`\ pyro \`"
        	const natname = "`\ inazuma \` `\ liyue \` `\ mondstadt \`"

			const artifacts = new MessageEmbed()
			.setTitle("Artifacts Stats!")
			.setDescription(`${artiInfo}`)
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			    {name: `Usage`, value: "`\ /gen-artifact {artifact_name} \`"},
				{name: `> Artifacts`, value: "For artifacts names , please visit the link: [Artifacts](https://github.com/genshindev/api/tree/mistress/assets/data/artifacts)"},
                {name: `> Remember`, value: "If a artifact name has `\ space \` in them replace it with `\ - \`"},
			)
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/928964810761191474/937905218518130688/unknown.png?width=524&height=342")
			.setThumbnail("https://images-ext-1.discordapp.net/external/vfyHjOrUUkLx7c4RcIiCpwLQQf7U0rvrAyut_VQgV1o/https/api.genshin.dev/artifacts/pale-flame/flower-of-life.png?width=253&height=253")
			.setColor(color);

			const character = new MessageEmbed()
			.setTitle("Character Stats!")
			.setDescription("To get information about characters")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			    {name: `Usage`, value: "`\ /gen-character {character_name} \`"},
				{name: `> Characters`, value: "For character names , please visit the link: [Characters](https://github.com/genshindev/api/tree/mistress/assets/data/characters)"},
                {name: `> Remember`, value: "If a character name has `\ space \` in them replace it with `\ - \` \nFor e.g : yun-jin"},
			)
			.setTimestamp()
			.setThumbnail("https://images-ext-2.discordapp.net/external/uDHNDnT5GAnrp_7C2Cmi5BrjPnAGdsX9mC5yKWZB-fE/https/api.genshin.dev/characters/xiao/icon.png?width=105&height=105")
			.setColor(color);

            const elInfo = "The elements in Genshin Impact are: Pyro (fire), Geo (earth), Dendro (nature), Cryo (ice), Electro (lightning), Anemo (wind), and Hydro (water). ... In battle, Genshin Impact elements combine to create powerful elemental reactions which you can use to devastate your foes."

			const element = new MessageEmbed()
			.setTitle("Element Stats!")
			.setDescription(`${elInfo}`)
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			    {name: `Usage`, value: "`\ /gen-element {Element_name} \`"},
				{name: `> Elements`, value: `${elements}`},
			)
			.setTimestamp()
            .setImage("https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/g/e/n/genshin-elemental-e9c79.jpg")
			.setThumbnail("https://images-ext-2.discordapp.net/external/5C9JAwqyZWlbX_SXVx7fzWbV8RsZmsy3-5yIDzwymnc/https/api.genshin.dev/elements/anemo/icon.png?width=63&height=63")
			.setColor(color);

            const natInfo = "Genshin Impact takes place in the world of Teyvat, and is composed of 3 major nations being Mondstadt, Liyue, Inazuma - each ruled by a god."

			const nation = new MessageEmbed()
			.setTitle("Nation Stats!")
			.setDescription(`${natInfo}`)
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			    {name: `Usage`, value: "`\ /gen-nation {Nation_name} \`"},
				{name: `> Nations`, value: `${natname}`},
			)
			.setTimestamp()
            .setImage("https://media.discordapp.net/attachments/928964810761191474/937909307633176626/unknown.png?width=363&height=228")
			.setThumbnail("https://images-ext-1.discordapp.net/external/T07RieWwi7ImP63Kb_-Q-AIosoCKf6dlXEBz-5Prs8g/https/api.genshin.dev/nations/liyue/icon.png?width=253&height=253")
			.setColor(color);

            const wpInfo = "There are five weapon types in Genshin Impact: swords, bows, polearms, claymores, and catalysts. Each type is useful for different circumstances, and each character can only utilize one of these weapon types. The effectiveness of each weapon depends on three factors. The first is the element of the weapon, the second is the element of the character, and the third is the character's level."
	
            const weapons = new MessageEmbed()
			.setTitle("Weapon Stats!")
			.setDescription(`${wpInfo}`)
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			    {name: `Usage`, value: "`\ /gen-weapon {weapon_name} \`"},
				{name: `> Weapons`, value: "For character names , please visit the link: [Weapons](https://github.com/genshindev/api/tree/mistress/assets/data/weapons)"},
                {name: `> Remember`, value: "If a weapon name has `\ space \` in them replace it with `\ - \` \nFor e.g : alley-hunter"},
			)
			.setTimestamp()
			.setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Weapon_Primordial_Jade_Winged-Spear_3D.png/revision/latest/scale-to-width-down/250?cb=20201223222833")
			.setColor(color);
	
			const genmain = new MessageEmbed()
			.setTitle(`Genshin Impact - Commands`) 
			.setDescription("Genshin impact game stats related commands\nFor names having a space in them replace it with `\ - \` \nEg: `\ pale-flame \`")
			.addFields(
			  { name: `> Artifacts`, value: "`\ gen-artifact \` To get info about artifacts"},
			  { name: `> Characters`, value: "`\ gen-character \` To get info about characters"},
			  { name: `> Elements`, value: "`\ gen-elements \` To get info about elements"}, 
			  { name: `> Nations`, value: "`\ gen-nations \` To get info about nations"},
			  { name: `> Weapons`, value: "`\ gen-weapons \` To get info about weapons"},
			)
			.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
			.setFooter("For any bugs / suggestions, join our support server")
		
			await interaction.reply({ embeds: [genmain], components: [row] });

			const filter = inter=> inter.user.id === interaction.user.id;
			const collector = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });
                
			collector.on('collect', async interaction => {
				if (interaction.customId === 'main') {
					if(interaction.values[0] === 'arti') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [artifacts]})
					}
					if(interaction.values[0] === 'char') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [character]})
					}
					if(interaction.values[0] === 'element') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [element]})
					}
					if(interaction.values[0] === 'nat') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [nation]})
					}
					if(interaction.values[0] === 'weapon') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [weapons]})
					}
					if(interaction.values[0] === 'gen') {
						await interaction.deferUpdate();
						await interaction.editReply({components: [row] , embeds: [genmain]})
					}
				}
			});

			setTimeout(function () {
				row.components[0].setDisabled(true);
				interaction.editReply({ embeds: [genmain], components: [row] })
				}, 50000);
	},
};