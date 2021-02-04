// задание 1
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};


const genArr = (rows, columns, min, max) => {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < columns; j++) {
      arr[i][j] = randomInt(min, max); 
    };
  };
  return arr;
};
const arr = genArr(5, 5, 0, 12);
console.table(arr)

// задание 2
let sumMain = null;
for (let i = 0; i < arr.length; i++) {
  sumMain +=  arr[i][i]
};
console.log('Сумма чисел главной диагонали =', sumMain);
// задание 3
sumDop = null;
for (let i = 0; i < arr.length; i++) {
  sumDop +=  arr[arr.length - i - 1][i]
};
console.log('Сумма чисел дополнительной диагонали =', sumDop);
// задание 4

  let newArr1 = [];
  let newArr2 = [];
  for (let i = 0; i < arr.length; i++){
    newArr1[i] = arr[i][1];
    newArr2[i] = arr[i][2];
    arr[i][1] = newArr2[i];
    arr[i][2] = newArr1[i]
   };

 console.table(arr);
 // задание 5
 











// // let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   let newArr1 = [];
//   arr[i][i] = newArr1[i][i];
//   // arr[i][2] = newArr2;

// };

// console.log(newArr1);



























// let arr = [
//   [20,  2,   7,   19,  4],
//   [16,  14,  12,  17,  15],
//   [15,  19,  2,   14,  6],
//   [7,   3,   15,  7,   14],
//   [9,   0,   20,  1,   12],
// ];
//   // arr[0][4] *= 3;
//   // arr[1][3] *= 3;
//   // arr[2][2] *= 3;
//   // arr[3][1] *= 3;
//   // arr[4][0] *= 3;


// console.table(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[arr.length - i][i] *= 3;
//  };









// // const arr = [1, 3, 16, 65, 44, 32];
// let arr = [[1, 2], [4, 5], [3, 87], [1, 34], [98, 12], [0, 33]];

// for (let i = 0; i < arr.length; i++) {
//   arr[i][0] *= 3;
// }
// console.table(arr)



// // console.log (sum)
// // let sum = null;