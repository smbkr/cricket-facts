const tap = require('tap');
const facts = require('../lib/facts.json');

function findDuplicates(array) {
  const result = [];
  array.forEach((element, index) => {
    if (array.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}

tap.test('All facts are unique', (t) => {
  const duplicates = findDuplicates(facts);
  t.deepEqual(duplicates, []);
  t.end();
});
