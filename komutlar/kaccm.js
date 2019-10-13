const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "Senin :eggplant: " + Math.floor(Math.random()* 30 + 1) + "CM"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kaccm',
  description: 'kedileri gösterir.',
  usage: 'kaccm'
};