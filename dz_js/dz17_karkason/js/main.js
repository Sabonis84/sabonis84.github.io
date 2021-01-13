const card1 = 'a';
const card2 = 'b';
const card3 = 'c';
const arrCardTypes = [];
arrCardTypes.length = 30;
let count = 0;
let countA = 0;
let countB = 0;
let countC = 0;

const randomInt = (min, max) => {
    // случайноае число от min до max
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    };


const addCard = () => {
    for ( let i=0; i < arrCardTypes.length; i++) {
    let x = randomInt(1,3);
    count +=1
    console.log(x)
    if( x === 1 && countA < 10 ) {
        x = card1;
        arrCardTypes.push(x)
    } else if ( x === 2 && countB < 10 ) {
        x = card2;
        arrCardTypes.push(x)
    } else if (x === 3 && countC < 10 ) {
        x = card3;
        arrCardTypes.push(x)
    }
      
}
}
console.log (arrCardTypes)