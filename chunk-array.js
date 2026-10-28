// Split an array into groups of a given size.
function chunk(arr, size) {
  if (size < 1) throw new Error("size must be >= 1");
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

module.exports = { chunk };
