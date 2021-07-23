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
        let pesan = 'Command Available\n<code>alive, ping, berita, nickff, id, gempa, quote</code>'
        return await bot.sendMessage(ctx, pesan, { parse_mode: 'html' });
})

// lagi error yg mau bantuin silahkan
bot.cmd('del', async (ctx) => {
        return await bot.bot.deleteMessage(ctx, ctx.id);
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

bot.cmd('download', async (ctx, _ctx) => {
    if (!ctx.reply_to_message?.media) return ctx.reply('🤷🏽‍♂️ Please, reply to a message containing media.')
    let media = ctx.reply_to_message.media;

    let progressMessage = await bot.sendMessage(ctx, '⏳ Wait...', { replyToMsgId: ctx.id });
    let message_id = progressMessage.id || progressMessage.updates[0].id;

    // prevent flooding message
    // just update to every second
    let timer1 = Date.now();

    let progressCallback = (num) => {
        num = Math.round(num * 10000) / 100;
        if (num >= 100) return true;
        
        let timer2 = Date.now();
        let timer0 = timer2 - timer1;
        if (timer0 >= 1000) {
            timer1 = timer2;
            return bot.editMessage(ctx, message_id, `⏳ Download .. <code>${num}</code> %`, { parse_mode: 'html' })
                .catch(e => bot.terminal.error(e.message));
        }
    };

    let result = await bot.downloadMedia(media.raw, {
        path: '.data',        
        progressCallback
    });

    return bot.editMessage(ctx, message_id, `✅ Done.\n\n📁 File name: <code>${result.path}/${result.file}</code>`, { parse_mode: 'html' })
});

bot.start();
