// Run: npm test   (or: node --test)
const test = require("node:test");
const assert = require("node:assert");

const { fizzBuzz } = require("../fizzbuzz.js");
const { cToF, fToC } = require("../temperature.js");
const { countVowels } = require("../vowel-count.js");
const { cartTotal, applyDiscount, mostExpensive } = require("../shopping-cart.js");

test("fizzBuzz follows the rules", () => {
  const out = fizzBuzz(15);
  assert.strictEqual(out.length, 15);
  assert.strictEqual(out[0], "1");
  assert.strictEqual(out[2], "Fizz");
  assert.strictEqual(out[4], "Buzz");
  assert.strictEqual(out[14], "FizzBuzz");
});

test("temperature converts both ways", () => {
  assert.strictEqual(cToF(0), 32);
  assert.strictEqual(cToF(100), 212);
  assert.strictEqual(fToC(212), 100);
  assert.strictEqual(fToC(cToF(37)), 37);
});

test("countVowels ignores case and handles no vowels", () => {
  assert.strictEqual(countVowels("Abhinaba"), 4);
  assert.strictEqual(countVowels("AEIOU"), 5);
  assert.strictEqual(countVowels("rhythm"), 0);
});

test("shopping cart total, discount and most expensive", () => {
  const cart = [
    { name: "Football", price: 799, qty: 1 },
    { name: "Socks", price: 199, qty: 2 },
  ];
  assert.strictEqual(cartTotal(cart), 1197);
  assert.strictEqual(applyDiscount(1000, "SAVE10"), 900);
  assert.strictEqual(applyDiscount(1000, "WRONG"), 1000);
  assert.strictEqual(mostExpensive(cart).name, "Football");
  assert.strictEqual(mostExpensive([]), null);
});
