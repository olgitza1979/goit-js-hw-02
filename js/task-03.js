const findLongestWord = function (string) {
  const wordCounter = string.split(" ");

  let longerWord = wordCounter[0];

  for (let i = 1; i < wordCounter.length; i += 1) {
    if (longerWord.length < wordCounter[i].length) {
      longerWord = wordCounter[i];
    }
  }
  return longerWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
