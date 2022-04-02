'use strict';

let lessNumber;
// const showAlert = () => {
//   let win = alert('Вы угадали число!');
//   let lessNumber = alert('Загаданное число меньше!');
//   let biggerNumber = alert('Загаданное число больше!');
//   let notNumber = alert('Введите число!');
// };

const isNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
};

const randomInteger = () => {

};

const guessGame = () => {
  alert('Загадывание случайного числа от 1 до 100');
  let counter = 1;
  let usersNumber = +prompt('Угадай число от 1 до 100');
  let rand = Math.floor(Math.random() * 100); // возвращает случайное целое число от 0 до 99
  console.log(typeof rand);


  const round = () => {

    counter++;
    if (usersNumber === null) {
      alert('Сыграем в другой раз!');
    } else if (!isNumber(usersNumber)) {
      alert('Это не число! Пожалуйста, введите число');

    } else if (usersNumber > rand) {
      alert('Загаданное число меньше!');
      usersNumber = +prompt('Введите другое число');
      round();
    } else if (usersNumber < rand) {
      alert('Загаданное число больше!');
      usersNumber = +prompt('Введите другое число');
      round();
    } else if (usersNumber === rand) {
      usersNumber = +alert('Вы угадали число! Тебе понадобилось ' + counter + ' попытки');
    }
    // round();
  };
  round();
};
// randomInteger(1, 100);
guessGame();



// function getNumber(rand) {
//   if (usersNumber === rand) {
//     alert('Вы угадали!');
//   } else if (usersNumber > rand) {
//     alert('Загаданное число меньше!');
//     usersNumber = prompt('Введите число снова');
//     return;
//   } else if (usersNumber < rand) {
//     alert('Загаданное число больше!');
//     usersNumber = prompt('Введите число снова');
//     return;
//   } else if (!isNumber(usersNumber)) {
//     alert('Введите число!');
//     usersNumber = prompt('Введите число снова');
//     return;
//   } else {
//     return;
//   }
// }



// // console.log(randomInteger(1, 100));
// console.log(getNumber());



// const getUsersNumber = function () {
//   do {
//     usersNumber = +prompt('Сколько будет стоить данная работа?');
//   } while (!isNumber(usersNumber)); {
//     return;
//   }
// };