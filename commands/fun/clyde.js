//https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;%20;-1]
const Discord = require('discord.js');
module.exports = {
    name: 'clyde',
    aliases: [],
    utilisation: '{prefix}snake',
    category:"Fun",

    execute(client, message, args) {
        const clydemsg = message.content.split(" ").slice(1).join("").replace(" ","%20")
        if(!clydemsg) return message.reply({content:"du hast nichts angegeben"})

        const embed = new Discord.MessageEmbed().setImage("https://ctk-api.herokuapp.com/clyde/"+clydemsg)
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