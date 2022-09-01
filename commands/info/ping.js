const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
    category:"Info",

    execute(client, message, args) {
      
        const start = Date.now();
          
            const embed = new MessageEmbed()
              
                .setColor('GREEN')
                .setTitle("<a:Chat:993176850983559219> | MEIN DISCORD-BOT PING | <a:Chat:993176850983559219>")
                .setThumbnail("https://media.discordapp.net/attachments/967064725575852105/979364845147271178/709388.png")
                .addField(`\`💭\` › Nachrichten Ping:`, `\`${Date.now() - start}ms\``)
                .addField(`\`📡\` › Nachricht Latency:`, `\`${message.createdTimestamp - start}ms\``)
                .addField(`\`🛰\` › API Latency:`, `\`${Math.round(client.ws.ping)}ms\``)
                .setTimestamp()
                .setFooter({ text: `› Angefordert von: ${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true }) });
          
            message.reply({ embeds: [embed] });
          
    },
};
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */