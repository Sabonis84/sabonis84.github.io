round = null;
str = '';
const ship1 = {
  hp: 100,
  damage: 4,
}
const ship2 = {
  hp: 40,
  damage: 15
}

while (ship1.hp > 0 && ship2.hp > 0) {
  round += 1;
  ship1.hp = ship1.hp - ship2.damage;
  ship2.hp = ship2.hp - ship1.damage;
  str = `${str} <div>Round№${round} Ship1 HP: - ${ship1.hp} Ship2 HP: - ${ship2.hp}</div>`;
};

if (ship1.hp > 0) {
  str = `${str} выиграл Ship1!`;
} else if (ship2.hp > 0) {
  str = `${str} Выиграл Ship2`;
}

document.querySelector('.main').innerHTML = str


