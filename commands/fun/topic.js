const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "topic",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "Start a new topic",

    async execute(client, message, args, Discord, cmd){
        
        const choices = [ 

            "Which makes a better pet? Cats or dogs?",
            "What is the best way to get a dog to stop biting you?",
            "Would you rather be really big or really small?",
            "Homework should be banned. ...",
            "Mcdonald's is the best fast food restaurant. ...",
            "Summer is better than winter. ...",
            "Would you like to live forever?",
            "Children under 16 should be allowed to vote. Agree or disagree?",
            "Would you rather be a cat or a dog?",
            "Children shouldnt be allowed cell phones until they are over 18. Agree or disagree?",
            "Whats the best pizza toping?",
            "Whats more important? Being good looking or being smart?",
            "Clowns are scary. Agree or disagree?",
            "Math is an important subject to learn. Agree or disagree?",
            "Would you rather be good at sports or good at exams?",
            "What makes a person beautiful to you?",
            "Where is the most beautiful place you have been?",
            "What is the best thing about you?",
            "What is the worst thing about you?",
            "What is your favorite food?",
            "What is your favorite drink?",
            "What is your favorite color?",
            "What makes a piece of art beautiful to you?",
            "What is the most challenging job you can think of?",
            "What is the most important thing you have ever done?",
            "What is the most important thing you have ever wanted?",
            "What do you think of homemade gifts?",
            "What is the most expensive thing you have ever bought?",
            "Do you prefer to receive money or a gift? Why?"]


        const choice = choices[Math.floor(Math.random() * choices.length)];

        let TopicEmbed = new MessageEmbed()

        .setTitle("New topic!")
        .setDescription(`${choice}`)
        .setColor("RANDOM")
        .setFooter("Topic started by " + message.author.tag)

        message.channel.send({embeds: [TopicEmbed]})

    }
}