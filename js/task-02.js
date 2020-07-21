const calculateEngravingPrice = function (message, pricePerWord) {
  let count;
  const wordCounter = message.split(" ");
  for (const items of wordCounter) {
    let result = wordCounter.length * pricePerWord;
    return result;
  }
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
