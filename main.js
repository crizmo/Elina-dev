const { Client, Intents } = require('discord.js');

const Discord = require('discord.js');

const client = new Client({ intents: 32767});

require('dotenv').config();

const mongoose = require("mongoose");
const { MessageEmbed } = require("discord.js");

const fs = require('fs');
require('dotenv').config();

const fetch = require('node-fetch')

const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
// Method:
cs.setMongoURL(process.env.MONGODB_SRV);

// Wallet & Bank Setup
cs.setDefaultWalletAmount('100')
cs.setDefaultBankAmount('100')
// cs.setMaxWalletAmount('10000')
// cs.setMaxBankAmount('10000')
cs.searchForNewUpdate(true)
//    End    //

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const { Snake } = require('discord-gamecord');

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      client.commands.set(command.name.toLowerCase(), command);
    };
});

// fs.readdirSync('./commands/genshin').forEach(dirs => {
//     const commands = fs.readdirSync(`./commands/genshin/${dirs}`).filter(files => files.endsWith('.js'));
//     for (const file of commands) {
//       const command = require(`./commands/genshin/${dirs}/${file}`);
//       client.commands.set(command.name.toLowerCase(), command);
//     };
// });

fs.readdirSync('./direct_help').forEach(dirs => {
    const direct_helps = fs.readdirSync(`./direct_help/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of direct_helps) {
      const direct_help = require(`./direct_help/${dirs}/${file}`);
      client.commands.set(direct_help.name.toLowerCase(), direct_help);
    };
});

client.on("messageCreate", async (message)=>{
    
    if(message.author.bot) return
    if(message.channel.name === 'chatbot') {
        fetch.default(`https://api.affiliateplus.xyz/api/chatbot?message=${message.content}&botname=Elina&ownername=Criz&favoritesong=Moodswings&favoriteshow=The+Big+Bang+theory&favoriteactor=Leonardo+DiCaprio&favoritemovie=Catch+me+if+you+can&age=19&birthplace=Japan&religion=Nill&state=Hokkaidō&user=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            if (data.message) message.channel.send({content: data.message}).catch(error)
        }).catch((error)=>{
            error;
        })
        .catch(() => {
            message.channel.send("Coundn't fetch response!");
        })
    }
})

client.on('ready', () => {
    console.log('Status is ready!');
    client.user.setStatus('idle');
    let index = 0;
    setInterval(() => {
      const arrayOfStatus = [
        `${client.guilds.cache.size} servers`,
        `${client.channels.cache.size} channels`,
        `${client.users.cache.size} users`,
        `Prefix: '='`
        ];
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        //console.log(status);
        client.user.setActivity(status, { type: "WATCHING"})
        index++;
    }, 5000);
})
//If you are hosting your bot anywhere just remove code from line 53 -> 70 

require(`./handlers/command_handler.js`)(client, Discord);
require(`./handlers/event_handler.js`)(client, Discord);

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to the database!')
}).catch((err) => {
    console.log(err);
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

// process.on('unhandledRejection' , async (reason , p , origin) => {
//     const embed = new Discord.MessageEmbed()
//     .setTitle('Error Occured')
//     .setColor('RANDOM')
//     .setDescription('```js\n' + reason.stack + '```');
//     client.channels.cache.get('917389482532159528').send({embeds: [embed]})
// });
  
// process.on('uncaughtExceptionMonitor' , async (err,origin) => {
//     const embed = new Discord.MessageEmbed()
//     .setTitle('Error Occured')
//     .setColor('RANDOM')
//     .setDescription('```js\n' + err.stack + '```');
//     client.channels.cache.get('917389482532159528').send({embeds: [embed]})
// });

console.log(response.data);

client.login(process.env.DISCORD_TOKEN);