// Count how often each word appears.
function wordCount(text) {
  const counts = {};
  for (const w of text.toLowerCase().match(/[a-z']+/g) || []) {
    counts[w] = (counts[w] || 0) + 1;
  }
  return counts;
}

module.exports = { wordCount };
