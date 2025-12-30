const { MessageEmbed } = require('discord.js');

module.exports = {

    name: "ping",

    alias: ["gecikme", "ms"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed()

            .setColor("#2ECC71")

            .setDescription(`🏓 **Pong!**\n\nBot Gecikmesi: **${client.ws.ping}ms**`)

            .setTimestamp();

        return message.reply({ embeds: [embed] });

    }

};
