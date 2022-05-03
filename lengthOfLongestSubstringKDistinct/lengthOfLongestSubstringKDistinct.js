function longestSubstringWithK(k, s) {
  let start = 0;
  let maxLength = 0;
  let charFrequency = {};

  for (let i = 0; i < s.length; i++) {
    const rightChar = s[i];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[start];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      start++;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(longestSubstringWithK(2, "araaci"));
console.log(longestSubstringWithK(1, "araaci"));
console.log(longestSubstringWithK(3, "cbbebi"));
