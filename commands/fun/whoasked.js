module.exports = {
    name: "whoasked",
    permissions: ["SEND_MESSAGES"],
    description: "test command",

    execute(client, message, args, Discord) {
        let member = message.mentions.members.first();
        let firstEmbed
        if(member){
            firstEmbed = new Discord.MessageEmbed()
            .setDescription(`**${member.displayName}**, Elina is searching for who asked!
            Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            message.channel.send({embeds: [firstEmbed]})
        }else{
            firstEmbed = new Discord.MessageEmbed()
            .setDescription(`Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            message.channel.send({embeds: [firstEmbed]})

        }
    }
}
