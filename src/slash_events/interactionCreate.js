module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const slashcommand = client.slashcommands.get(interaction.commandName);

		if (!slashcommand) return;

		try {
			await slashcommand.execute(interaction, client);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};