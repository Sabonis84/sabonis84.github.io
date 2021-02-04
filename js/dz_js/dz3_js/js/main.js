let start = 9991999;
let maxNums = 2;

const chekNums = (num) => {
  for (let i = 3; i <= num; i = i + 2) {
    if (num % i === 0) return true;
  }
  return false;
}
  

const findNum = (strt) => {
  let radius = 0;
  let foundNums = 0;
  let str = '';
  while (foundNums < maxNums) {
    if (chekNums(strt + radius)) {
      strt = `${strt} ${strt + radius}`;
      foundNums += 1;
    };
    if (chekNums(strt - radius)) {
      strt = `${strt} ${strt - radius}`;
      foundNums += 1;
    }
    radius = radius + 1;
  };
  return str;
}
let simpleNums = findNum(start);
console.log(simpleNums);






// let a = '';
// const chekOn = (num) => {
//   for (let i = 3; i < num; i = i + 2) {
//     if (num % i === 0) return true;
//     return a = `${a} ${i}`
//   };
  
//   return false;
// };
// console.log(chekOn(31));