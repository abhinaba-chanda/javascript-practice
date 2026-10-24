function isPalindrome(word) {
  const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === [...clean].reverse().join("");
}

["racecar", "hello", "A man, a plan, a canal: Panama"].forEach(w =>
  console.log(`${w} -> ${isPalindrome(w)}`)
);
