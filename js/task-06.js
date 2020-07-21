const numbers = [];
let input;
let total = 0;
const count = function(input) {
  while (true) {
    input = prompt("Введите число");
    if (input === null) {
      total = 0;
      for (let number of numbers) {
        total += number;
      }
      
      alert(`Общая сумма чисел равна ${total},массив чисел состоит из: ${numbers}`);
      
      break;
    } else {
      input = Number(input);
      const notNumber = Number.isNaN(input);
      if (notNumber) {
        alert("Было введено не число, попробуйте еще раз");
        continue;
      }
    }
   numbers.push(Number(input));
   
  }

};

count();
