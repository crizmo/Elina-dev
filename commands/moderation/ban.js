module.exports = {
  name: 'ban',
  permissions: ["ADMINISTRATOR"],
  description: "description of ban command!",
  async execute(client, message, args, Discord){
      const member = message.mentions.users.first();
      if (!member) return message.channel.send("Please mention a user!");
      const memberTarget = message.guild.members.cache.get(member.id);

      if(member == message.member)
      {
          return message.channel.send("You cannot ban yourself");
      }
      if(message.guild.me.permissions.has("BAN_MEMBERS"))
      {
        if(member)
        {
          if(memberTarget.bannable)
          {
            memberTarget.ban();
          }
          else return message.channel.send('I cant ban this kid')
          message.channel.send("User has been banned");
        }else{
          message.channel.send('Please mention a user who you want to ban');
        }
      }
      else{
        message.channel.send("I dont have required permissions");
      }
  }
}