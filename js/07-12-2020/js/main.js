let arr = [
  [20,  2,   7,   19,  4],
  [16,  14,  12,  17,  15],
  [15,  19,  2,   14,  6],
  [7,   3,   15,  7,   14],
  [9,   0,   20,  1,   12],
];
  // arr[0][4] *= 3;
  // arr[1][3] *= 3;
  // arr[2][2] *= 3;
  // arr[3][1] *= 3;
  // arr[4][0] *= 3;


console.table(arr);

for (let i = 0; i < arr.length; i++) {
  arr[arr.length - i][i] *= 3;
 };









// // const arr = [1, 3, 16, 65, 44, 32];
// let arr = [[1, 2], [4, 5], [3, 87], [1, 34], [98, 12], [0, 33]];

// for (let i = 0; i < arr.length; i++) {
//   arr[i][0] *= 3;
// }
// console.table(arr)



// // console.log (sum)
// // let sum = null;