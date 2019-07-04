const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT || 3000;
const facts = require('./facts.json');

app.use(async ctx => {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    ctx.body = fact;
});

module.exports = () => app.listen(PORT);
