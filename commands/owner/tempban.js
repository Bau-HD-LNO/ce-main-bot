module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    category:"Sonstige",

    execute(client, message, args) {
        client.settings.ensure(message.guild.id, {
            prefix: config.prefix,
            hellomsg: "Hello World!",
            roles: [],
        });
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */