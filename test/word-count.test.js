const test = require("node:test");
const assert = require("node:assert");
const { wordCount } = require("../word-count.js");

test("wordCount", () => {
  assert.deepStrictEqual(wordCount("The cat and the hat"), { the: 2, cat: 1, and: 1, hat: 1 });
  assert.deepStrictEqual(wordCount(""), {});
});
