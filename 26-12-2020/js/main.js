// const randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

// const getArray = (rows, columns, min, max) => {
//     let arr = [];                                // []
//     for (let i = 0; i < rows; i++) {
//         arr[i] = [];                            // [[], [], [], [], []]
//         for (let j = 0; j < columns; j++) {
//             arr[i][j] = randomInt(min, max);    // [[4, 8, 12, 0, 9], [], ...]
//         };
//     };
//     return arr;
//   };

//  const newArr = getArray(5, 5, 0, 12)
//   console.dir(newArr)



  const size = 5;
  const arr = [];
      for (let i = 0; i < size; i++) {
          arr[i] = [];
          for (let j = 0; j < size; j++){
              arr[i][j] = 1;
          }
      }

  
  const fillArr = (zero) => {
      arr.forEach(item => {
        item.forEach(el => {
           el = zero;
        })
      })
  }

fillArr(null);
console.log(arr);


