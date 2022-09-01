const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags"); //npm i common-tags
const instagram = require("instagram-api.js") //npm i instagram-api.js
module.exports = {
    name: 'instagramm',
    aliases: ["insta"],
    utilisation: '{prefix}instagramm',
    category:"Sonstige",

    async execute(client, message, args) {
        const name = args.join(" ");

        if (!name) return message.channel.send("bitte sage deinen instagramm username")
      try {
        const account = await instagram.user(name,"23612221.3fcb46b.348431486f3a4fb85081d5242db9ca1c") // to get session id dm Dark Ice#3802
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.username)
            .setAuthor(account.username, account.is_verified ? "https://emoji.gg/assets/emoji/6817_Discord_Verified.png" : null)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile information", stripIndents`
            \`•\` Username: **${account.username}**
            \`•\` Full name: **${account.full_name ? account.full_name : "Unknown"}**
            \`•\` Bio: **${account.biography ? account.biography : "No Bio"}**
            \`•\` Posts: **${account.edge_owner_to_timeline_media.count}**
            \`•\` Followers: **${account.edge_followed_by.count}**
            \`•\` Following: **${account.edge_follow.count}**
            \`•\` Private: **${account.is_private ? "Yes" : "No"}**`)
        .setFooter(account.username)
        message.channel.send(embed);
      } catch (e) {
        message.channel.send(`Ich konnte den nutzer nicht finden`)
      }
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