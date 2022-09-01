const discordTranscripts = require('discord-html-transcripts');
module.exports = {
    name: 'transcript',
    aliases: [],
    utilisation: '{prefix}transcript',
    category:"Sonstige",

    async execute(client, message, args) {
        const attachment = await discordTranscripts.createTranscript(message.channel);
        

        message.reply({ content: `** Transcript of: \`${message.channel.name}\`**`, files: [attachment]})
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