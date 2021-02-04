



const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

let playerA = 100;
let playerB = 100;
round = null;
str = '';

while (playerA > 0 && playerB > 0) {
  round += 1;
  playerA = playerA - randomInt(1, 6);
  playerB = playerB - randomInt(1, 6);
  str = `${str} <div>Round№${round} Игрок1 - ${playerA} Игрок2 - ${playerB}</div>`;
};
  if (playerA > 0) {
    str = `${str} выиграл Игрок1!`;
  } else if (playerB > 0) {
    str = `${str} Выиграл Игрок2`;
  }

document.querySelector('.main').innerHTML = str



 














