const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getArray = (rows, columns, min, max) => {
  const arr = {};                                // []
  for (let i = 0; i < rows; i++) {
      arr[i] = {};                            // [[], [], [], [], []]
      for (let j = 0; j < columns; j++) {
          arr[i][j] = randomInt(min, max);    // [[4, 8, 12, 0, 9], [], ...]
      };
  };
  return arr;
};

 arr = getArray(5, 5, 0, 12);
console.table(arr)




// // const arr = [1, 3, 16, 65, 44, 32];
// let arr = [[1, 2], [4, 5], [3, 87], [1, 34], [98, 12], [0, 33]];

// for (let i = 0; i < arr.length; i++) {
//   arr[i][0] *= 3;
// }
// console.table(arr)



// // console.log (sum)
// // let sum = null;