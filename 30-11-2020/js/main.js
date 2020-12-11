let a = 150;
// let b = 1;
// let c = 100;


const checkNum  = (a, b, c) => {
 if (a >= b) {
   if (a <= c) {
    a = 'true';
   }
    a = 'else';
 }
}
checkNum(1, 100)
console.log(a);






// let sum = 0;
// let count = 0;

// for (i = 7; i <= 100; i = i + 7){
  
//   sum = sum + i**2;
//   count += 1;
// }
// console.log(sum, count);






// const checkuch = (a,b,c) =>  a * b * c;
// let z = checkuch(10, 15, 3) + checkuch(20, 20, 4) + checkuch(100, 20, 1);
// console.log(z);

// const checkuc2 = (a,b,c) => { // второй участок
//   d = a * b * c;
//   }
//  checkuch1(20, 20, 4);
//  console.log(d);

//  const checkuc3 = (a,b,c) => { // третий участок
//   d = a * b * c;
//   }
//  checkuch1(100, 20, 1);
//  console.log(d);











// поиск числа 

// let start = 9991999;
// let maxNums = 2;

// const checkNums = (num) => {

// }

// const findSimpleNum = (strt) => {
//   let radius = 0;
//   let foundNums = 0;
//   let str = '';
//   while (foundNums < maxNums) {
//     if (checkNums(strt + radius)) {str = `${str} ${strt + radius}`;
//     foundNums += 1;
//   };
//     if (checkNums(strt - radius)) {str = `${str} ${strt + radius}`;
//     foundNums += 1;
//   };
//   radius = radius +1;

//   };
//   return str;
// };
// let simleNums = findSimpleNum (start);
// console.log(findSimpleNum);

// конец