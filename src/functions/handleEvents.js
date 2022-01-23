module.exports = (client) => {
    client.handleEvents = async (slasheventFiles, path) => {
        for (const file of slasheventFiles) {
            const slashevent = require(`../slash_events/${file}`);
            if (slashevent.once) {
                client.once(slashevent.name, (...args) => slashevent.execute(...args, client));
            } else {
                client.on(slashevent.name, (...args) => slashevent.execute(...args, client));
            }
        }
    };
}