const { duaGram, terminal, lessLog } = require("duagram");
const { performance } = require('perf_hooks');

const bot = new duaGram({
    api_id: apiid,
    api_hash: 'apihash',

    logLevel: 1, // 0 false, 1 event, 2 detail
    logDetail: "warn", // none, error, warn, info, debug

    session: 'string session // Fill in the session here if you have one, or leave it blank 
});

bot.cmd('ping', async (ctx) => {
    // message in only
        let t0 = performance.now();
        let t1 = performance.now();      
        let diff = '<code>' + ((t1 - t0) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 }) + "</code>"
        return await bot.sendMessage(ctx, `Pong!\nIn ${diff} seconds.`, { parse_mode: 'html' });
});



bot.start();
