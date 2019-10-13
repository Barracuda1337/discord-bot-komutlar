const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const gay = bot.emojis.find(emoji => emoji.name === "gay");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', '♨️ Bot Commanders')) return message.channel.send('Bu Komutu Kullanabilmek İçin `♨️ Bot Commanders` Rolüne Sahip Olmanız Gerekiyor');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Kime `୪ | Ambassador Rolünü ` Vermek İstersin?**");
  user.addRole('609556178539773963')
  
  message.react(gay)
} 
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['tagkız', 'TagKız', 'TAGKIZ', 'Ekipkız', 'EKİPKIZ', 'ekipkız'],
    permLevel: 0
}
exports.help = {
    name: 'test',
    description: 'test',
    usage: 'test'
}
