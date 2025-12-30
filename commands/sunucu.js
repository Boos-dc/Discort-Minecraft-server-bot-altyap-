const { MessageEmbed } = require('discord.js');

const { footer } = require("../config.json");

module.exports = {

    name: "sunucu",

    alias: ["sunucubilgi"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed()

            .setTitle(`${message.guild.name} Sunucu Bilgileri`)

            .setColor("#9B59B6")

            .addFields(

                { name: '👤 Üye Sayısı', value: `${message.guild.memberCount}`, inline: true },

                { name: '📅 Kuruluş Tarihi', value: message.guild.createdAt.toLocaleDateString('tr-TR'), inline: true }

            )

            .setFooter({ text: footer });

        return message.reply({ embeds: [embed] });

    }

};