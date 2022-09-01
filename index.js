const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const Enmap = require("enmap");
const config = require("./botconfig/config.json")
const {readdirSync} = require("fs");
const { getPackedSettings } = require("http2");
client.config = require('./botconfig/config.json');
//datenbank wird erstellt
client.settings = new Enmap({ name: "settings",dataDir: "./databases/settings"});
client.on("ready",()=>{
    const stringlength = 69;
	console.log("\n")
	console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
	console.log(`     ┃ ` + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃")
	console.log(`     ┃ ` + `Discord Bot is online!` + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "┃")
	console.log(`     ┃ ` + ` /--/ ${client.user.tag} /--/ `+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃")
	console.log(`     ┃ ` + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃")
	console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
	console.log("")
	console.log(` [ONLINE] ` + `Logged in as: `+ `${client.user.tag}`);

})
client.login(config.token).then(console.log('Online!'));
client.allServers = {
	current: client.config.servers[client.currentServerIP] ? client.config.servers[client.currentServerIP] : Object.keys(client.config.servers)[0],
	least: null,
	stats: [],
}

require("./moduls/ticketsystem/main")
require("./moduls/other/import")(client)
//require("./moduls/commands")(client)
//commandhandler
client.config = require('./botconfig/config.json');
client.commands = new Discord.Collection();

const events = readdirSync('./moduls/events/').filter(file => file.endsWith('.js'));

console.log(`✅ | Lade Events`);
for (const file of events) {
    const event = require(`./moduls/events/${file}`);
    console.log(`✅ | Folgendes Event wurde geladen: ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./moduls/events/${file}`)];
};

console.log(`\n✅ | Lade Befehle`);

readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`✅ | Folgender Befehl wurde geladen ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});
//-----------------------------------------------------------
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */