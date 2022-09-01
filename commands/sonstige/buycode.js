const Discord = require("discord.js");
const config = require("../../botconfig/config.json")
const paypal = require("paypal-rest-sdk")
const express = require('express');
const app = express()
module.exports = {
    name: 'buycode',
    aliases: [],
    utilisation: '{prefix}buycode',
    category:"Sonstige",

    async execute(client, message, args) {

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `https://discord.gg/Cjh55Utvr2`,
                "cancel_url": `https://discord.gg/Cjh55Utvr2`
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": `Vps Server`,
                        "sku": `301`,
                        "price": `2.00`,
                        "currency": `EUR`,
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": `EUR`,
                    "total": `2.00`
                },
                "description": `Vps Server`
            }]
        };
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for(let i = 0;i < payment.links.length;i++){
                    if(payment.links[i].rel === 'approval_url'){
                        message.channel.send({content:payment.links[i]});
                    }
                }
            }
            });
            app.get('bot', (req, res) => {
                const payerId = req.query.PayerID;
                const paymentId = req.query.paymentId;
                const execute_payment_json = {
                  "payer_id": payerId,
                  "transactions": [{
                      "amount": {
                          "currency": `EUR`,
                          "total": `2.00`
                      }
                  }]
                };
                paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
                    if (error) {
                        console.log(error.response);
                        throw error;
                    } else {
                        logChannel.send(`✅ **Successfully payed!** \` - \` :no_entry: **ADMIN BOT**\n\n**PAYER:**\n> __Name:__ \`${payment.payer?.payer_info?.first_name} ${payment.payer?.payer_info?.last_name}\`\n> __Email:__ \`${payment.payer?.payer_info?.email}\`\n\n${payment.transactions.map(t => `> **Product:** \`${t.description}\`\n> **Price:** \`${t.amount.total}${t.amount.currency}\`\n`).join("\n")}`.substr(0, 2000))
                        res.sendFile(`${process.cwd()}/modules/paypal/success/yearlyhosted/admin.html`)
                    }
                });
              });
        

        new Discord.MessageEmbed()
        .setTitle("Welchen code willst du kaufen")
        .setDescription("verfügbare optionen:")
        .setFields({name:"Chill-Ecke Main V2 Bot",value:"50 Euro in Paypal"},{name:"Chill-Ecke GlobalChat code",value:"15"})
       
    }}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */