"use strict";
let total = 23580;
const pricePerDroid = 3000;

let message = prompt("Сколько дроидов вы хотите купить?");

if (message !== null) {
  let totalPrice = +message * pricePerDroid;
  if (totalPrice > total) {
    alert("Недостаточно средств на счету!");
  } else {
    total -= totalPrice;
    alert(`Вы купили ${message} дроидов, на счету осталось ${total} кредитов`);
  }
} else {
  alert("Отменено пользователем");
}
