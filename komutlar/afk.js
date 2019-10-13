const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: message.author.avatarURL
                  },
                description:  "**Artik Afksin  :white_check_mark:**"
              }});
  message.react("✅")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Değişiklikleri gösterir.',
  usage: 'afk'
};
