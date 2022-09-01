const Discord = require('discord.js');

module.exports = {
    name: 'user',
    aliases: [],
    utilisation: '{prefix}user',
    category:"Info",

    execute(client, message, args) {
let user = message.mentions.users.first() || message.author 
if(!user) return new Discord.MessageEmbed().setThumbnail(user.avatarURL()).setColor("BLUE").setFields({value: "> "+message.author.username,name:"Username: "},
{name:"Discriminator:",value:"> "+`#${message.author.discriminator}`},
{name:"ID:",value: "> "+message.author.id.toString()},
{name:"BOT:",value: "> "+message.author.bot.toString()},
{name:"Created at:",value:"> "+message.author.createdAt});

let embed = new Discord.MessageEmbed()
.setThumbnail(user.avatarURL())
.setColor("BLUE")
.setFields({value: "> "+user.username,name:"Username: "},
{name:"Discriminator:",value:"> "+`#${user.discriminator}`},
{name:"ID:",value: "> "+user.id.toString()},
{name:"BOT:",value: "> "+user.bot.toString()},
{name:"Created at:",value:"> "+user.createdAt})

message.channel.send({embeds:[embed]});
    }
}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */