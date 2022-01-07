const Discord = require("discord.js");
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

    if(message.guild.id !== "789564565296775200") return message.channel.send(`Bu komut bu sunucuda çalışmaz.`) // Bu bölümü istemiyorsanız silebilirsiniz.
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
	if(!message.member.roles.cache.find(x => x.name== "Moderatör")) return message.channel.send(`Yeterli izne sahip değilsin.`)

    if(message.channel.id !== "823617047991943258") return message.channel.send("Kayıtlar sadece kayıt kanalından yapılabilir.")

    let ardademrverilecekrol = message.guild.roles.cache.find(x => x.name == "Üye")
    if (message.guild.me.roles.highest.position <= ardademrverilecekrol.position) return message.channel.send(`Bu rol benim rolümün üstünde olduğu için vermeye iznim yok.`)

    let ardademruser = message.mentions.users.first()
    let ardademrisim = args.slice(1).join(" ");
    if(!ardademruser) return message.reply('bir kullanıcı etiketlemelisin.')
    if (!ardademrisim) return message.reply(`bir isim girmelisin.`);
    if (ardademrisim.length > 13)
      return message.reply(
        `Lütfen \`13\` karakteri geçmeyecek şekilde bir isim giriniz!`
      );
// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı
	       message.channel.send(`${ardademruser} isimli kullanıcıyı kayıt ettim.`).then(msg => {
                    setTimeout(function() {
                        message.guild.members.cache.get(ardademruser.id).setNickname(`● ${ardademrisim}`);
                    }, 500);
					setTimeout(function() {
                        message.guild.member(ardademruser).roles.remove(message.guild.roles.cache.find(role=>role.name=="Kayıt Bekleniyor").id);
                    }, 1500);
					setTimeout(function() {
                        message.guild.member(ardademruser).roles.add(message.guild.roles.cache.find(role=>role.name=="Üye").id);
                    }, 2000);
		// ArdaDemr Youtube Kanalına ait KAYIT bot altyapısı			
				})
				
    db.add(`kayıt_${message.author.id}${message.guild.id}`,1)
}

exports.conf = {
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "erkek",
}