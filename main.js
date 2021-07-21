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

bot.cmdPrefix = String(process.env.prefix);

bot.cmd('ping', async (ctx) => {
    let t0 = performance.now();
    let t1 = performance.now();
    let diff = ((t1 - t0) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 });
    await bot.sendMessage(ctx, `Pong!\nIn <code>${diff}</code> seconds.`, { parse_mode: 'html' }).catch(e => terminal.error(e.message));
});

bot.cmd('id', async (ctx) => {
      let chat_id = bot.getPeerId(ctx);
      // let idd = bot.peerGetId;
       return await bot.sendMessage(ctx, 'ID: '+chat_id)
})

bot.cmd('nickff', async (ctx) => {                                                                                                                                                                                        
    const nani = await axios.get('https://api.zeks.xyz/api/nickepep?apikey=apivinz')
    const bru = nani.data.result                                                                                                                                                                                                                                                                                                                                                     
    return await bot.sendMessage(ctx, '<i>Nick Epep Random</i> :<code>'+bru+'</code>', { parse_mode: 'html' });
    })

bot.cmd('alive', async (ctx) => {
    // message in only
        let yah = performance.now();
        let kek = performance.now();      
        let k = '<code>' + ((kek - yah) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 }) + "</code>"
        let das = bot.getPeerId(ctx);                                                                                                                                                                                              
        return await bot.sendMessage(ctx, `Nekozu Userbot Is Alive!\nOwner ID: <code>${das}</code>\nUserbot Version: <code>1.2.0</code>\nUptime: ${k}\n\n<a href="https://t.me/nekozu">Update Channel</a>`, { parse_mode: 'html' });
});

bot.cmd('berita', async (ctx) => {                                                                                                                                                                                         
    const news = await axios.get('http://fadhil-a.herokuapp.com/api/berita.php?')
    const api = news.data.data                                                                                                                                                                                                                                                                                                                                                     
    return await bot.sendMessage(ctx, 'Judul Berita: '+api.judul+'Link Berita: '+api.link);
    })

bot.cmd('help', async (ctx) => {
        let pesan = 'Command Available\n<code>alive, ping, berita, nickff, id, gempa</code>'
        return await bot.sendMessage(ctx, pesan, { parse_mode: 'html' });
})

// lagi error yg mau bantuin silahkan
bot.cmd('pin', async (ctx) => {
        return await bot.pinMessage(ctx.chat.id, ctx.id);
})

bot.cmd('gempa', async (ctx) => {                                                                                                                                                                                         
    const gem = await axios.get('https://mhankbarbar.herokuapp.com/api/infogempa?')
    const pa = gem.data                                                                                                                                                                                                                                                                                                                                                    
    return await bot.sendMessage(ctx, 'Kedalaman: '+pa.kedalaman+'\Kordinat: '+pa.koordinat+'\nLokasi: '+pa.lokasi+'\nMagnitude: '+pa.magnitude+'\nPotensi: '+pa.potensi+'\nWaktu: '+pa.waktu);
    })

bot.cmd('read', async (ctx) => {
        return await bot.readMentions(ctx.chat.id);
})

bot.cmd('quote', async (ctx) => {                                                                                                                                                                                         
    const o = await axios.get('https://mhankbarbar.herokuapp.com/api/randomquotes?')
    const c = o.data                                                                                                                                                                                                                                                                                                                                                    
    return await bot.sendMessage(ctx, 'Author: '+c.author+'\nQuotes: '+c.quotes);
    })

bot.cmd('fakedata', async (ctx) => {                                                                                                                                                                                         
    const f = await axios.get('https://zahirr-web.herokuapp.com/api/fakedata?country=en&apikey=zahirgans')
    const k = f.result                                                                                                                                                                                                                                                                                                                                                   
    return await bot.sendMessage(ctx.chat.id, 'Nama: '+k.name+'\nUlang Tahun: '+k.birthday+'\nAlamat: '+k.address+'\nKota: '+k.city+'\nNomor Telepon: '+k.phone_number+'\nEmail: '+k.email+'\nPassword: '+k.password+'\nZip: '+k.zip+'\nNegara: '+k.country);
    })

bot.cmd('cuacadunia', (ctx) => {
    terminal.info('Starting upload...');
    const wibu = await axios.get('https://zahirr-web.herokuapp.com/api/infocuaca/dunia?apikey=zahirgans')
    const lari = wibu.result.cuaca_dunia   
    let file = lari;
    return bot.sendFile(ctx, file);
});

bot.start();
