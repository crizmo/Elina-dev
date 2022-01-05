const Discord = require('discord.js');
const api = require('covidapi')
const fetch = require('node-fetch');

module.exports = {
    name: "covid",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "covid!",
    execute(client, message, args, Discord, cmd){

        let countries = args.join(" ");
        
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Invalid Command Usage')
        .setColor(0xFF0000)
        .setDescription('You Can Try Using **=covid all** or **=covid Canada**')
		
        if (!args[0]) return message.channel.send({embeds: [noArgs]});

        if(args[0] === "all"){
        
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
              	
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                
                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send({embeds: [embed]})
            })

        } else {
          	
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              	
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                
                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send({embeds: [embed]})
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
    }
}
