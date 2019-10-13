const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Dosyalari Korunuyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Koruma Calisiyor.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Sunucu Aktif!`);
  client.user.setStatus("online");
  var oyun = [
        "Yaşadığın Yeri Cennet Yap ki.",
        "Kaçtığın Yerde Biz Olmayalım ",
        "Yaşadığın Yeri Cennet Yap ki.",
        "Kaçtığın Yerde Biz Olmayalım ",
        "Yaşadığın Yeri Cennet Yap ki.",
        "Kaçtığın Yerde Biz Olmayalım ",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/");
        }, 2 * 2500);
  client.user.setGame(`${prefix}yardım`);
  console.log(`Hazir Sunucuyu Baslatin...`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT HAZIR.`);
				  
				  
};