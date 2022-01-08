module.exports = {
    name: 'chatbot',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Elina chat bot')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('Hi there')
        .addFields(
            {name: 'Chat bot setup', value: "Elina's chat bot feature is one of the most epik commands. To setup the chat bot, First make a channel named `\ chatbot \` , just a reminder remember to give the bot required perms to send message in the channel or it wont work. Then start by saying hey . All done , enjoy."},
        )
        .setThumbnail("https://images-ext-2.discordapp.net/external/jZAnWyuLX4W7W_deAuwHfsxU1p7Q7uHm9F4XzMtz4ZA/https/images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%253Fsize%253D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fea40f3-2167-469b-ba09-d37ab9b52997/dc9p8id-b0dcbedb-503d-4241-99ef-0a2da991e80f.png/v1/fill/w_1192,h_670,q_70,strp/menhera_chan___1_by_archkey_dc9p8id-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmZlYTQwZjMtMjE2Ny00NjliLWJhMDktZDM3YWI5YjUyOTk3XC9kYzlwOGlkLWIwZGNiZWRiLTUwM2QtNDI0MS05OWVmLTBhMmRhOTkxZTgwZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5Vk7JdmWdX0qeyvX-02MMrP_sMT1raoZwT7u5Byp96o")
        .setFooter('Hope you enjoy the chat-bot command');

        message.channel.send({embeds: [newEmbed]})
    }
}