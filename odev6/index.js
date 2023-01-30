const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    if (ctx.url === '/') {
        ctx.body = '<h1>INDEX SAYFASI</h1>'
    }
    else if (ctx.url === '/about') {
        ctx.body = '<h1>ABOUT SAYFASI</h1>'
    }
    else if (ctx.url === '/contact') {
        ctx.body = '<h1>CONTACT SAYFASI</h1>'
    }
    else {
        ctx.body = '<h1>404 ERROR</h1>'
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} da çalışmaya başladı`)
});