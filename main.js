const { duaGram, terminal, lessLog } = require("duagram");
const { performance } = require('perf_hooks');
const axios = require('axios')
const bot = new duaGram({
    api_id: 3719337,
    api_hash: '58d810fbe8e9532bba0e73644ed55e62',

    logLevel: 1, // 0 false, 1 event, 2 detail
    logDetail: "warn", // none, error, warn, info, debug

    session: '1AQAOMTQ5LjE1NC4xNzUuNTMBu5uZN0OXkw0UdylBtd+pSe8YUe0JOTBdH44Iofn77vcqRDY3MO/FSWsCR9EoInmbiv6a+P7mfyjesnTiIInActg7V3PXA9RAG6gIIPg/Fd0mUH3eanqcBRYjN2Wa93q+XzsqqqAA8jCm6gdXDDRnIwd7IA4Az/zg9AzM7jrMz11quznni/QGm7xCXar3cqeNRZKQbX93acedoTVOkINZ1BsqZnDOV0IhtZwPATh79QCHaNhks7S6l2ANzEH88ht9AjkIZZPI+KWoxhI49mN5ofxzK53eJk/UKf8X6DGY0waXVc6TspYgmQJiJVoJ41Ekhi3mF/ZDxovFMuCwGVpYpmQ=' // Fill in the session here if you have one, or leave it blank 
});

bot.cmd('ping', async (ctx) => {
    // message in only
        let t0 = performance.now();
        let t1 = performance.now();      
        let diff = '<code>' + ((t1 - t0) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 }) + "</code>"
        return await bot.sendMessage(ctx, `Pong!\nIn ${diff} seconds.`, { parse_mode: 'html' });
});

bot.cmd('id', async (ctx) => {
      let chat_id = bot.peerGetId(ctx);
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
        let das = bot.peerGetId(ctx);                                                                                                                                                                                              
        return await bot.sendMessage(ctx, `Nekozu Userbot Is Alive!\nOwner ID: <code>${das}</code>\nUserbot Version: <code>1.2.0</code>\nUptime: ${k}\n\n<a href="https://t.me/nekozu">Update Channel</a>`, { parse_mode: 'html' });
});

bot.cmd('berita', async (ctx) => {                                                                                                                                                                                         
    const news = await axios.get('http://fadhil-a.herokuapp.com/api/berita.php?')
    const api = news.data.data                                                                                                                                                                                                                                                                                                                                                     
    return await bot.sendMessage(ctx, 'Judul Berita: '+api.judul+'Link Berita: '+api.link);
    })

bot.cmd('help', async (ctx) => {
        let pesan = 'Command Available\n<code>alive, ping, berita, nickff, id</code>'
        return await bot.sendMessage(ctx, pesan, { parse_mode: 'html' });
})

bot.start();
