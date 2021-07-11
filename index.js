const { duaGram, terminal, lessLog } = require("duagram");
const { performance } = require('perf_hooks');

const bot = new duaGram({
    api_id: apiid,
    api_hash: 'apihash',

    logLevel: 1, // 0 false, 1 event, 2 detail
    logDetail: "none", // none, error, warn, info, debug

    session: 'string session' // Fill in the session here if you have one, or leave it blank 
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
        return await bot.sendMessage(ctx, `Nekozu Userbot Is Alive!\nOwner ID: ${das}\nUserbot Version: <code>1.2.0</code>\nUptime: ${k}.`, { parse_mode: 'html' });
});


bot.start();
