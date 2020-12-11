const val = 501;

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

let min = -200000;
let max = 200000;
let curr = null;

do {
  curr = randomInt(min, max);
  if (curr === val) {
    console.log('значение найденно!');
  } else if (curr < val) {
    min = curr + 1;
    console.log(`curr: ${curr} < val`)
  }else if (curr > val) {
    console.log(`curr: ${curr} > val`);
    max = curr - 1;}
 
} while (curr != val)
























// let foundNum = 5;


// let round = 0;
// let str = '';
// let minStart = 1;
// let maxStart = 10;

// const randomInt = (min, max) => {
//   let rand = min + Math.random() * (max + 1 - min);
//    return Math.floor(rand);
//   };
//  let randomNum = randomInt(minStart, maxStart);

//  while (randomNum === foundNum ) {
//     round = round + 1;
//       if (randomNum < foundNum) {
//       minStart = randomNum;
//       str = `${str} Число меньше`;
//     } else if (randomNum > foundNum) {
//       maxStart = randomNum;
//       str = `${str} Число больше`;
//     } else if (randomNum === foundNum ){
//     str = `${str} вы угадали`;}
//   } 
  
//   console.log(minStart, maxStart, randomNum, round)
  // if (randomNum > foundNum ) {
  // str = `${str} Число больше`;
  // } else if (randomNum < foundNum ){
  // str = `${str} Число меньше`
  
  // } else if (randomNum === foundNum){
  //   str = `${str} выугадали`
  // }

  
 


  
    
 



// maxStart = randomInt(minStart, maxStart)
// maxStart = randomInt(minStart, maxStart);

// str = `${str} <div>Round${round} - Данное число больше`;
// minStart = (randomNum + maxStart) / 2