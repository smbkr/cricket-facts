const supertest = require('supertest');
const tap = require('tap');
const app = require('../lib/app');

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

tap.test('Auth success page', (t) => {
  request
    .get('/auth-success')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;

      t.ok(res.text.startsWith('It worked!'));
      t.end();
    });
});
