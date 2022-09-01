//IMPORTING NPM PACKAGES
const Discord = require('discord.js');
module.exports = async (client) => {
    client.on("threadCreate", async (thread) => {
        if(thread.joinable){
			try{
				await thread.join();
			}catch (e){
				console.log(e)
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