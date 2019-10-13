const Discord = require('discord.js');

exports.run = (client, message, args) => { 
              if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://cdn.glitch.com/1985d6fd-7fb9-4729-b911-baca2f171a69%2Fimage.png");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(720, 620);  
    img.resize(720, 615) 
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));        
    });
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gay', 'lgbt'],
  permLevel: 0
};

exports.help = {
  name: 'gay',
  description: 'gay',
  usage: 'gay'
};
