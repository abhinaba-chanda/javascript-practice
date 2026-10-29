const test = require("node:test");
const assert = require("node:assert");
const { stats } = require("./stats.js");

test("stats", () => {
  assert.deepStrictEqual(stats([{ done: true }, { done: false }, { done: false }]), { total: 3, done: 1, pending: 2 });
});
