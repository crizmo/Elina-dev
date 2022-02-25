module.exports = {
    name: "test",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "Testing cmd command",

    async execute(client, message, args, Discord) {

        if (message.author.id !== '784141856426033233') return message.channel.send("Only Criz can use this command");

        const guilds = client.guilds.cache.array();

        for (const guild of guilds) {
            cs.setItems({
                guild: guild,
                shop: [{
                    name: 'banknote',
                    price: 5000,
                    description: 'Banknote to increase bank limit'
                }, {
                    name: 'primogems',
                    price: 2500,
                    description: 'Primogems ps- genshin impact currency'
                }]
            });
        }
        return message.channel.send('Elina shop items set.');
    }
}