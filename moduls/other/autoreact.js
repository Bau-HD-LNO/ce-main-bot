 const settings = require("../../botconfig/settings.json")
 module.exports = async (client, message) => {
 client.on("messageCreate", async message => {
     if(message.channel.id == settings.autodeletechannel) {
        settings.vemojis.forEach(emoji=>{
            message.react(emoji)
        })
        /*message.react(settings.vemojis[0])
        message.react(settings.vemojis[1])
        message.react(settings.vemojis[2])
        */
        try {
            message.member.send({content:"dein vorschlag wurde eingereicht"})
        } catch {
            return;
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