const Discord = require("discord.js");
const config = require("../../botconfig/config.json")
module.exports = client => {
    client.on("messageCreate",async message=>{
        if(message.content.startsWith(config.prefix+"setuprr")) {
            if(message.member.permissions.has("ADMINISTRATOR") && !config.owner.includes(message.author.id)) return;
            let embed1 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage("https://share.creavite.co/3uRpEP5rI7XVB4cP.gif");
            let embed2 = new Discord.MessageEmbed()
            .setTitle("Wähle deine Rollen aus")
            .setColor("BLUE")
            .setDescription("Klicke auf das Menü unter dieser Nachricht, um mit der Auswahl zu beginnen!")
            .setFields({value:"Deine Rollenauswahl verrät anderen Personen wichtige Informationen über dich".substr(0, 25),name:":performing_arts: Was sind Rollen?"},
            {name:":bell: Was sind Benachrichtigungen?",value:"Benachrichtigungen machen dich auf bestimmte Ereignisse aufmerksam!".substr(0, 25)})
            .setImage("https://i.imgur.com/qcTL21u.png");
            let select1 = new Discord.MessageSelectMenu()
    .setCustomId("farbrolle")
    .setPlaceholder("📗 | Farbrollen")
    .setMaxValues(1) 
    .setMinValues(1)
    .addOptions([ //maximum 25 items
        {
            label: "Rot".substr(0, 25), 
            value: "Red".substr(0, 25), 
            description: "wähle Rot aus!".substr(0, 50), 
            emoji: "🔴", //optional
        },
        {
            label: "Violett".substr(0, 25), 
            value: "Purple".substr(0, 25), 
            description: "wähle Violett aus!".substr(0, 50), 
            emoji: "🟣", //optional
        },
        {
            label: "Grün".substr(0, 25), 
            value: "Green".substr(0, 25), 
            description: "wähle Grün aus!".substr(0, 50), 
            emoji: "🟢", //optional
        },
        {
            label: "Rosa".substr(0, 25), 
            value: "Pink".substr(0, 25), 
            description: "wähle Rosa aus!".substr(0, 50), 
            emoji: "<:pink:974656947490013184>", //optional
        },
        {
            label: "Orange".substr(0, 25), 
            value: "Orange".substr(0, 25), 
            description: "wähle Orange aus!".substr(0, 50), 
            emoji: "🟠", //optional
        },
        {
            label: "Gelb".substr(0, 25), 
            value: "Yellow".substr(0, 25), 
            description: "wähle Gelb aus!".substr(0, 50), 
            emoji: "🟡", //optional
        },
        {
            label: "Blau".substr(0, 25), 
            value: "Blue".substr(0, 25), 
            description: "wähle Blau aus!".substr(0, 50), 
            emoji: "🔵", //optional
        }
    ]);
    let select2 = new Discord.MessageSelectMenu()
    .setCustomId("herkunft")
    .setPlaceholder("🗺️ | herkunft")
    .setMaxValues(1) 
    .setMinValues(1)
    .addOptions([ //maximum 25 items
        {
            label: "Europa".substr(0, 25), 
            value: "Europe".substr(0, 25), 
            description: "wähle Europa aus!".substr(0, 50), 
            emoji: "🇪🇺", //optional
        },
        {
            label: "Nord Amerika".substr(0, 25), 
            value: "North_America".substr(0, 25), 
            description: "wähle Nord Amerika aus!".substr(0, 50), 
            emoji: "🦅", //optional
        },{
            label: "Süd Amerika".substr(0, 25), 
            value: "South_America".substr(0, 25), 
            description: "wähle Süd Amerika aus!".substr(0, 50), 
            emoji: "🌄", //optional
        },{
            label: "Asien".substr(0, 25), 
            value: "Asia".substr(0, 25), 
            description: "wähle Asien aus!".substr(0, 50), 
            emoji: "🐼", //optional
        },{
            label: "Ozeanien".substr(0, 25), 
            value: "Oceania".substr(0, 25), 
            description: "wähle Ozeanien aus!".substr(0, 50), 
            emoji: "🐨", //optional
        },{
            label: "Afrika".substr(0, 25), 
            value: "Africa".substr(0, 25), 
            description: "wähle Afrika aus!".substr(0, 50), 
            emoji: "🦒", //optional
        }
    ]);
    let select3 = new Discord.MessageSelectMenu()
    .setCustomId("plattform")
    .setPlaceholder("🎮 | Plattform")
    .setMaxValues(1) 
    .setMinValues(1)
    .addOptions([ //maximum 25 items
        {
            label: "PC".substr(0, 25), 
            value: "PC".substr(0, 25), 
            description: "wähle PC aus!".substr(0, 50), 
            emoji: "🖥️", //optional
        },{
            label: "XBOX".substr(0, 25), 
            value: "XBOX".substr(0, 25), 
            description: "wähle XBOX aus!".substr(0, 50), 
            emoji: "<:XBox:996394678708600902>", //optional
        },{
            label: "Playstation".substr(0, 25), 
            value: "Playstation".substr(0, 25), 
            description: "wähle Playstation aus!".substr(0, 50), 
            emoji: "<:PlayStation:960195178306609162>", //optional
        },{
            label: "Switch".substr(0, 25), 
            value: "Switch".substr(0, 25), 
            description: "wähle Switch aus!".substr(0, 50), 
            emoji: "<:switch:942843508677566525>", //optional
        },{
            label: "Mobile".substr(0, 25), 
            value: "Mobile".substr(0, 25), 
            description: "wähle Mobile aus!".substr(0, 50), 
            emoji: "<:Handy:922841618451677246>", //optional
        }
    ]);
    let row = new Discord.MessageActionRow().addComponents(select2);
    let row1 = new Discord.MessageActionRow().addComponents(select1);
    let row2 = new Discord.MessageActionRow().addComponents(select3);
    message.channel.send({embeds: [embed1,embed2], components: [row,row1,row2]})
    
        }
    })
    client.on("interactionCreate", async interaction=> {
        if(!interaction.isSelectMenu()) return
        let member = interaction.member
      
            if(interaction.customId === "farbrolle") {
                let value = interaction.values
                if(value[0] === "Red") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Red)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Red+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Red).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Red+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Red).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
    
                }
                if(value[0] === "Purple") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Purple)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Purple+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Purple).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Purple+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Purple).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
    
                }
                if(value[0] === "Green") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Green)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Green+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Green).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Green+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Green).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
    
                }
                if(value[0] === "Pink") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Pink)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Pink+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Pink).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Pink+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Pink).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
    
                }
                if(value[0] === "Orange") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Orange)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Orange+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Orange).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Orange+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Orange).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
    
                }
                if(value[0] === "Yellow") {
                    if(interaction.member.roles.cache.has(config.selfroles.farbe.Yellow)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Yellow+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.farbe.Yellow).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Yellow+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.farbe.Yellow).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    if(value[0] === "Blue") {
                        if(interaction.member.roles.cache.has(config.selfroles.farbe.Blue)) {
                            interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.farbe.Blue+">",ephemeral:true})
                            interaction.member.roles.remove(config.selfroles.farbe.Blue).catch(err=>{
                                if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
        
                        }
                        else {
                            interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.farbe.Blue+">",ephemeral:true})
                            interaction.member.roles.add(config.selfroles.farbe.Blue).catch(err=>{
                                if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
        
                        }
        
                    }
    
                }
            }
            if(interaction.customId === "plattform") {
                let value = interaction.values
                if(value[0] === "PC") {
                    if(interaction.member.roles.cache.has(config.selfroles.plattform.PC)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.plattform.PC+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.plattform.PC).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.plattform.PC+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.plattform.PC).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "XBOX") {
                    if(interaction.member.roles.cache.has(config.selfroles.plattform.XBOX)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.plattform.XBOX+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.plattform.XBOX).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.plattform.XBOX+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.plattform.XBOX).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Playstation") {
                    if(interaction.member.roles.cache.has(config.selfroles.plattform.Playstation)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.plattform.Playstation+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.plattform.Playstation).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.plattform.Playstation+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.plattform.Playstation).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Switch") {
                    if(interaction.member.roles.cache.has(config.selfroles.plattform.Switch)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.plattform.Switch+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.plattform.Switch).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.plattform.Switch+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.plattform.Switch).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Mobile") {
                    if(interaction.member.roles.cache.has(config.selfroles.plattform.Mobile)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.plattform.Mobile+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.plattform.Mobile).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.plattform.Mobile+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.plattform.Mobile).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
            }
            if(interaction.customId === "herkunft") {
                let value = interaction.values
                if(value[0] === "Europe") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.Europe)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.Europe+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.Europe).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.Europe+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.Europe).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "North_America") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.North_America)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.North_America+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.North_America).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.North_America+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.North_America).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "South_America") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.South_America)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.South_America+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.South_America).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.South_America+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.South_America).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Asia") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.Asia)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.Asia+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.Asia).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.Asia+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.Asia).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Oceania") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.Oceania)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.Oceania+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.Oceania).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.Oceania+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.Oceania).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
                if(value[0] === "Africa") {
                    if(interaction.member.roles.cache.has(config.selfroles.herkunft.Africa)) {
                        interaction.reply({content:"Dir wurde folgende Rolle entzogen: \n<:rMinus:966775783429398538> | <@&"+config.selfroles.herkunft.Africa+">",ephemeral:true})
                        interaction.member.roles.remove(config.selfroles.herkunft.Africa).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                    else {
                        interaction.reply({content:"Dir wurde folgend Rolle hinzugefügt:\n<:pPlus:995413442926219274> | <@&"+config.selfroles.herkunft.Africa+">",ephemeral:true})
                        interaction.member.roles.add(config.selfroles.herkunft.Africa).catch(err=>{
                            if(err) return interaction.channel.send({content:"Error beim hinzufügen",ephemeral:true})});
    
                    }
                }
            }
        }
        )
}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */