const { MessageEmbed } = require('discord.js');
const { sunucuAdı, webSitesi, footer } = require("../config.json");

module.exports = {
    name: "yardım",
    alias: ["help"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${sunucuAdı} | Yardım`)
            .setColor("#F1C40F")
            .setDescription(`🌐 Site: ${webSitesi}\n\n**Komutlar:** !profil, !sunucu, !kurallar, !ping`)
            .setFooter({ text: footer });
        return message.reply({ embeds: [embed] });
    }
};