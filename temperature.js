// Temperature converter
// Celsius <-> Fahrenheit, rounded to 1 decimal place.
// Practice: functions, numbers, toFixed, process.argv.
// Run: node temperature.js 30 C

function cToF(c) {
  return Number((c * 9 / 5 + 32).toFixed(1));
}

function fToC(f) {
  return Number(((f - 32) * 5 / 9).toFixed(1));
}

if (require.main === module) {
  const value = Number(process.argv[2] ?? 30);
  const unit = (process.argv[3] || "C").toUpperCase();
  if (unit === "C") console.log(`${value}°C = ${cToF(value)}°F`);
  else console.log(`${value}°F = ${fToC(value)}°C`);
}

module.exports = { cToF, fToC };
