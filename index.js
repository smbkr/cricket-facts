const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(async ctx => {
    console.log(ctx);
    ctx.body = 'Hello World';
});

app.listen(PORT);
