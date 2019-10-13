const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kanalın Adını Yaz.!!');
  message.delete(3000);
  guild.createChannel(kanal, 'text');
  message.channel.send("**Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ykaç'],
  permLevel: 3
};

exports.help = {
  name: 'ykaç',
  description: 'Bir ses kanalı açar',
  usage: 'ykaç [açmak istediğiniz kanalın adı]'
};