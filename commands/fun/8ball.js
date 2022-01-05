module.exports = {
    name: '8ball',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "8ball command",
    execute(client, message, args, Discord) {
  
      let question = args[0]
  
      if (!question) {
        message.channel.send("You will have to enter your question next to the command!")
      }
  
      else {
  
        let responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]
  
        let response = Math.floor(Math.random() * responses.length)
  
        message.reply(responses[response])
  
      }
    }
  }