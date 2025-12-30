const { MessageEmbed } = require('discord.js');
const { footer } = require("../config.json");

module.exports = {
    name: "kurallar",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle("⚖️ Sunucu Kuralları")
            .setColor("#E74C3C")
            .setDescription("1. Saygılı olun.\n2. Reklam yasaktır.\n3. Küfür yasaktır.")
            .setFooter({ text: footer });
        return message.reply({ embeds: [embed] });
    }
};
