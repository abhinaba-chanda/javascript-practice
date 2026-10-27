// Vowel counter
// Counts the vowels in a sentence.
// Practice: strings, regex, the match() method.
// Run: node vowel-count.js "Visca Barca"

function countVowels(text) {
  const matches = text.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

if (require.main === module) {
  const text = process.argv[2] || "Hello from Abhinaba";
  console.log(`"${text}" has ${countVowels(text)} vowels`);
}

module.exports = { countVowels };
