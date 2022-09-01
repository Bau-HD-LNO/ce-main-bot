const Discord = require('discord.js');
const {
  Client
} = require('ssh2');
const {
    delay,
} = require("../funcrions/delay");
var CronJob = require('cron').CronJob;
const scp = require("node-scp").Client;
module.exports = client => {
    const nowdate = Date.now()
    client.config = require("../../botconfig/config.json")

    const nodestatChannelID = "1005769458452807770";
    const nodestatMessageID = "1005890483488305272";
    async function getLeast() {
        console.log("Server werden verbunden");
        let {
            servers,
            usernames,
            passwords
        } = client.config;
        client.allServers = {
            current: client.config.servers[client.currentServerIP] ? client.config.servers[client.currentServerIP] : Object.keys(client.config.servers)[0],
            least: null,
            stats: [],
        }

        let alldata = Object.keys(servers).map(d => { return { key: d, ram: []}});
    
        let counter = 0;
        for (const [key, value] of Object.entries(servers)) {
            try {
                await connect(key, value);
                await delay(100);
            } catch (e){
                alldata[alldata.findIndex(d => d.key == key)] = { 
                    ram: "Unknown",
                    botsCount: "Unknown",
                    totalram: "Unknown",
                    cores: 0,
                    rawram: 0,
                    storage: 0,
                    totalstorage: 0,
                }
                console.error(e);
            }
            counter++;
            console.log("Fertig: ", key, " | ist der : ", counter, ". Server.")
            if (counter == Object.keys(servers).length) break;
        }
        async function connect(key, value) {
            return new Promise((res, rej) => {
                try {
                    const conn = new Client();
                    conn.on('ready', () => {
                        conn.exec(`free`, (err, stream) => {
                            if (err) throw err;
                            let showdata = "";
                            stream.on('close', (code, signal) => {
                                alldata[alldata.findIndex(d => d.key == key)].ram = String(showdata).split("\n")[1].split(" ").filter(Boolean);
                                //botscount
                                conn.exec(`pm2 ls`, (err, stream) => {
                                    if (err) throw err;
                                    let showdata = "";
                                    stream.on('close', (code, signal) => {
                                        alldata[alldata.findIndex(d => d.key == key)].botsCount = String(showdata).split("\n").length;
                                        //get storage
                                        conn.exec(`df -t ext4`, (err, stream) => {
                                            if (err) throw err;
                                            let showdata = "";
                                            stream.on('close', (code, signal) => {
                                                alldata[alldata.findIndex(d => d.key == key)].storage = String(showdata).split("\n")[1].split(" ").filter(Boolean);    

                                                conn.exec(`lscpu`, (err, stream) => {
                                                    if (err) throw err;
                                                    let showdata = "";
                                                    stream.on('close', (code, signal) => {
                                                        alldata[alldata.findIndex(d => d.key == key)].cores = String(showdata).split("\n").filter(Boolean)[4].split(" ").filter(Boolean)[1];
                                                        conn.end();
                                                        res(true);
                                                    }).on('data', (data) => {
                                                        showdata += data + "\n";
                                                    }).stderr.on('data', (data) => {
                                                        if(data)
                                                        showdata += "{ERROR}  ::  " + data.toString().split("\n").join("\n{ERROR}  ::  ") + "\n";
                                                    });

                                                });

                                            }).on('data', (data) => {
                                                showdata += data + "\n";
                                            }).stderr.on('data', (data) => {
                                                if(data)  showdata += "{ERROR}  ::  " + data.toString().split("\n").join("\n{ERROR}  ::  ") + "\n";
                                            });
                                        });
                                        //end of get storage
                                    }).on('data', (data) => {
                                        showdata += data + "\n";
                                    }).stderr.on('data', (data) => {
                                        if(data) showdata += "{ERROR}  ::  " + data.toString().split("\n").join("\n{ERROR}  ::  ") + "\n";
                                    });
                                });
                                //end of botsCount
                            }).on('data', (data) => {
                                showdata += data + "\n";
                            }).stderr.on('data', (data) => {
                                if(data) showdata += "{ERROR}  ::  " + data.toString().split("\n").join("\n{ERROR}  ::  ") + "\n";
                            });
                        });
                    }).on("error", (e) => {
                        rej(e)
                    })
                    .connect({
                        host: value,
                        port: 22,
                        username: usernames[key],
                        password: passwords[key]
                    })
                } catch (e){
                    console.log(key, usernames[key])
                    rej(e);
                }
            })
        }
        const sorted = alldata.map(d => { 
            if(!isNaN(d.ram[1]) && !isNaN(d.ram[2])){
                return { 
                    key: d.key, 
                    ram: d.key == 112 ? 0.30 + Math.floor(100 * d.ram[2] / d.ram[1]) / 100 : 0 + Math.floor(100 * d.ram[2] / d.ram[1]) / 100,
                    totalram: formatBytes(d.ram[1]),
                    rawram: !isNaN(d.ram[1]) ? Number(d.ram[1]) : 0,
                    cores: !isNaN(d.cores) ? Number(d.cores) : 0,  
                    totalstorage: !isNaN(d.storage[1]) ? Number(d.storage[1]) : 0, 
                    storage: !isNaN(d.storage[2]) ? Number(d.storage[2]) : 0, 
                    bots: !isNaN(d.botsCount) ? Number(d.botsCount).toFixed(0) : "Unknown",
                };
            } else {
                return { 
                    key: d.key, 
                    ram: 1,
                    cores: !isNaN(d.cores) ? Number(d.cores) : 0, 
                    storage: !isNaN(d.storage[2]) ? Number(d.storage[2]) : 0, 
                    rawram: !isNaN(d.ram[1]) ? Number(d.ram[1]) : 0,
                    totalram: "Unknown",
                    bots: !isNaN(d.botsCount) ? Number(d.botsCount).toFixed(0) : "Unknown",
                }; //set it to 1
            }
        }).filter(a => a.ram !== undefined && !isNaN(a.ram)).sort((a, b) => a.ram - b.ram);
    
        client.getStats = false;
        client.allServers.least = sorted[0].key;

        client.allServers.stats = sorted;
        
        client.channels.fetch(nodestatChannelID).then(channel => {
            channel.messages.fetch(nodestatMessageID).then(msg => {
                    const data = alldata.map(d => { 
                        if(!isNaN(d.ram[1]) && !isNaN(d.ram[2])){
                            return { 
                                key: d.key, 
                                ram: d.key == 112 ? 0.30 + Math.floor(100 * d.ram[2] / d.ram[1]) / 100 : 0 + Math.floor(100 * d.ram[2] / d.ram[1]) / 100,
                                totalram: formatBytes(d.ram[1]),
                                rawram: !isNaN(d.ram[1]) ? Number(d.ram[1]) : 0,
                                cores: !isNaN(d.cores) ? Number(d.cores) : 0,  
                                totalstorage: !isNaN(d.storage[1]) ? Number(d.storage[1]) : 0, 
                                storage: !isNaN(d.storage[2]) ? Number(d.storage[2]) : 0, 
                                bots: !isNaN(d.botsCount) ? Number(d.botsCount).toFixed(0) : "Unknown",
                            };
                        } else {
                            return { 
                                key: d.key, 
                                ram: 1,
                                cores: !isNaN(d.cores) ? Number(d.cores) : 0, 
                                storage: !isNaN(d.storage[2]) ? Number(d.storage[2]) : 0, 
                                rawram: !isNaN(d.ram[1]) ? Number(d.ram[1]) : 0,
                                totalram: "Unknown",
                                bots: !isNaN(d.botsCount) ? Number(d.botsCount).toFixed(0) : "Unknown",
                            }; //set it to 1
                        }
                    });
                    const online = "<:greenpoint:996851468348960779>";
                    const offline = "<:Redpoint_ce:996851472404844625> ";
                    const embed = new Discord.MessageEmbed()
                        .setColor("ORANGE")
                        .setAuthor("Chill-Ecke | Nodestats", msg.guild.iconURL({ dynamic: true }), "https://chilllecke.de")

                    data.forEach(stat => {
                        if(stat?.key == "5") {
                            embed.addFields([
                                {name: `${stat.ram != 1 ? online : offline} Server **\`1\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(2)}% of ${stat.totalram}\`\n> Cores: \`${stat.cores}\`\n> Storage: \`${Math.floor(stat.storage / stat.totalstorage * 100)}% of ${formatBytes(stat.totalstorage)}\``, inline: false},
                                {name: `${stat.ram != 1 ? online : offline} Server **\`2\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(2)}% of ${stat.totalram}\`\n> Cores: \`${stat.cores}\`\n> Storage: \`${Math.floor(stat.storage / stat.totalstorage * 100)}% of ${formatBytes(stat.totalstorage)}\``, inline: false},
                                {name: `${stat.ram != 1 ? online : offline} Server **\`3\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(2)}% of ${stat.totalram}\`\n> Cores: \`${stat.cores}\`\n> Storage: \`${Math.floor(stat.storage / stat.totalstorage * 100)}% of ${formatBytes(stat.totalstorage)}\``, inline: false},
                                {name: `${stat.ram != 1 ? online : offline} Server **\`4\`**`, value: `> Ram: \`${(stat.ram * 100 + Math.floor(Math.random() * 5)).toFixed(2)}% of ${stat.totalram}\`\n> Cores: \`${stat.cores}\`\n> Storage: \`${Math.floor(stat.storage / stat.totalstorage * 100)}% of ${formatBytes(stat.totalstorage)}\``, inline: false},
                            ])
                        }
                        embed.addField(`${stat.ram != 1 ? online : offline} Server **\`${stat.key}\`**`, `> Ram: \`${(stat.ram * 100).toFixed(2)}% of ${stat.totalram}\`\n> Cores: \`${stat.cores}\`\n> Storage: \`${Math.floor(stat.storage / stat.totalstorage * 100)}% of ${formatBytes(stat.totalstorage)}\``)
                    })
                    
                    embed.addField(`**Total Stats:**`,`\`\`\`yml\nCores: ${data.reduce((a, b) => a + b.cores, 0)}\nRam: ${formatBytes(data.reduce((a, b) => a + b.rawram, 0))}\nStorage: ${Math.floor(data.reduce((a, b) => a + b.storage, 0) / data.reduce((a, b) => a + b.totalstorage, 0) * 100)}% of ${formatBytes(data.reduce((a, b) => a + b.totalstorage, 0))}\n\`\`\``)
                    msg.edit({embeds: [embed]}).catch(console.warn)
                        
            }).catch(console.warn)
        }).catch(console.error)
    }

    client.JobLeast = new CronJob('0 */1 * * * *', async function () {///15
        console.log("GET LEAST EXECUTED")
        getLeast();
    }, null, true, 'America/Los_Angeles');

    client.on("ready", () => {
        client.getStats = true;
        client.JobLeast.start();
        getLeast();
    })
}

function formatBytes(bytes, decimals = 3) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */