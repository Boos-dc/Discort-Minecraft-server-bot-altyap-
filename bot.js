const { Client, Collection, Intents } = require('discord.js');

const { readdirSync } = require('fs');

const { prefix, token, sunucuAdı } = require("./config.json");

const client = new Client({ 

    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGE_CONTENT, Intents.FLAGS.GUILD_MEMBERS] 

});

client.commands = new Collection();

client.alias = new Collection();

const commandFiles = readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const pull = require(`./commands/${file}`);

    if (pull.name) {

        client.commands.set(pull.name, pull);

        if (pull.alias) pull.alias.forEach(a => client.alias.set(a, pull));

    }

}

client.on('ready', () => {

    console.log(`✅ ${client.commands.size} komut yüklendi!`);

    console.log(`🚀 ${sunucuAdı} Botu Aktif!`);

    client.user.setActivity(sunucuAdı, { type: "WATCHING" }); 

});

client.on('messageCreate', async (message) => {

    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.alias.get(commandName);

    if (command) {

        try { await command.run(client, message, args); } catch (e) { console.log(e); }

    }

});

client.login(token);