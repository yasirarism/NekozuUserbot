const { duaGram, terminal, lessLog } = require("duagram");
const { performance } = require('perf_hooks');

const bot = new duaGram({
    api_id: 2374504,
    api_hash: ' 2ea965cd0674f1663ec291313edcd333',

    logLevel: 1, // 0 false, 1 event, 2 detail
    logDetail: "warn", // none, error, warn, info, debug

    session: '1BQANOTEuMTA4LjU2LjEzMAG7n8j1nrlC2TXRF8OYz+2z0VIpr1bG5b192UeV25QLKMrCAuuiWQnzoS8z2uBKqKchmIZIxr7CPyZ6zomfO87V+0s9FymV/DQvm1owm7+LzNX/I2zaUTZSrGDXDT8ubJoFn6R5skVi6llxaOJznpwNbuwyv6zEbrkfuMe4YpGZk8KjLRvTulJIYTT9gpcW6NzL04DRMC6tkbBKTPowWpKV1bLOcdhOr13c8TecSpowLHwwYpRg+cqlGyS8v2a/jZuojRGgADsOgPyAsK8msRMvgjEytxHGhWiiLRGNw4Zv4Hj8MkvfYqsIZmCWokT7SHY3sfYQQvC8YMdK38b2kezyIw==' // Fill in the session here if you have one, or leave it blank 
});

bot.cmd('ping', async (ctx) => {
    // message in only
        let t0 = performance.now();
        let t1 = performance.now();      
        let diff = '<code>' + ((t1 - t0) / 1000).toLocaleString('id-ID', { maximumFractionDigits: 3 }) + "</code>"
        return await bot.sendMessage(ctx, `Pong!\nIn ${diff} seconds.`, { parse_mode: 'html' });
});



bot.start();