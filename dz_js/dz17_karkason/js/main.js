const arrEls = document.querySelectorAll('.arr')
const cubEl = document.querySelector('.main-cub')
const typeLeft = 5;
const arrCardTypes = ['a', 'b', 'c'];
let startCardDeck = [];
let shuffledCardDeck = [];


const randomInt = (min, max) => {
    // случайноае число от min до max
    return Math.floor(Math.random() * (max - min + 1) + min)
  };
console.log(randomInt(1, 15))

const createCardDeck = () => {
    let arrTemp = [];
    for (let i = 0; i < arrCardTypes.length; i++) {
        for(let j = 0; j < typeLeft; j++) {
            arrTemp.push(arrCardTypes[i]);
        }
    }
    return arrTemp;
}


 

 const shuffleCardDeck = (arr) => {
     const arrTemp = [];
     let randomIndex = null;
     let randomElem = null;
     const count = arr.length;

     for (let i = 0; i < count; i++) {
         randomIndex = randomInt(0, arr.length - 1);
         randomElem = arr.splice(randomIndex, 1);
         console.log(randomIndex, randomElem)
         arrTemp.push(randomElem)
     };
     return arrTemp
} ;

startCardDeck = createCardDeck();
shuffledCardDeck = shuffleCardDeck(startCardDeck);
arrEls[0].innerHTML = shuffledCardDeck.join(',');

//генерация игрового поля

// let str = '';
// for (let i = 0; i < 64; i++) {
//   str = `${str} <div class="cub"id=${i}></div>`
// }

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
    let str = '';
    str = `${str} <div class="cub"id=${i}></div>`
document.querySelector('.playfield').innerHTML = str
    }
}

// добавление карт в main-cub
// cubEl = shuffledCardDeck

