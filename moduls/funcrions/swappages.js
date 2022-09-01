const Discord = require('discord.js');
module.exports = {
    swap_pages2,
    swap_pages1
}
    async function swap_pages2(client, message, embeds) {
        let currentPage = 0;
        let cmduser = message.author;
        if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] }).catch(e => console.log("THIS IS TO PREVENT A CRASH"))
        let button_back = new Discord.MessageButton().setStyle('DANGER').setCustomId('1').setEmoji("<:pLinks:993181070369509416>").setLabel(" ")
        let button_home = new Discord.MessageButton().setStyle('PRIMARY').setCustomId('2').setEmoji("🏠").setLabel("Home")
        let button_forward = new Discord.MessageButton().setStyle('DANGER').setCustomId('3').setEmoji('<:pRechts:993181023594627143>').setLabel(" ")
        const allbuttons = [new Discord.MessageActionRow().addComponents([button_back, button_home, button_forward])]
        //Send message with buttons
        let swapmsg = await message.channel.send({
            content: `Drücke die **knöpfe** um die seiten zu wechseln`,
            embeds: [embeds[0]],
            components: allbuttons
        });
        //create a collector for the thinggy
        const collector = swapmsg.createMessageComponentCollector({ filter: (i) => i?.isButton() && i?.user && i?.user.id == cmduser.id && i?.message.author.id == client.user.id, time: 180e3 }); //collector for 5 seconds
        //array of all embeds, here simplified just 10 embeds with numbers 0 - 9
        collector.on('collect', async b => {
            if (b?.user.id !== message.author.id)
                return b?.reply({ content: `<:no:935673265245028382> **Only the one who typed ${config.prefix}help is allowed to react!**`, ephemeral: true })
            //page forward
            if (b?.customId == "1") {
                //b?.reply("***Swapping a PAGE FORWARD***, *please wait 2 Seconds for the next Input*", true)
                if (currentPage !== 0) {
                    currentPage -= 1
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                } else {
                    currentPage = embeds.length - 1
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                }
            }
            //go home
            else if (b?.customId == "2") {
                //b?.reply("***Going Back home***, *please wait 2 Seconds for the next Input*", true)
                currentPage = 0;
                await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                await b?.deferUpdate();
            }
            //go forward
            else if (b?.customId == "3") {
                //b?.reply("***Swapping a PAGE BACK***, *please wait 2 Seconds for the next Input*", true)
                if (currentPage < embeds.length - 1) {
                    currentPage++;
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                } else {
                    currentPage = 0
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                }
    
            }
        });
    
    }

    async function swap_pages1(client, message, embeds) {
        let currentPage = 0;
        let cmduser = message.author;
        if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] }).catch(e => console.log("THIS IS TO PREVENT A CRASH"))
        let button_back = new Discord.MessageButton().setStyle('DANGER').setCustomId('1').setEmoji("<:pLinks:993181070369509416>").setLabel("Back")
        let button_forward = new Discord.MessageButton().setStyle('DANGER').setCustomId('3').setEmoji('<:pRechts:993181023594627143>').setLabel("Forward")
        const allbuttons = [new Discord.MessageActionRow().addComponents([button_back, button_home, button_forward])]
        //Send message with buttons
        let swapmsg = await message.channel.send({
            content: `Drücke die **knöpfe** um die seiten zu wechseln`,
            embeds: [embeds[0]],
            components: allbuttons
        });
        //create a collector for the thinggy
        const collector = swapmsg.createMessageComponentCollector({ filter: (i) => i?.isButton() && i?.user && i?.user.id == cmduser.id && i?.message.author.id == client.user.id, time: 180e3 }); //collector for 5 seconds
        //array of all embeds, here simplified just 10 embeds with numbers 0 - 9
        collector.on('collect', async b => {
            if (b?.user.id !== message.author.id)
                return b?.reply({ content: `<:no:935673265245028382> **Only the one who typed ${config.prefix}help is allowed to react!**`, ephemeral: true })
            //page forward
            if (b?.customId == "1") {
                //b?.reply("***Swapping a PAGE FORWARD***, *please wait 2 Seconds for the next Input*", true)
                if (currentPage !== 0) {
                    currentPage -= 1
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                } else {
                    currentPage = embeds.length - 1
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                }
            }
            //go home
            else if (b?.customId == "2") {
                //b?.reply("***Going Back home***, *please wait 2 Seconds for the next Input*", true)
                currentPage = 0;
                await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                await b?.deferUpdate();
            }
            //go forward
            else if (b?.customId == "3") {
                //b?.reply("***Swapping a PAGE BACK***, *please wait 2 Seconds for the next Input*", true)
                if (currentPage < embeds.length - 1) {
                    currentPage++;
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                } else {
                    currentPage = 0
                    await swapmsg.edit({ embeds: [embeds[currentPage]], components: allbuttons });
                    await b?.deferUpdate();
                }
    
            }
        });
    
    }
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */