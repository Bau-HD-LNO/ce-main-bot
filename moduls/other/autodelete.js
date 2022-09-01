const D_ = new Map();
 let T_ = null; 
 module.exports = async (client, message) => {
 client.on("messageCreate", async message => {
     if(!message.guild) return;
     let chs = [ 
         { id: "936393570036883456", delay: 60_000 }, 
     ];
     if(chs && chs.some(ch => ch?.id == message.channel.id) && message.channel.type == "GUILD_TEXT"){
         const key = message.channel.id;
         const delay = chs.find(ch => ch.id == key).delay || 30000;
         if(!D_.has(key)) D_.set(key, []);
         if(!D_.has(key+"c")) D_.set(key+"c", false);
         D_.set(key, [...D_.get(key), { id: message.id, time: Date.now() }]);
         if(!D_.get(key+"c") || Math.floor(D_.get(key+"c") / 1_000) == Math.floor(Date.now() / 1_000)){
             D_.set(key+"c", Date.now()); 
             if(T_) clearTimeout(T_); 
             T_ = setTimeout(() => checkToDelete(), delay + 5_000);
         }
         
         function checkToDelete(){
             D_.set(key+"c", false); 
             const delMsgs = D_.get(key)
                 .filter(m => Math.floor(Math.floor(delay / 1_000) - Math.floor((Date.now() - m.time) / 1_000)) <= 0)
                 .map(m => m.id);
             if(delMsgs.length > 0) {
                 D_.set(key, D_.get(key).filter(d => !delMsgs.includes(d.id))) 
                 message.channel.bulkDelete(delMsgs.filter(m => message.channel.messages.cache.has(m))).catch(console.error);
             }
             setTimeout(() => !D_.get(key+"c") ? checkToDelete() : null, delay);
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