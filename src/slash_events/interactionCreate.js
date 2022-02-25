const cooldowns = new Map()
const Discord = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const slashcommand = client.slashcommands.get(interaction.commandName);

		if (!slashcommand) return;

		try {

			if (slashcommand.permissions && slashcommand.permissions.length > 0) {
				if (!interaction.member.permissions.has(slashcommand.permissions)) return await interaction.reply({ content: "You do not have permission to use this command." });
			}

			if (!cooldowns.has(slashcommand.commandName)) {

				cooldowns.set(slashcommand.commandName, new Discord.Collection())

			}

			const currentTime = Date.now()
			const timeStamps = cooldowns.get(slashcommand.commandName)
			const cooldownAmount = (slashcommand.cooldown) * 1000

			if (timeStamps.has(interaction.user.id)) {

				const expTime = timeStamps.get(interaction.user.id) + cooldownAmount

				if (currentTime < expTime) {

					const timeLeft = (expTime - currentTime) / 1000

					const tmotEmbed = new Discord.MessageEmbed()
						.setColor("#F886F6")
						.setDescription(`❌ - Please wait \`${timeLeft.toFixed(1)}\` more seconds before using \`${interaction.commandName}\`!`)

					return interaction.reply({ embeds: [tmotEmbed] })
				}
			}

			timeStamps.set(interaction.user.id, currentTime)

			setTimeout(() => {
				timeStamps.delete(interaction.user.id)
			}, cooldownAmount)

			await slashcommand.execute(interaction, client);
		} catch (error) {
			console.error(error);
			const client = interaction.client;
			async (reason, p, origin) => {
				const err1embed = new Discord.MessageEmbed()
					.setTitle('Error Occured')
					.setColor('RANDOM')
					.setDescription('```js\n' + reason.stack + '```');
				client.channels.cache.get('917399374806536252').send({ embeds: [err1embed] })
			}

			const err2embed = new Discord.MessageEmbed()
				.setTitle('Error Occured')
				.setColor('RANDOM')
				.setDescription('```js\n' + error.stack + '```');
			client.channels.cache.get('917399374806536252').send({ embeds: [err2embed] })

			await interaction.reply({ content: 'There was an error while executing this command! \n|| Missing Channel/Server Permissions to send reply!', ephemeral: true });
		}
	},
};