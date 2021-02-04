// задание 1
// const genArr = () => {
//   return [4, 6, 3, 7, 2, 7, 34, 6, 8];
// };

// const fixArr = (index, array) => {
//   if (array[index] !== (array[index - 1] + array[index + 1])) {
//     array[index] = (array[index - 1] + array[index + 1])
//   };
//   return array;
// };
// let arr = genArr();
// fixArr(2, arr);
// fixArr(5, arr);
// fixArr(7, arr);

// console.log(arr);

// задание 2
// const randomInt = (min, max) => {
//   // случайноае число от min до max
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// };

// const genArr = (len, min1, max1) => {
//   let arr = [];
//   for (let i = 0; i<len; i++) {
//     arr.push(randomInt(min1, max1));
//   };
//   return arr;
// };

// const minvalue = (arr) => {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     };
//   };
  
//   return min;
// };

// const decrElem = (index, array, diff) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++){
//     newArr[i] = array[i];
//     };
//   newArr[index] = newArr[index] - diff;
//   return newArr;
// };


// const arr = genArr(7, 3, 8);
// let min1 = minvalue(arr);
// let arr1 = decrElem(0, arr, min1);
// let lastEl = arr.length - 1;
// arr1 = decrElem(lastEl, arr, min1);
// console.log(arr, arr1);

// задание 3

// const randomInt = (min, max) => {
//     // случайноае число от min до max
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   };

// const genArr = (len, min1, max1) => {
//   let arr = [];
//   for (let i = 0; i<len; i++) {
//     arr.push(randomInt(min1, max1));
//   };
//   return arr;
// };

// const fixArr = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++){
//     newArr[i] = array[i];
//     newArr[i] = newArr[i] + ((newArr[i]*3) - 5);
//   };
  
//   return newArr;
// };

// let arr = genArr(8, 1, 12);
// let arr1 = fixArr(arr);
// console.log(arr, arr1);

// задача 4
const randomInt = (min, max) => {
  // случайноае число от min до max
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const genArr = (len, min1, max1) => {
  let arr = [];
  let arr1 = [];
  for (let i = 0; i<len; i++) {
    arr.push(randomInt(min1, max1));
    arr1.push(randomInt(min1, max1));
  };
  return arr, arr1;
};

const fixArr = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    newArr[i] = array[i];
    newArr[1] = arr1[1];
    newArr[len -1] = arr1[len -1];
        if (len % 2 === 0) {
      newArr[len / 2] = arr1[len / 2];
        };
        
  };
    return newArr;
};

let len = 10;
let arr = genArr(len, 1, 12);
let arr1 = genArr(len, -5, 32);
let arr2 = fixArr(arr);
console.log(arr, arr1, arr2);


// const fixArr = (index, array) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[len - 1]= arr1[len - 1];
//     arr[len / 2] = arr1[len / 2];
//   };
//   return arr;
// }
// console.log(len, arr);
// let elem1 = fixArr([index - 1], arr)



// // задание 1
// const arr = [5, 6, 45, 23, 5, 7, 23, 8, 3];
// if (arr[2] = arr[1] + arr[3]) {
//   arr[2]=arr[2];
// } 
// arr[2] = arr[1] + arr[3];
// if (arr[5] = arr[4] + arr[6]) {
//   arr[5]=arr[5];
// } 
// arr[5] = arr[4] + arr[6];
// if (arr[7] = arr[6] + arr[8]) {
//   arr[7]=arr[7];
// } 
// arr[7] = arr[6] + arr[8];

// console.log(arr)

// // задание 2 (поиск меньшего числа)
// const arr = [10, 8, 2, 94, 15, 34];
// let min = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < arr[0]) {
//      min = arr[i];
//   };
// };
// arr[0] = arr[0] - min;
// arr[5] = arr[5] - min; 
// console.log(arr);

// задание 3
//  const arr = [23, 4, 11, 7, 8];
//  const arr2 = [];
//  for (let i = 0; i < length.arr; i++) {
//     arr[i] = arr2[i];
//   // arr2[i] = arr2[i] + ((arr[i]*3) - 5);
//  };
 
//  console.log(arr);
//  console.log(arr2);


