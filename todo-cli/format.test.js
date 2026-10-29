const test = require("node:test");
const assert = require("node:assert");
const { formatTask, formatList } = require("./format.js");

test("formatting", () => {
  assert.strictEqual(formatTask({ text: "buy milk", done: true }, 0), "1. [x] buy milk");
  assert.strictEqual(formatList([]), "No tasks yet.");
});
