'use strict';

const guessGame = () => {
  alert('Загадывание случайного числа от 1 до 100');
  let usersNumber = +prompt('Угадай число от 1 до 100');
  let rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1; // возвращает случайное целое число от 1 до 100
  let counter = 10;

  const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
  };

  const tryCounter = () => {
    counter--;
    alert('Осталось ' + counter + ' попыток');
    if (counter === 0) {
      confirm('Вы израсходовали все попытки! Ходите сыграть снова? :(');
      guessGame();
    } else {
      return;
    }
    return counter;
  };

  console.log(rand);

  const round = () => {
    tryCounter();
    if (!isNumber(usersNumber)) {
      usersNumber = +prompt('Это не число! Пожалуйста, введите число');
      round();
    } else if (usersNumber === 0) {
      alert('Сыграем в другой раз!');
    } else if (usersNumber > rand) {
      usersNumber = +prompt('Загаданное число меньше! Введите другое число');
      round();
    } else if (usersNumber < rand) {
      usersNumber = +prompt('Загаданное число больше! Введите другое число');
      round();
    } else if (usersNumber === rand) {
      usersNumber = +confirm('Вы угадали число! Поздравляем! В запасе оставалось ' + counter + ' попытки.\nХотите сыграть снова?');
      guessGame();
    }
  };
  round();
};

guessGame();