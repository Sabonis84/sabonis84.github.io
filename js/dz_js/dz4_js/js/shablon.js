// генератор случайных чисел
const randomInt = (min, max) => {
    // случайноае число от min до max
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  console.log(randomInt(4, 35))
//////////////////////////////////////////////

// генератор случайного массива, где len - количество индексов min - минимальное значение max - максимальное значение

const randomInt = (min, max) => {
    // случайноае число от min до max
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  
  const genArr = (len, min1, max1) => {
    let arr = [];
    for (let i = 0; i<len; i++) {
      arr.push(randomInt(min1, max1));
    };
    return arr;
  }
  console.log(genArr(4, 6, 15));
  
  ////////////////////////////////////////////////////////
  const value = (arr) => {
    for (let i = 1; i < arr.length; i++) {}; // перебор индексов массива
  };
  //////////////////////////////////
  // копирование массивов, с генерацией
  const randomInt = (min, max) => {
    // случайноае число от min до max
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

const genArr = (len, min1, max1) => {
  let arr = [];
  for (let i = 0; i<len; i++) {
    arr.push(randomInt(min1, max1));
  };
  return arr;
};

const fixArr = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    newArr[i] = array[i];
    newArr[i] = newArr[i] + ((newArr[i]*3) - 5);
  };
  
  return newArr;
};

let arr = genArr(8, 1, 12);
let arr1 = fixArr(arr);
console.log(arr, arr1);
//////////////////////////////////////////////
