const formatString = function(string) {
  let arrayItemLength;
  for (const char of string) {
    arrayItemLength = string.length;
  }
  if (arrayItemLength <= 40) {
    return string;
  } else {
    const changedString = string.slice(0, 40);
    const result = changedString + "...";

    return result;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
