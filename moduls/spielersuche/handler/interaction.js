const { thread_create } = require("../functions/functions")
const Discord = require("discord.js")
module.exports = async (client) => {
    client.on("interactionCreate", async interaction=>{

        if(!interaction.isSelectMenu()) return
  
        if(interaction.message.customId === "gs") {
            let value = interaction.values
            if(value[0] === "valorant") {
                let embed = new Discord.MessageEmbed()
                .setTitle("Hallo {user} hier kommen spieler demnächst")
                .setColor("ORANGE")
                interaction.reply({contnet:"hi"}).then(tc=>{tc.threads.create({
                    name:"-",
                    autoArchiveDuration: 60,
                    type: 'GUILD_PUBLIC_THREAD',
                    reason: 'Spielersuche'
                })})
            }
        }
    })
}
/*if(interaction.customId === "info") {
        let value = interaction.values
        if(value[0] === "server_team") {*/