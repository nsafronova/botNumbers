'use strict';

const guessGame = () => {
  // alert('Загадывание случайного числа от 1 до 100');

  let rand = Math.floor(Math.random() * 100) + 1; // возвращает случайное целое число от 1 до 100
  let counter = 10;
  let usersNumber = prompt('Угадай число от 1 до 100').trim();

  const isNumber = () => {
    return !isNaN(parseFloat()) && isFinite(); //лучшая проверка на число 
  };

  // console.log(rand);

  const round = () => {
    if (usersNumber === null) {
      alert('Сыграем в другой раз!');
    } else if (isNaN(usersNumber) || usersNumber == '') {
      usersNumber = prompt('Это не число! Пожалуйста, введите число');
      round();

    } else {
      if (usersNumber === rand) {
        usersNumber = +confirm('Вы угадали число! Поздравляем! В запасе оставалось ' + counter + ' попытки.\nХотите сыграть снова?');
        if (usersNumber) {
          guessGame();
        } else {
          alert('Сыграем в другой раз!');
        }
      } else if (usersNumber > rand) {
        counter--;
        usersNumber = +prompt('Загаданное число меньше! Осталось ' + counter + ' попыток. Введите другое число');

        round();
      } else if (usersNumber < rand) {
        counter--;
        usersNumber = +prompt('Загаданное число больше! Осталось ' + counter + ' попыток. Введите другое число');
        round();
      } else if (counter == 0) {
        counter = confirm('Вы израсходовали все попытки! Ходите сыграть снова?'); {
          if (counter) {
            guessGame();
          } else {
            alert('Сыграем в другой раз!');
          }
        }
      }
    }
  };
  round();
};

guessGame();