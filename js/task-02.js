"use strict";

const total = 100;
const ordered = 120;

const answer =
  ordered > total
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(answer);
