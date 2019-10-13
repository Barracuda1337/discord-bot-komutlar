const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar "/" ile baslar
        • Eglence Komutlari		
• /kaccm       :: Kac Cm Oldunu Yazar.
• /adana       :: Adana Usülü Tost Yersiniz.
• /urfa        :: Urfa Yersiniz.
• /beşiktaş    :: Avatarınıza Beşiktas Logosu Ekler.
• /receptayyip :: Avatarınıza Recep Tayyip Erdoğan Ekler.
• /cayic       :: Çayicersiniz.
• /wasted      :: Profilinize GTA5 Wasted Ekler.
• /rresim      :: Rastgele Hoş Resimler Atar.
        • Bilgi Komutlari		
• /istatistik      :: Bot Istatistiligini Gosterir.
• /sunucubilgi     :: Sunucu Bilgisini Gosterir.
• /yapimci         :: Bot Yapimcisini Gosterir.
• /davet           :: Davet Link Verir.
		• Moderasyon Komutlari		
• /anket   :: Anket Acar		
• /ban     :: İstediğiniz kişiyi sunucudan yasaklar.
• /kick    :: İstediğiniz kişiyi sunucudan atar.
• /sustur  :: İstediğiniz kişiyi susturur.
• /temizle :: Mesajları siler.
        • Minecraft Komutlari	
• /mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
        •  Genel	
• /yardım      :: Tüm komutları listeler.
• /ping        :: Botun pingini gösterir.
• /avatarım    :: Avatarini Gosterir
    Sayfa 1 / 1 | Yapımcım: /yapimci `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yardım'
};