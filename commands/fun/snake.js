const SnakeGame = require('snakecord');
module.exports = {
    name: 'snake',
    aliases: [],
    utilisation: '{prefix}snake',
    category:"Fun",

    execute(client, message, args) {
        const SnakeGame = require('snakecord');
        const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: true,
    gameOverTitle: "Spiel zuende"
});
            snakeGame.newGame(message);
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