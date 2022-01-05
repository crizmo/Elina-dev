const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["with"],
  permissions: ["SEND_MESSAGES"],
  description: "withdraw coins from your bank",
  async execute(client, message, args, Discord, profileData, cmd) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of yen to withdraw`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`You withdrew ${amount} of ¥ from your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};
