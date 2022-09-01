const { swap_pages2 } = require("../../moduls/funcrions/swappages")
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}help',
    category:"Info",
//client.commands.filter((cmd) => cmd.category === "🎶 Music" && cmd.type?.includes("song")).sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")
    execute(client, message, args) {
        var embed = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'Help Menu Chill-Ecke | DE #Startseite', iconURL: message.guild.iconURL({dynamic: true})})
        .setDescription('Hallo '+message.member.user.username+', Ich bin '+client.user.tag+'\n> Ich kümmere mich um Das system auf '+message.guild.name+' du kannst mich nicht einladen\n\n **📌 Wie bekomme ich hilfe ?**\n> Nutze die buttons um die seiten zu wechseln\n> öffne ein ticket in <#993267003727032380>')
        .setFooter({ text: 'Startseite'});

        var embed1 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'Help Menu Chill-Ecke | DE #Info Befehle', iconURL: message.guild.iconURL({dynamic: true})})
        .setDescription('›Du hast dir die Info-Befehle-Kategorie ausgesucht.\n\n**📌 Alle Befehle:**\n '+client.commands.filter((cmd) => cmd.category === "Info").sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => `\n> ┣ \`📌\` 〣\`${cmd.name}\``).join(" "))
        .setFooter({ text: 'Seite 1'});

    var embed2 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'Help Menu Chill-Ecke | DE #Fun Befehle', iconURL: message.guild.iconURL({dynamic: true})})
        .setDescription('›Du hast dir die Info-Befehle-Kategorie ausgesucht.\n\n**📌 Alle Befehle:**\n '+client.commands.filter((cmd) => cmd.category === "Fun").sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => `\n> ┣ \`📌\` 〣\`${cmd.name}\``).join(" "))
        .setFooter({ text: 'Seite 2'});

    var embed3 = new Discord.MessageEmbed()
        .setColor("#6861fe")
        .setAuthor({ name: 'Help Menu Chill-Ecke | DE #Sonstige Befehle', iconURL: message.guild.iconURL({dynamic: true})})
        .setDescription('›Du hast dir die Info-Befehle-Kategorie ausgesucht.\n\n**📌 Alle Befehle:**\n '+client.commands.filter((cmd) => cmd.category === "Sonstige").sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => `\n> ┣ \`📌\` 〣\`${cmd.name}\``).join(" "))
        .setFooter({ text: 'Seite 3'});
        
    swap_pages2(client, message, [
        embed,
        embed1,
        embed2,
        embed3
    ]);
    }    
};
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */