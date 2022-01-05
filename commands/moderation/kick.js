module.exports = {
  name: 'kick',
  permissions: ["ADMINISTRATOR"],
  description: "description of kick command!",
  async execute(client, message, args, Discord){
      const member = message.mentions.users.first();
      if (!member) return message.channel.send("Please mention a user!");
      const memberTarget = message.guild.members.cache.get(member.id);

      if(member == message.member)
      {
          return message.channel.send("You cannot kick yourself");
      }
      if(message.guild.me.permissions.has("KICK_MEMBERS"))
      {
        if(member)
        {
          if(memberTarget.kickable)
          { 
            memberTarget.kick();
          }
          else return message.channel.send('I cant kick this kid')
          message.channel.send("User has been kicked");
        }else{
          message.channel.send('Please mention a user who you want to kick');
        }
      }
      else{
        message.channel.send("I dont have required permissions");
      }
  }
}