//https://vacefron.nl/api/grave?user=
const Discord = require('discord.js');
module.exports = {
    name: 'rip',
    aliases: [],
    utilisation: '{prefix}snake',
    category:"Fun",

    execute(client, message, args) {
        const mention = message.mentions.members.first();
        if(!mention) return message.reply({content:"du hast nichts angegeben"})
        const icon = mention.avatarURL()

        const embed = new Discord.MessageEmbed().setImage("https://vacefron.nl/api/grave?user="+icon+".png")
        message.reply({embeds:[embed]})
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */