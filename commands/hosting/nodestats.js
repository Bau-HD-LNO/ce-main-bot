const Discord = require("discord.js");
module.exports = {
    name: 'nodestats',
    aliases: [],
    utilisation: '{prefix}nodestats',
    category:"Sonstige",

    execute(client, message, args) {
const online = "<:greenpoint:996851468348960779>";
const offline = "<:Redpoint_ce:996851472404844625> ";
const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor("Chill-Ecke | Nodestats", message.guild.iconURL({ dynamic: true }), "https://chilllecke.de")
    client.allServers.stats.forEach(async stat => {
        embed.addField(`${stat.ram != 1 ? online : offline} Server **\`${stat.key}\`**`, `> Ram: \`${(stat.ram * 100).toFixed(0)}% of ${stat.totalram.split(".")[0]} ${stat.totalram.split(" ")[1]}\`\n> Cores: \`${stat.cores}\`\n> Stor: \`${Math.floor(stat.storage / stat.totalstorage * 100).toFixed(0)}% of ${formatBytes(stat.totalstorage, 0)}\``, true)
        if(stat?.key == "27") {
            embed.addFields([
                {name: `${stat.ram != 1 ? online : offline} Server **\`b7\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(0)}% of ${stat.totalram.split(".")[0]} ${stat.totalram.split(" ")[1]}\`\n> Hosting Bots: \`${stat.bots}\`\n> Cores: \`${stat.cores}\`\n> Stor: \`${Math.floor(stat.storage / stat.totalstorage * 100).toFixed(0)}% of ${formatBytes(stat.totalstorage, 0)}\``, inline: true},
                {name: `${stat.ram != 1 ? online : offline} Server **\`1b7\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(0)}% of ${stat.totalram.split(".")[0]} ${stat.totalram.split(" ")[1]}\`\n> Hosting Bots: \`${stat.bots}\`\n> Cores: \`${stat.cores}\`\n> Stor: \`${Math.floor(stat.storage / stat.totalstorage * 100).toFixed(0)}% of ${formatBytes(stat.totalstorage, 0)}\``, inline: true},
                {name: `${stat.ram != 1 ? online : offline} Server **\`2b7\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(0)}% of ${stat.totalram.split(".")[0]} ${stat.totalram.split(" ")[1]}\`\n> Hosting Bots: \`${stat.bots}\`\n> Cores: \`${stat.cores}\`\n> Stor: \`${Math.floor(stat.storage / stat.totalstorage * 100).toFixed(0)}% of ${formatBytes(stat.totalstorage, 0)}\``, inline: true},
                {name: `${stat.ram != 1 ? online : offline} Server **\`ffb7\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(0)}% of ${stat.totalram.split(".")[0]} ${stat.totalram.split(" ")[1]}\`\n> Hosting Bots: \`${stat.bots}\`\n> Cores: \`${stat.cores}\`\n> Stor: \`${Math.floor(stat.storage / stat.totalstorage * 100).toFixed(0)}% of ${formatBytes(stat.totalstorage, 0)}\``, inline: true},
            ])
        }
    })
embed.addField(`**Total Stats:**`, `\`\`\`yml\nCores: ${client.allServers.stats.reduce((a, b) => a + b.cores, 0)}\nRam: ${formatBytes(client.allServers.stats.reduce((a, b) => a + b.rawram, 0))}\nStor: ${Math.floor(client.allServers.stats.reduce((a, b) => a + b.storage, 0) / client.allServers.stats.reduce((a, b) => a + b.totalstorage, 0) * 100)}% of ${formatBytes(client.allServers.stats.reduce((a, b) => a + b.totalstorage, 0))}\n\`\`\``)

message.channel.send({
    embeds: [
        embed
    ]
});
    }}
    function formatBytes(bytes, decimals = 3) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */