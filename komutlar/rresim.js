const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://picsum.photos/1000/500"+".jpg",
          color: 0xD97634,
		  description: "**:love_letter: Rastgele Resim !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rresim'],
  permLevel: 0
};

exports.help = {
  name: 'rresim',
  description: 'Rastgele Resim.',
  usage: 'rresim'
};
