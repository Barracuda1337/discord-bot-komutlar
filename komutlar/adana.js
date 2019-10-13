const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
       file:"https://resizer.piri.net/resize.aspx?w=730&h=0&url=/resim/imagecrop/2017/03/07/05/45/resized_2718b-c535f9efutuyle_tost.png",
           color: 0xD97634,
       description: "**Afiyet, Zıkkım Olsun.**"
             }});
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adana'],
  permLevel: 0
};
exports.help = {
  name: 'adanagonder',
  description: 'Değişiklikleri gösterir.',
  usage: 'adanagonder'
};
