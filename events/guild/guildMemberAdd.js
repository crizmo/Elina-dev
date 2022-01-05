const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member, message) => {

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: member.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }
};