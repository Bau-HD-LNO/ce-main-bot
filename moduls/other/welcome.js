const Discord = require("discord.js");
const config = require("../../botconfig/config.json")
const Canvas = require("canvas")
const { loadImage, createCanvas, registerFont } = require("canvas")
module.exports = async client => {
        client.on("guildMemberAdd", async member => {
    const canvas = createCanvas(1024, 500);
  const ctx = canvas.getContext('2d');

  const pfp = await loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )

  const background = await loadImage(`./bilder/welcome.png`);
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y, 1024, 500)

  x = canvas.width / 2 - 125;
  y = canvas.height / 2 - 200;
  ctx.beginPath();
  ctx.save();
  ctx.arc(canvas.width / 2, canvas.height / 2 - 75, 125, 0, Math.PI * 2);
  ctx.strokeStyle = '#FF8800';
  ctx.lineWidth = 15;
  ctx.stroke();
  ctx.clip();
  ctx.drawImage(pfp, x, y, 250, 250);
  ctx.restore();


  ctx.font = "85px impact";
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.shadowColor = "black"
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0; // integer
  ctx.shadowBlur = 10; // integer
  ctx.fillText("Willkommen", 308, 380);

  ctx.font = "40px impact";
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  ctx.fillText(member.user.tag, 360, 430);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `banner.png`);
            let channel = member.guild.channels.cache.find(ch => ch.id === config.welcchannel);
            channel.send({files: [attachment],content: "<a:willkommen1:996434947785105529><a:willkommen2:996434912372588554> | **"+member.user.username+" Willkommen auf \`Chill-Ecke | DE\` wir sind nun "+member.guild.memberCount+" member**",embeds:[new Discord.MessageEmbed().setColor("GREEN").setImage("attachment://banner.png")]})
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