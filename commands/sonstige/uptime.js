module.exports = {
    name: 'uptime',
    aliases: [],
    utilisation: '{prefix}uptime',
    category:"Sonstige",

    execute(client, message, args) {
var seconds = parseInt((client.uptime / 1000) % 60),
      minutes = parseInt((client.uptime / (1000 * 60)) % 60),
      hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
    // prettier-ignore
    hours = (hours < 10) ? ('0' + hours) : hours;
    // prettier-ignore
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    // prettier-ignore
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    return message.reply(
      `✅ | Ich bin seid **${hours}** Stunden, **${minutes}** Minuten und **${seconds}** Sekunden online!`
    );
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