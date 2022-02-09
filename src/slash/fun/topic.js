const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('topic')
		.setDescription('Start a new topic in the server'),
        
	async execute(interaction, client) {

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
            "Do you prefer to receive money or a gift? Why?",
            "What part of your culture are you most/least proud of?",
            "What would you do if you were invisible for a day?",
            "What is that myth that you grew up knowing but found out recently that is a lie?",
            "What was the strangest punishment your parents ever gave you?",
            "If you had the opportunity to invent a new ice-cream flavor, what would it be?",
            "What music genre makes you happy?",
            "Do you like your cereal crunchy or soggy?",
            "Complete the sentence “I wish everyone could…”" ]

        const choice = choices[Math.floor(Math.random() * choices.length)];

        const TopicEmbed = new MessageEmbed()
        .setTitle("New Topic !")
        .setDescription(`${choice}`)
        .setColor("RANDOM")
        .setFooter("Topic started by " + interaction.user.username)

        await interaction.reply({embeds: [TopicEmbed]});
	},  
};