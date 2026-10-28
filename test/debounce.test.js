const test = require("node:test");
const assert = require("node:assert");
const { debounce } = require("../debounce.js");

test("debounce calls once", async () => {
  let calls = 0;
  const d = debounce(() => calls++, 20);
  d(); d(); d();
  await new Promise((r) => setTimeout(r, 60));
  assert.strictEqual(calls, 1);
});
