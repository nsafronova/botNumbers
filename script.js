'use strict';

const guessGame = () => {
  alert('Загадывание случайного числа от 1 до 100');
  let usersNumber = +prompt('Угадай число от 1 до 100');
  let rand = Math.floor(Math.random() * 100) + 1; // возвращает случайное целое число от 1 до 100
  let counter = 10;

  const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
  };

  const tryCounter = () => {
    --counter;
    if (counter == 0) {
      let conf = confirm('Вы израсходовали все попытки! Ходите сыграть снова? :(');
      if (conf) {
        guessGame();
      } else {
        alert('Сыграем в другой раз!');

      }
    }
  };

  console.log(rand);

  const round = () => {
    if (usersNumber == 0) {
      alert('Сыграем в другой раз!');
    } else if (!isNumber(usersNumber)) {
      usersNumber = +prompt('Это не число! Пожалуйста, введите число');
      round();
    } // else if (usersNumber === 0) {
    //   alert('Сыграем в другой раз!');
    //}
    else if (usersNumber > rand && usersNumber != 0) {
      usersNumber = +prompt('Загаданное число меньше! Осталось ' + counter + ' попыток. Введите другое число');
      tryCounter();
      round();
    } else if (usersNumber < rand && usersNumber != 0) {
      usersNumber = +prompt('Загаданное число больше! Осталось ' + counter + ' попыток. Введите другое число');
      tryCounter();
      round();
    } else if (usersNumber === rand && usersNumber != 0) {
      usersNumber = +confirm('Вы угадали число! Поздравляем! В запасе оставалось ' + counter + ' попытки.\nХотите сыграть снова?');
      if (usersNumber) {
        guessGame();
      } else {
        alert('Сыграем в другой раз!');
      }

    }
  };
  round();
};

guessGame();