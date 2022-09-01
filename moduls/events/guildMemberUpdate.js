const { MessageEmbed } = require('discord.js');
module.exports = async (oM, nM) => {
    let boostLogChannelId = "1005932314016104488"
    let boostLogChannel = nM.guild.channels.cache.get(boostLogChannelId);
    if(!boostLogChannel) boostLogChannel = await nM.guild.channels.fetch(boostLogChannelId).catch(()=>{}) || false;
    if(!boostLogChannel) return;
    
    let stopBoost = new MessageEmbed()
        .setFooter("ID: " + nM.user.id)
        .setTimestamp()
        .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
        .setColor("RED")
        .setDescription(`<a:nitro:1005933451205152931> ${nM.user} **Boostet uns Jetzt nicht mehr ** <:weinen:1005933614581690488>`)
    let startBoost = new MessageEmbed()
        .setFooter("ID: " + nM.user.id)
        .setTimestamp()
        .setAuthor(nM.user.tag, nM.user.displayAvatarURL({dynamic: true}))
        .setColor("GREEN")
        .setDescription(`<a:nitro:1005933451205152931> ${nM.user} **Boostet uns jetzt !** <a:nitro:1005933451205152931>`)
    //if he/she starts boosting
    if(!oM.premiumSince && nM.premiumSince) {
        boostLogChannel.send({embeds: [startBoost]}).catch(console.warn);
        //send the MEMBER a DM
        nM.send("**🔮 Danke für den Boost 🔮**\n> gehe nun in <#993267003727032380> um deine Belohnung abzuholen ").catch(console.warn)
    }
    //if he/she stops boosting
    if(oM.premiumSince && !nM.premiumSince) {
        boostLogChannel.send({embeds: [stopBoost]}).catch(console.warn)
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