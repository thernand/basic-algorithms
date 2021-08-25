/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
*/

Your response should be a number.

function findLongestWordLength(str) {
  const words = str.split(' ');
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].split('').length;
    if (wordLength > longest) {
      longest = wordLength;
      str = words[i].split('');
    }
  }
  return str.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
