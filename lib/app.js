const { App } = require('@slack/bolt');
const facts = require('./facts.json');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/cricketfact', async ({ command, ack, say }) => {
  ack();
  const fact = facts[Math.floor(Math.random() * facts.length)];
  say(fact);
});

module.exports = app;
