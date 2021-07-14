const { duaGram, terminal, lessLog } = require("duagram");
const { performance } = require('perf_hooks');
const axios = require('axios')
const bot = new duaGram({
    api_id: Number(process.env.api_id),
    api_hash: String(process.env.api_hash),

    logLevel: 1, // 0 false, 1 event, 2 detail
    logDetail: "warn", // none, error, warn, info, debug

    session: String(process.env.session)// Fill in the session here if you have one, or leave it blank 
});

let admin = Number(process.env.admin_id)

// credit https://t.me/ubotindonesia/782
function sudoacces(arraysudo, id) {
        if (arraysudo.indexOf(id) > -1) {
            return true;
        } else {
            return false;
        }        
    }

bot.middleware((ctx, next) => {

    var array_admin = [admin]

if (! sudoacces(array_admin, bot.getPeerId(ctx))) return false
    next();
});



bot.cmd('ping', async (ctx) => {
    sudoacces
    let t0 = performance.now();
    let t1 = performance.now();
    let diff = ((t1 - t0) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 });
    await bot.sendMessage(ctx, `Pong!\nIn <code>${diff}</code> seconds.`, { parse_mode: 'html' }).catch(e => terminal.error(e.message));
});

bot.cmd('id', async (ctx) => {
      sudoacces
      let chat_id = bot.getPeerId(ctx);
      // let idd = bot.peerGetId;
       return await bot.sendMessage(ctx, 'ID: '+chat_id)
})

bot.cmd('nickff', async (ctx) => { 
    sudoacces                                                                                                                                                                                        
    const nani = await axios.get('https://api.zeks.xyz/api/nickepep?apikey=apivinz')
    const bru = nani.data.result                                                                                                                                                                                                                                                                                                                                                     
    return await bot.sendMessage(ctx, '<i>Nick Epep Random</i> :<code>'+bru+'</code>', { parse_mode: 'html' });
    })

bot.cmd('alive', async (ctx) => {
        sudoacces
    // message in only
        let yah = performance.now();
        let kek = performance.now();      
        let k = '<code>' + ((kek - yah) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 }) + "</code>"
        let das = bot.getPeerId(ctx);                                                                                                                                                                                              
        return await bot.sendMessage(ctx, `Nekozu Userbot Is Alive!\nOwner ID: <code>${das}</code>\nUserbot Version: <code>1.2.0</code>\nUptime: ${k}\n\n<a href="https://t.me/nekozu">Update Channel</a>`, { parse_mode: 'html' });
});

bot.cmd('berita', async (ctx) => {   
    sudoacces                                                                                                                                                                                      
    const news = await axios.get('http://fadhil-a.herokuapp.com/api/berita.php?')
    const api = news.data.data                                                                                                                                                                                                                                                                                                                                                     
    return await bot.sendMessage(ctx, 'Judul Berita: '+api.judul+'Link Berita: '+api.link);
    })

bot.cmd('help', async (ctx) => {
        sudoacces
        let pesan = 'Command Available\n<code>alive, ping, berita, nickff, id</code>'
        return await bot.sendMessage(ctx, pesan, { parse_mode: 'html' });
})

// lagi error yg mau bantuin silahkan
bot.cmd('pin', async (ctx) => {
        sudoacces
        let result = bot.reply_to_message_id
        let message_id;
        if (result.updates) {
        message_id = result.updates[0].id
        } else {
        message_id = result.id;
    }
        return await bot.pinMessage(ctx, message_id);
})

bot.cmd('unpinall', async (ctx) => {
        return await bot.unpinAllMessages(ctx)
})

bot.cmd('gempa', async (ctx) => {
    sudoacces                                                                                                                                                                                         
    const gem = await axios.get('https://mhankbarbar.herokuapp.com/api/infogempa?')
    const pa = gem.data                                                                                                                                                                                                                                                                                                                                                    
    return await bot.sendMessage(ctx, 'Kedalaman: '+pa.kedalaman+'\Kordinat: '+pa.koordinat+"\nLokasi: '+pa.lokasi+'\nMagnitude: '+pa.magnitude+'\nPotensi: '+pa.potensi+'\nWaktu: '+pa.waktu);
    })

bot.start();
