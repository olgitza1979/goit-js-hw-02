"use strict";

let total = 0;
let message;

do {
    message = prompt ("Введите число");
    if (Number.isNaN (+message)) {
        alert ("Вы ввели не число, повторите");
    }
    else {
        total += +message;
          }
        }
while (message !== null);
alert (total);
