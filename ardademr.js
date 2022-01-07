const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const moment = require("moment");
const app = express();

const fs = require("fs");
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Plus Kayıt Botu");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`Plus Kayıt Botu Aktif`);
});

client.login(process.env.TOKEN);
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı


//------------------OTOMESAJ
client.on('guildMemberAdd', async member  => {
  if(member.guild.id!="789564565296775200") return false;
 let member2 = member.user 
 let zaman = new Date().getTime() - member2.createdAt.getTime()
 var user = member2 
 var ardademrzaman = [];
 if(zaman < 172800000) {
 ardademrzaman = `Hesap Yeni Açılmış`
 } else {
 ardademrzaman = `Hesap Yeni Açılmamış`}require("moment-duration-format");
   let zaman1 = new Date().getTime() - user.createdAt.getTime()
   const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    const ardademrembed = new Discord.MessageEmbed()
    .setColor('#efff00')
     .setDescription(`**Hoş Geldin:** ${member}\n**Discord'a Kayıt Olma Süresi:** ${gecen}\n**Hesap Yeni Mi?:** ${ardademrzaman}\n\nSunucumuza kayıt olmak için gerçek ismini yaz ve bekle.`)
 client.channels.cache.get('823617047991943258').send(ardademrembed)
   
           });


//------------------OTOROL
client.on('guildMemberAdd', member => {
var role = member.guild.roles.cache.find(role => role.name == "Kayıt Bekleniyor")
member.roles.add(role);
});
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı