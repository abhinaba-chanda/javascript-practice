// Factorial two ways.
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function factorialRec(n) {
  return n <= 1 ? 1 : n * factorialRec(n - 1);
}

module.exports = { factorialLoop, factorialRec };
