// FizzBuzz
// Numbers 1 to n, but multiples of 3 say "Fizz", multiples of 5 say "Buzz"
// and multiples of both say "FizzBuzz".
// Practice: loops, modulo, arrays.
// Run: node fizzbuzz.js 15

function fizzBuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    out.push(word || String(i));
  }
  return out;
}

if (require.main === module) {
  const n = Number(process.argv[2]) || 15;
  console.log(fizzBuzz(n).join("\n"));
}

module.exports = { fizzBuzz };
