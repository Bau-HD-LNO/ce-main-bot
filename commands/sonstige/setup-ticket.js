const Discord = require("discord.js");
const config = require("../../botconfig/config.json")
module.exports = {
    name: 'setup-ticket',
    aliases: [],
    utilisation: '{prefix}setup-ticket',
    category:"Sonstige",

    execute(client, message, args) {
if(message.member.permissions.has("ADMINISTRATOR") && !config.owner.includes(message.author.id)) return;
let embed = new Discord.MessageEmbed()
.setTitle("Ticket Support")
.setDescription("Wähle eine option aus um hilfe zu erhalten")
.setColor("ORANGE")
.setFooter("Ticket System")
.setTimestamp()

let Menu = new Discord.MessageSelectMenu()
.setCustomId("ticketcreate")
.setPlaceholder("❓ | Wähle eine option aus!")
.setMaxValues(1) 
.setMinValues(1)
.addOptions([ //maximum 25 items
    {
        label: "Support Ticket".substr(0, 25), 
        value: "Support Ticket".substr(0, 25), 
        description: "wähle Support Ticket aus!".substr(0, 50), 
        emoji: "<:Support:997521602642202776>", //optional
    },
    {
        label: "Partner Ticket".substr(0, 25), 
        value: "Partner Ticket".substr(0, 25), 
        description: "wähle Partner Ticket aus!".substr(0, 50), 
        emoji: "<:partner_badge:997521396861255791>", //optional
    },
    {
        label: "Bewerbungs Ticket".substr(0, 25), 
        value: "Bewerbungs Ticket".substr(0, 25), 
        description: "wähle Bewerbungs Ticket aus!".substr(0, 50), 
        emoji: "<:DiscordMitarbeiter:995435103176110160>", //optional
    }
])
let row = new Discord.MessageActionRow().setComponents(Menu)
message.channel.send({embeds:[embed],components:[row]})
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */