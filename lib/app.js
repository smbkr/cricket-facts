const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');
const facts = require('./facts.json');

const app = new Koa();
const router = new Router();

const assetsDir = path.join(__dirname, '../assets');
app.use(
  views(assetsDir, {
    map: {
      html: 'handlebars',
    },
  }),
);

router.get('/', async (ctx) => {
  ctx.status = 200;
  await ctx.render('add.html');

});

router.post('/', async (ctx) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  ctx.status = 200;
  ctx.body = {
    response_type: 'in_channel',
    text: fact,
  };
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
