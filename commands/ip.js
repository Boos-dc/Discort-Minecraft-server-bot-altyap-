const { MessageEmbed } = require('discord.js');

const { sunucuIP, sunucuAdı, footer } = require("../config.json");

module.exports = {

    name: "ip",

    alias: ["adres"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed()

            .setTitle(`${sunucuAdı} | Giriş Bilgileri`)

            .setColor("#3498DB")

            .setDescription(`🎮 Sunucu IP Adresimiz:\n**${sunucuIP}**`)

            .setFooter({ text: footer });

        return message.reply({ embeds: [embed] });

    }

};