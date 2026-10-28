const test = require("node:test");
const assert = require("node:assert");
const { factorialLoop, factorialRec } = require("../factorial.js");

test("factorial both ways", () => {
  assert.strictEqual(factorialLoop(5), 120);
  assert.strictEqual(factorialRec(6), 720);
  assert.strictEqual(factorialLoop(0), 1);
});
