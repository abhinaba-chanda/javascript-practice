const test = require('node:test');
const assert = require('node:assert');
const { add, markDone, remove, format } = require('./todo');

test('add appends a task', () => {
  const t = add([], '  Learn Node ');
  assert.deepStrictEqual(t, [{ text: 'Learn Node', done: false }]);
});

test('add rejects empty text', () => {
  assert.throws(() => add([], '   '));
});

test('markDone and remove use 1-based numbers', () => {
  let t = add(add([], 'a'), 'b');
  t = markDone(t, 2);
  assert.strictEqual(t[1].done, true);
  t = remove(t, 1);
  assert.deepStrictEqual(t, [{ text: 'b', done: true }]);
  assert.throws(() => remove(t, 5));
});

test('format prints a checklist', () => {
  assert.strictEqual(format([]), 'Nothing to do!');
  assert.strictEqual(format([{ text: 'x', done: true }]), '1. [x] x\n0 of 1 left');
});
