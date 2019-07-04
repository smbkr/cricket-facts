const supertest = require('supertest');
const tap = require('tap');
const app = require('../lib/app');
const facts = require('../lib/facts.json');

let server;
let request;
tap.beforeEach((done) => {
  server = app.listen();
  request = supertest(server);
  done();
});

tap.afterEach((done) => {
  server.close();
  done();
});

tap.test('Getting a fact', (t) => {
  request
    .post('/')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;

      t.equal(res.body.response_type, 'in_channel');
      t.ok(facts.includes(res.body.text));
      t.end();
    });
});
