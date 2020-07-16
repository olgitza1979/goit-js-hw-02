"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Введите пароль");
if (message !== null) {
  if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }
} else {
  message = "Отменено пользователем";
}
alert(message);
