module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR"],
    description: "Clear command!",
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.reply('Pls enter the amount of messages that you want to clear');
        if(isNaN(args[0])) return message.reply("Pls type a number");
        
        if(args[0] > 100) return message.reply("You cannot clear more than 100 messages");
        if(args[0] < 1)return message.reply("You must delete atleast 1 message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
            .catch(() => {
                message.channel.send("You can only bulk delete messages that are under 14 days old.");
            })
        })
    }
}