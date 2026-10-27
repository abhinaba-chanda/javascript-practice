// Shopping cart
// Adds items to a cart, applies a discount code and works out the total.
// Practice: arrays of objects, reduce, find, default parameters.
// Run: node shopping-cart.js

function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function applyDiscount(total, code) {
  const codes = { SAVE10: 0.1, HALF: 0.5 };
  const rate = codes[code] || 0;
  return Math.round(total * (1 - rate) * 100) / 100;
}

function mostExpensive(items) {
  if (items.length === 0) return null;
  return items.reduce((best, item) => (item.price > best.price ? item : best));
}

if (require.main === module) {
  const cart = [
    { name: "Football", price: 799, qty: 1 },
    { name: "Jersey", price: 1299, qty: 1 },
    { name: "Socks", price: 199, qty: 2 },
  ];
  const total = cartTotal(cart);
  console.log("Total:", total);
  console.log("With SAVE10:", applyDiscount(total, "SAVE10"));
  console.log("Most expensive:", mostExpensive(cart).name);
}

module.exports = { cartTotal, applyDiscount, mostExpensive };
