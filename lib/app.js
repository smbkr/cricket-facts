require('newrelic');
const Koa = require('koa');
const facts = require('./facts.json');

const app = new Koa();

app.use(async (ctx) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  ctx.body = {
    response_type: 'in_channel',
    text: fact,
  };
  ctx.status = 200;
});

module.exports = app;
