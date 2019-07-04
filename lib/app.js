const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 3000;

router.get('/', async ctx => {
    //TODO: ADd Slack install button
});

router.post('/', async ctx => {
    const facts = require('./facts.json');
    const fact = facts[Math.floor(Math.random() * facts.length)];
    ctx.body = {
        response_type: 'in_channel',
        text: fact
      };
    ctx.status = 200;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = () => app.listen(PORT);
