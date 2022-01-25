module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const slashcommand = client.slashcommands.get(interaction.commandName);

		if (!slashcommand) return;

		try {

			if(slashcommand.permissions && slashcommand.permissions.length > 0){
				if(!interaction.member.permissions.has(slashcommand.permissions)) return await interaction.reply({ content: "You do not have permission to use this command."});
			}

			await slashcommand.execute(interaction, client);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};