// Capitalize the first letter of every word.
function capitalizeWords(text) {
  return text
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

module.exports = { capitalizeWords };

if (require.main === module) {
  console.log(capitalizeWords("hello wORLD from js"));
}
