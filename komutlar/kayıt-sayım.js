const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
    if(message.guild.id !== "789564565296775200") return message.channel.send(`Bu komut bu sunucuda çalışmaz.`) // Bu bölümü istemiyorsanız silebilirsiniz.
	if(!message.member.roles.cache.find(x => x.name== "Moderatör")) return message.channel.send(`Yeterli izne sahip değilsin.`)
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
let kayıt = db.fetch(`kayıt_${message.author.id}${message.guild.id}`)
if (kayıt === null) kayıt = 0 || "Hiç Kayıt Yapmamışsın";
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
var embed = new Discord.MessageEmbed()
  .setDescription(`**Yaptığın kayıt sayısı: ${kayıt}**`)
  .setColor("#ffc700")
  message.channel.send(embed)
}
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-log'
};