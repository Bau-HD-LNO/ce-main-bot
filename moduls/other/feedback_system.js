const Discord = require("discord.js");
const settings = require("../../botconfig/settings.json")
module.exports = client => {
client.on("messageCreate", async (msg) => {
    if (msg.channel.id == settings.feedbackchannel) {
        let emojis = settings.feedback_emojis;
        let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
        const index = emojis.indexOf(emoji1);
        if (index > -1) {
            emojis.splice(index, 1);
        }
        let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
        msg.react(emoji1).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
        msg.react(emoji2).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
        msg.react(emoji3).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
        msg.react(emoji4).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
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