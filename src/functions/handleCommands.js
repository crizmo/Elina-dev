const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const clientId = '919629566186770482';
const guildId = '912028400154206288';

module.exports = (client) => {
    client.handleCommands = async (slashcommandFolders, path) => {
        client.commandArray = [];
        for (folder of slashcommandFolders) {
            const slashcommandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of slashcommandFiles) {
                const slashcommand = require(`../slash/${folder}/${file}`);
                client.slashcommands.set(slashcommand.data.name, slashcommand);
                client.commandArray.push(slashcommand.data.toJSON());
            }
        }

        const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    // Routes.applicationGuildCommands(clientId, guildId),    // ,guildId remove to make global
                    Routes.applicationCommands(clientId),
                    { body: client.commandArray },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    };
};