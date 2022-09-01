const Discord = require("discord.js");
const config = require("../../botconfig/config.json")
module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    category:"Sonstige",

    execute(client, message, args) {
        if(message.member.permissions.has("MANAGE_CHANNELS") && !config.owner.includes(message.author.id)) return message.reply({content: "<a:no_emoji_gif:993164000198139934> | di fehlt die Berechtigung  \`MANAGE_CHANNELS\`"});
        let messages = message.content.split(" ").slice(1).join("");
        if(!messages) return message.reply({content: "<a:no_emoji_gif:993164000198139934> | Du hast keine zahl angegeben"});
    
        if(isNaN(messages)) return message.reply({content:"<a:LC_checkyes:993164094519648256> | Du hast keine Zahl angegeben, sonder Buchstaben."}).then(msg=>msg.delete({timeout:"50000"}));
        
        message.channel.bulkDelete(messages);
    
        message.channel.send({content:"<a:LC_checkyes:993164094519648256> |  " + messages + " Nachrichten wurden gelöscht gelöscht."}).then(msg=>msg.delete({timeout:"50000"}));
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */