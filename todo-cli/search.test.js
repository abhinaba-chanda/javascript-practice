const test = require("node:test");
const assert = require("node:assert");
const { search } = require("./search.js");

test("search", () => {
  const tasks = [{ text: "Buy Milk" }, { text: "call mom" }];
  assert.deepStrictEqual(search(tasks, "milk"), [{ text: "Buy Milk" }]);
});
