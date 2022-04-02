'use strict';

const guessGame = () => {
  alert('Угадай число от 1 до 100');
  let rand = Math.floor(Math.random() * 100) + 1; // возвращает случайное целое число от 1 до 100
  let counter = 10;

  const round = () => {
    let usersNumber = prompt('Введите число').trim();
    if (usersNumber === null)
      alert('Сыграем в другой раз!');

    else if (isNaN(usersNumber) || usersNumber == '') {
      ('Это не число!');
      round();
    } else {
      if (counter == 0) {
        counter = confirm('Вы израсходовали все попытки! Ходите сыграть снова?');
        if (counter)
          guessGame();
        else
          alert('Сыграем в другой раз!');

      }
      if (usersNumber == rand) {
        usersNumber = confirm('Вы угадали число! Поздравляем! В запасе оставалось ' + counter + ' попытки.\nХотите сыграть снова?');
        if (usersNumber)
          guessGame();
        else
          alert('Сыграем в другой раз!');

      }
      counter--;
      if (usersNumber > rand) {
        alert('Загаданное число меньше! Осталось ' + counter + ' попыток.Введите другое число');
      } else if (usersNumber < rand) {
        alert('Загаданное число больше! Осталось ' + counter + ' попыток. Введите другое число');
      }
      round();
    }
  };
  round();
};

guessGame();