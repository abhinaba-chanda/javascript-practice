const test = require("node:test");
const assert = require("node:assert");
const { chunk } = require("../chunk-array.js");

test("chunk", () => {
  assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepStrictEqual(chunk([], 3), []);
  assert.throws(() => chunk([1], 0));
});
