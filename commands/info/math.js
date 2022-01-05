module.exports = {
    name: "math",
    cooldown: 2,
    aliases: ["maths"],
    permissions: ["SEND_MESSAGES"],
    description: "performs simple math functions",
    execute(client, message, args, Discord) {
      let op = args[0]
      let no1 = args[1]
      let no2 = args[2]
  
      let parseNo1 = parseInt(no1)
      let parseNo2 = parseInt(no2)
  
      let ans
  
      if (!op) {
        message.reply("You need to enter the operation and operands next to the command as follow: add | sub | mult | divide | mod | pow | root`")
      }
  
      else {
        if (op === "add") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math add 1 2\`")
          }
          else {
            ans = parseNo1 + parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "sub") {
        if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math sub 1 2\`")
          }
          else {
            ans = parseNo1 - parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "mult") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math mult 1 2\`")
          }
          else {
            ans = parseNo1 * parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "divide") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math divide 1 2\`")
          }
          else {
            ans = parseNo1 / parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "mod") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math mod 1 2\`")
          }
          else {
            ans = parseNo1 % parseNo2
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "pow") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math pow 1 2\`")
          }
          else {
            ans = Math.pow(parseNo1, parseNo2)
            message.channel.send("You answer is " + ans)
          }
        }
        else if (op === "root") {
          if (!args[1] || !args[2]) {
            message.reply("You need to enter the operation and operands next to the command as follow: \`=math root 1 2\`")
          }
          else {
            ans = Math.pow(parseNo1, 1/parseNo2)
            message.channel.send("You answer is " + ans)
          }
        }
      }
    }
  }