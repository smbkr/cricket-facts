const Koa = require('koa');
const Router = require('koa-router');
const facts = require('./facts.json');

const app = new Koa();
const router = new Router();

router.get('/', async () => {
  // TODO: Add Slack install button
});

router.post('/', async (ctx) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  ctx.body = {
    response_type: 'in_channel',
    text: fact,
  };
  ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
