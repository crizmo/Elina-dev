// Rename main.js to index.js

const { Client, Intents, Collection} = require('discord.js');

const Discord = require('discord.js');

const client = new Client({ intents: 32767});

require('dotenv').config();

const mongoose = require("mongoose");
const { MessageEmbed } = require("discord.js");

const fs = require('fs');
require('dotenv').config();
// const keepAlive = require("./server");        // un-comment this line - for hosting

const fetch = require('node-fetch')

const music = require('@koenie06/discord.js-music');

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

// Teyvat start

// const Tey = require("@teyvatdev/node-sdk");
// const tey = new Tey.default(process.env.TEYTOKEN);
// const { default: Teyvat } = require('@teyvatdev/node-sdk');
// tey.on('ready', (ret) => { if(ret) console.log('Finished startup!'); })

// Teyvat end

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const { Snake } = require('discord-gamecord');
const { mainModule } = require('process');

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      client.commands.set(command.name.toLowerCase(), command);
    };
});

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

// Slash command handler

client.slashcommands = new Discord.Collection();

const slashfunctions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const slasheventFiles = fs.readdirSync("./src/slash_events").filter(file => file.endsWith(".js"));
const slashcommandFolder = fs.readdirSync("./src/slash");
module.exports.client = client;
    
(async () => {
    for (file of slashfunctions) {
        require(`./src/functions/${file}`)(client);
    }

    client.handleEvents(slasheventFiles, "./src/slash_events");
    client.handleCommands(slashcommandFolder, "./src/slash");
})();

/* This will run when a song started playing from a playlist */
music.event.on('playList', async (channel, playlist, songInfo, requester) => {
    channel.send({
        content: `Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` of the playlist ${playlist.title}.
        This was requested by ${requester.tag} (${requester.id})`
    });
});

/* This will run when a new playlist has been added to the queue */
music.event.on('addList', async (channel, playlist, requester) => {
    channel.send({
        content: `Added the playlist [${playlist.title}](${playlist.url}) with ${playlist.videos.length} amount of videos to the queue.
        Added by ${requester.tag} (${requester.id})`
    });
});

// keepAlive();                                         // uncomment for hosting your bot
client.login(process.env.DISCORD_TOKEN);