const Discord = require("discord.js")
const settings = require("../../botconfig/settings.json")
const discordTranscripts = require('discord-html-transcripts');
const fs = require("fs");
const { channel } = require("diagnostics_channel");
module.exports = async(client, interaction) => {
    //-----------------------------------------------------Ticket embeds -------------------------------------------------------------------
    //-----------------------------------------------------Spieler suche---------------------------------------------------------------------
    if(interaction.customId == "gs") {
        let value = interaction.values
        let game = value[0]
        let channel = interaction.guild.channels.cache.find(ch => ch.id === "1004014525470736535");
        let embed = new Discord.MessageEmbed()
        .setTitle("🎮 Spieler suche gestartet")
        .setFields({name:"🎮 Spiel : ",value:"> "+game},{name:"🎮 Eigentümer : ",value:"> "+interaction.member.user.username})
        .setFooter({text:interaction.guild.name+" | Spielersuche",iconURL:interaction.guild.iconURL({ dynamic: true })})
        .setColor("ORANGE")
        .setThumbnail(interaction.member.displayAvatarURL({dynamic:true}))
        channel.send({embeds:[embed]}).then(msg=>{
            msg.startThread({name: interaction.member.user.username+"-"+game,
        autoArchiveDuration: 60,
        type: 'GUILD_PUBLIC_THREAD',
        reason: 'spielersuche'}).then(ch=>{
            interaction.reply({content:"<a:LC_checkyes:993164094519648256> | Spielersuche erstellt <#"+ch+">",ephemeral:true})
            ch.send({content:"<@"+interaction.member.user.id+">",embeds:[new Discord.MessageEmbed().setColor("ORANGE").setAuthor({iconURL:interaction.member.displayAvatarURL({dynamic:true}),name:interaction.member.user.username+"-"+game}).setDescription("> Hier werden bald mitspieler kommen").setFields({name:"Owner",value:"> <@"+interaction.member.user.id+">"},{name:"Spiel",value:"> "+game})]})
            msg.edit({embeds:[embed.addFields({name:"🎮 Channel : ",value:"> <#"+ch+">"})]})
        })
    }).catch(() => {});
    }
    //---------------------------------------------------------Ticket System------------------------------------------------------------------------- 
    else if (interaction.customId == "transcript_ticket"){
        interaction.reply({content:"<a:loadingcm:993164329551671396> transcript wird generiert",ephemeral:true}).then(async msg=>{
            const attachment = await discordTranscripts.createTranscript(interaction.channel);
            interaction.editReply({content:`transcript von ${interaction.channel.name}`,files:[attachment],ephemeral:true})
        })
    }
    else if(interaction.customId == "unclaimen"+interaction.member.user.id) {
        interaction.reply({embeds:[new Discord.MessageEmbed().setDescription("<@"+interaction.member.user.id+"> hat das ticket unclaimt du kannst es jetzt claimen ")
                    .setColor("GREEN")
                    .setFooter(interaction.channel.name)
                    .setTimestamp()],components:[new Discord.MessageActionRow().setComponents(new Discord.MessageButton()
                        .setEmoji("<:Support:997521602642202776>")
                        .setStyle("PRIMARY")
                        .setLabel("Claime das Ticket")
                        .setCustomId("claim_ticket"))],ephemeral:false})
    }
    else if(interaction.customId == "claim_ticket") {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content:"ich glaube du hast nicht die adminstratoren rolle",ephemeral:true});
        let transcript = new Discord.MessageButton()
        .setStyle(`SUCCESS`)
        .setEmoji(`📝`)
        .setLabel(`Transcript`)
        .setCustomId(`transcript_ticket`);
        let claim = new Discord.MessageButton()
        .setEmoji("<:Support:997521602642202776>")
        .setStyle("PRIMARY")
        .setLabel("Claime das Ticket")
        .setCustomId("claim_ticket");
        let delete_ticket = new Discord.MessageButton()
        .setEmoji("<:Deleted:995434767434649733>")
        .setStyle("DANGER")
        .setLabel("lösche das Ticket")
        .setCustomId("delete_ticket");
        let embed = new Discord.MessageEmbed()
        .setDescription("<@"+interaction.member.user.id+"> wird dir nun helfen ")
        .setColor("GREEN")
        .setFooter(interaction.channel.name)
        .setTimestamp();
        let { user } = client.settings.get(interaction.channel.id)
        interaction.update({components:[new Discord.MessageActionRow().addComponents([transcript,claim.setDisabled(true),delete_ticket])]})
        interaction.channel.send({embeds:[embed],content: `**<@${user}>**`,components:[new Discord.MessageActionRow().setComponents(new Discord.MessageButton().setCustomId("unclaimen"+interaction.member.user.id).setLabel("unclaime das Ticket").setStyle("SECONDARY"))], ephemeral: false}).then(async msg=>{
        })
    }
    else if(interaction.customId == "delete_ticket") {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content:"ich glaube du hast nicht die adminstratoren rolle",ephemeral:true});
        try {
            let { user } = client.settings.get(interaction.channel.id).catch(()=>{})
            let member = interaction.guild.members.cache.get(user).catch(()=>{})
            interaction.reply({content: `**Ticket wird gelöscht**\n> <a:no_emoji_gif:993164000198139934>  Transcripts an user senden \n> <a:no_emoji_gif:993164000198139934>  Log in logchannel senden \n> <a:no_emoji_gif:993164000198139934>  kanal löschen`, ephemeral: true}).then(async msg=>{
                const attachment = await discordTranscripts.createTranscript(interaction.channel);
                interaction.member.send({content: `** Transcript von: \`${interaction.channel.name}\`**`, files: [attachment]}).catch(()=>{}).then(async()=>{
                    let embed = new Discord.MessageEmbed()
                    .setTitle("Dein Ticket "+interaction.channel.name+" wurde gelöscht")
                    .setDescription("Hier ein paar infos")
                    .setFields({name:"Moderator",value:interaction.member.user.username})
                    .setFooter({text:interaction.guild.name,iconURL:interaction.guild.iconURL({ dynamic: true })})
                    .setTimestamp()
                    .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                    .setColor("GREEN")
                    member.send({embeds:[embed], files: [attachment],content:"Ticket System Chill-Ecke | DE"}).catch(()=>{})
                    interaction.editReply({content: `**Ticket wird gelöscht**\n> <a:LC_checkyes:993164094519648256> Transcripts an user senden \n> <a:no_emoji_gif:993164000198139934>  Log in logchannel senden \n> <a:no_emoji_gif:993164000198139934>  kanal löschen`, ephemeral: true}).then(async()=>{
                        let embed2 = new Discord.MessageEmbed()
                        .setTitle("Das Ticket "+interaction.channel.name+" wurde gelöscht")
                        .setDescription("> hier sind ein paar infos")
                        .setFields({name:"Geschlossen von ",value:interaction.member.user.username},{name:"Geöffnet von ",value:member.user.username})
                        .setFooter({text:interaction.guild.name,iconURL:interaction.guild.iconURL({ dynamic: true })})
                        .setTimestamp()
                        .setColor("GREEN")
                        let logchannel = interaction.guild.channels.cache.get("993269947012755516")
                        logchannel.send({embeds:[embed2], files: [attachment]})
                        interaction.editReply({content: `**Ticket wird gelöscht**\n> <a:LC_checkyes:993164094519648256> Transcripts an user senden \n> <a:LC_checkyes:993164094519648256> Log in logchannel senden \n> <a:no_emoji_gif:993164000198139934>  kanal löschen`, ephemeral: true}).then(async()=>{
                            interaction.editReply({content: `**Ticket wird gelöscht**\n> <a:LC_checkyes:993164094519648256> Transcripts an user senden \n> <a:LC_checkyes:993164094519648256> Log in logchannel senden \n> <a:LC_checkyes:993164094519648256> kanal löschen`, ephemeral: true}).then(()=>{
                                interaction.channel.delete()
                            })
                        })
                    })
                })
            })
        } catch{

        }
    }
    else if(interaction.customId == "ticketcreate") {
        const cat = "993154733659390023"
        const wait = require('util').promisify(setTimeout);
        await interaction.reply({ content: `<a:loadingcm:993164329551671396> **Dein Ticket wird gerade erstellt...**`, ephemeral: true })
        interaction.guild.channels.create(`${`ticket-${interaction.user.username}`}`, {
                permissionOverwrites: [{
                        id: interaction.user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: "993263525738852473",
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: interaction.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text',
                parent: cat,
                topic: `📨 Ticket von: ${interaction.user.tag} (${interaction.user.id}) `
            }).catch(() => {
      interaction.editReply({ content: ` **ein fehler ist aufgetreten **`, ephemeral: true })
            }).then(async function(channel) {
                let transcript = new Discord.MessageButton()
                .setStyle(`SUCCESS`)
                .setEmoji(`📝`)
                .setLabel(`Transcript`)
                .setCustomId(`transcript_ticket`);
                let claim = new Discord.MessageButton()
                .setEmoji("<:Support:997521602642202776>")
                .setStyle("PRIMARY")
                .setLabel("Claime das Ticket")
                .setCustomId("claim_ticket");
                let delete_ticket = new Discord.MessageButton()
                .setEmoji("<:Deleted:995434767434649733>")
                .setStyle("DANGER")
                .setLabel("lösche das Ticket")
                .setCustomId("delete_ticket");
                let rowticket = new Discord.MessageActionRow().addComponents([transcript,claim,delete_ticket]);
      await client.settings.set(channel.id,{user: interaction.member.user.id,ki:false,claimed:false})
            await channel.send({components:[rowticket],content:"hi"}).then(msg=>{msg.pin()})
            await wait(1000)
            await interaction.editReply({ content: ` **Dein ticket wurde in  ${channel} erstellt**`, ephemeral: true })
        }
    )

}}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */