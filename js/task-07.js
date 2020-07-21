const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const isLoginLength = login.length;
  if (isLoginLength >= 4 && isLoginLength <= 16) {
    return true;
  }
  alert("Ошибка! Логин должен быть от 4 до 16 символов");
};

const isLoginUnique = function (allLogins, login) {
  const isInArray = allLogins.includes(login);

  return !isInArray;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return;
  }

  if (!isLoginUnique(allLogins, login)) {
    alert("Такой логин уже используется!");
    return;
  } else {
    allLogins.push(login);
    alert("Логин успешно добавлен!",allLogins);
    return allLogins;
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
