"use strict";
let deliveryCost;
let message;
let country;

const countryInputValue = prompt("Введите страну");
switch (countryInputValue.toLowerCase()) {
  case "китай":
    country = "Китай";
    deliveryCost = 100;
    message = `'Доставка в ${country} будет стоить ${deliveryCost} кредитов'`;
    break;
  case "чили":
    country = "Чили";
    deliveryCost = 250;
    message = `'Доставка в ${country} будет стоить ${deliveryCost} кредитов'`;
    break;
  case "австралия":
    country = "Австралия";
    deliveryCost = 170;
    message = `'Доставка в ${country} будет стоить ${deliveryCost} кредитов'`;
    break;
  case "индия":
    country = "Индия";
    deliveryCost = 80;
    message = `'Доставка в ${country} будет стоить ${deliveryCost} кредитов'`;
    break;
  case "ямайка":
    country = "Ямайка";
    deliveryCost = 120;
    message = `'Доставка в ${country} будет стоить ${deliveryCost} кредитов'`;
    break;
  default:
    message = "Вашей страны нет в списке";
}
alert(message);
