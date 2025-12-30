const { MessageEmbed } = require('discord.js');
const { footer } = require("../config.json");

module.exports = {
    name: "profil",
    run: async (client, message, args) => {
        const hedef = message.mentions.members.first() || message.member;
        const embed = new MessageEmbed()
            .setTitle("👤 Oyuncu Profili")
            .setThumbnail(hedef.user.displayAvatarURL())
            .addFields(
                { name: "Kullanıcı", value: hedef.user.tag, inline: true },
                { name: "Katılım", value: hedef.joinedAt.toLocaleDateString('tr-TR'), inline: true }
            )
            .setFooter({ text: footer });
        return message.reply({ embeds: [embed] });
    }
};