/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
const settings = require("../../botconfig/settings.json")
 const guessNumbers = [];
 module.exports = async (client) => {
    
    //GUESS THE NUMBER
    client.on("messageCreate", async (message) => {
        if(message.author.bot) return;
        
        let channelID = settings.guess_the_number.channel //873209073225592842
        let hostID = "717416034478456925" //717416034478456925
        let accessRoleID = "873208791963951125" // 873208791963951125
        const validNumbers = [13526, 6622, 4917, 17126, 7743, 1143, 13540, 5446, 1101, 8433, 19574, 18633, 15097, 2895, 19155, 10881, 9130, 8029, 5948, 12117]
        const STILLvalidNumbers = [6622, 4917, 17126, 7743, 9130, 5948, 12117]
        
        if(message.guild && message.channel.id == channelID){
            if(STILLvalidNumbers.includes(parseInt(message.content)) && !guessNumbers.includes(parseInt(message.content))){
                guessNumbers.push(parseInt(message.content));
                await message.pin().catch(() => {});
                await message.reply(`**Die Zahl \`${validNumbers.length - STILLvalidNumbers.lnegth + guessNumbers.length}.\` / \`${validNumbers.length}\` wurde von ${message.author} erraten!**`).catch(() => {});
                await message.react("<:xja:995413377943879790>").catch(() => {});             
            }
            else {
                await message.react("<:xnein:995413407010402324>").catch(() => {}); 
                setTimeout(() => {
                    message.delete()
                }, 10000);
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