const test = require("node:test");
const assert = require("node:assert");
const { capitalizeWords } = require("../capitalize.js");

test("capitalizeWords", () => {
  assert.strictEqual(capitalizeWords("hello wORLD"), "Hello World");
  assert.strictEqual(capitalizeWords(""), "");
});
