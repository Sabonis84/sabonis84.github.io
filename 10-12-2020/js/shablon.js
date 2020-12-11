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
  // сумма всех значений масиива
  let sum = null; // здесь будет какое то число
  for (let i = 0; i < arr.length; i++) { 
  sum = sum + arr[i]
  }
///////////////////////
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
document.querySelector('.main').innerHTML = str;  // вывод в браузер (в див main)
////////////////////////////////////////////
a += c //  a = a + c
a *= c // a = a * c
a /= c // a = a / c
//////////////////////////////////////////
// функция сjздания 2 мерного массива
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getArray = (rows, columns, min, max) => {
  let arr = [];                                // []
  for (let i = 0; i < rows; i++) {
      arr[i] = [];                            // [[], [], [], [], []]
      for (let j = 0; j < columns; j++) {
          arr[i][j] = randomInt(min, max);    // [[4, 8, 12, 0, 9], [], ...]
      };
  };
  return arr;
};
/////////////////////////////////////////////////////////
// копирование 2 мерных массивов

const copy2DArr = (arrIn) => {
  let arr = [];
  for (let i = 0; i < arrIn.length; i++) {
      arr[i] = [];
      for (let j = 0; j < arrIn[i].length; j++) {
          arr[i][j] = arrIn[i][j];
      };
  };
  return arr;
};
/////////////////////////////////


















