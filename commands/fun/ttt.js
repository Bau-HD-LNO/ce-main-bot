module.exports = {
    name: 'ttt',
    aliases: [],
    utilisation: '{prefix}ttt',
    category:"Fun",

    execute(client, message, args) {
    const ttt = require("discord-tictactoe")
    const game = new ttt({language:"de"})

    game.handleMessage(message);
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */