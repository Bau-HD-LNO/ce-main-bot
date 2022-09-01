const config = require("../../botconfig/config.json")
const Discord = require("discord.js")
module.exports = async (client) => {
    client.on("messageCreate", async(message)=>{
        if(message.content == config.prefix+"setupgs") {
            if(message.member.permissions.has("ADMINISTRATOR")) {
                let embed1 = new Discord.MessageEmbed()
                .setImage("https://share.creavite.co/ysA81fpe3eIoRQS2.gif")
                .setColor("ORANGE");
                let embed = new Discord.MessageEmbed()
                .setAuthor({name:"Starte jetzt deine spielersuche",iconURL:"https://i.imgur.com/C9Hx1es.png",url:"https://discord.com/channels/993154733659390022/1003635257091821678"})
                .setDescription("> Starte jetzt eine Spielersuche um mitspieler für dein spiel zu finden, alle ferfügbaren spiele siehst du unten")
                .setFields(
                {
                    name:"<:valoranr:1003661036924178432> Valorant",
                    value:"verfügbar"
                },{
                    name:"<:Fortnite:1003656227634565153> Fortnite",
                    value:"verfügbar"
                },{
                    name:"<:gta:1003656608754171934> GTA",
                    value:"verfügbar"
                },{
                    name:"<:GA_csgo:1003661785150271549> CSGO",
                    value:"verfügbar"
                },{
                    name:"<:roblox:1003661964762955918> Roblox",
                    value:"verfügbar"
                },{
                    name:"<:forza:1003662205297889312> Forza",
                    value:"verfügbar"
                },{
                    name:"🚜 LS",
                    value:"verfügbar"
                },{
                    name:"<:FG_crownbanana:1003663309846880276> FallGuys",
                    value:"verfügbar"
                },{
                    name:"<:scringe:1003663621617897492> StumbleGuys",
                    value:"verfügbar"
                },{
                    name:"<:amongus:1003663624138670130> AmongUS",
                    value:"verfügbar"
                },{
                    name:"<:emote_verify:1003664570713379008> Minecraft",
                    value:"verfügbar"
                })
                .setThumbnail("https://i.imgur.com/C9Hx1es.png")
                .setFooter({text:message.guild.name+" | Spielersuche",iconURL:"https://i.imgur.com/C9Hx1es.png"})
                .setColor("ORANGE")
                .setImage("https://share.creavite.co/uqMfCpx6FI970bJZ.gif");
                let Menu = new Discord.MessageSelectMenu()
.setCustomId("gs")
.setPlaceholder("🎮 | Wähle ein Spiel aus!")
.setMaxValues(1) 
.setMinValues(1)
.addOptions([ //maximum 25 items
    {
        label: "Valorant".substr(0, 25), 
        value: "valorant".substr(0, 25), 
        description: "wähle Valorant aus!".substr(0, 50), 
        emoji: "1003661036924178432", //optional
    },{
        label: "Fortnite".substr(0, 25), 
        value: "fortnite".substr(0, 25), 
        description: "wähle Fortnite aus!".substr(0, 50), 
        emoji: "1003656227634565153", //optional
    },{
        label: "GTA".substr(0, 25), 
        value: "gta".substr(0, 25), 
        description: "wähle GTA aus!".substr(0, 50), 
        emoji: "1003656608754171934", //optional
    },{
        label: "CSGO".substr(0, 25), 
        value: "csgo".substr(0, 25), 
        description: "wähle CSGO aus!".substr(0, 50), 
        emoji: "1003661785150271549", //optional
    },{
        label: "Roblox".substr(0, 25), 
        value: "roblox".substr(0, 25), 
        description: "wähle Roblox aus!".substr(0, 50), 
        emoji: "1003661964762955918", //optional
    },{
        label: "Forza".substr(0, 25), 
        value: "forza".substr(0, 25), 
        description: "wähle Forza aus!".substr(0, 50), 
        emoji: "1003662205297889312", //optional
    },{
        label: "LS".substr(0, 25), 
        value: "ls".substr(0, 25), 
        description: "wähle LS aus!".substr(0, 50), 
        emoji: "🚜", //optional
    },{
        label: "FallGuys".substr(0, 25), 
        value: "fallguys".substr(0, 25), 
        description: "wähle FallGuys aus!".substr(0, 50), 
        emoji: "1003663309846880276", //optional
    },{
        label: " StumbleGuys".substr(0, 25), 
        value: "stumbleguys".substr(0, 25), 
        description: "wähle StumbleGuys aus!".substr(0, 50), 
        emoji: "1003663621617897492", //optional
    },{
        label: " AmongUS".substr(0, 25), 
        value: "amonguS".substr(0, 25), 
        description: "wähle AmongUS aus!".substr(0, 50), 
        emoji: "1003663624138670130", //optional
    },{
        label: " Minecraft".substr(0, 25), 
        value: "minecraft".substr(0, 25), 
        description: "wähle Minecraft aus!".substr(0, 50), 
        emoji: "1003664570713379008", //optional
    },])
    let row = new Discord.MessageActionRow().addComponents(Menu);
                message.channel.send({
                    embeds:[embed1,embed],
                    components:[row]
                })
            }
        }
    })
}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */