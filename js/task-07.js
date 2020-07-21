const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
// login.length = 45;





 
//  if ((isLength >=4)&&(isLength<=16)) {
//    return true;
//  }
//  return false;
// }
//  isLoginValid('gjkhnlkm;l,;ljjjjjjjjjjjjjjjj');
// //   if ((loginLength>=4)&&(loginLength<=16)){
//    alert('ok');
//    return true;}
//    else {
//      alert ('c 4 do 16');return false;
//    }
//   }

const isLoginUnique = function(allLogins, login) {

 const isInArray = allLogins.includes(login);

 return !(isInArray);
 }


const addLogin = function(allLogins, login) {

// if (isLoginValid() !== true) {
// alert ('не валиден');
// return;
//  } 
// else 
if (isLoginUnique() !== true) {
alert ('такой логин есть');
return;
} else {

allLogins.push(login);
alert (allLogins);
return allLogins;
}
}

console.log(addLogin(logins,"Ajax")); // 'Логин успешно добавлен!'
// // console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// // console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// // console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'  



