// Задание 1.a
const arr = [5, 23, -110, 3, 18, 0, 14];
arr.forEach((elem) => {
  if (elem % 2 !== 0) {
    console.log(`Задание 1.a: `, elem)
  }
})

// Задание 1.b
const upArr = arr.map((elem) => {
  return elem + 20;
})
console.log(`Задание 1.b: `, upArr)
// Задание 1.c
const positiveArr = arr.filter((elem) => {
  return elem % 2 !== 0 && elem > 0;
})
console.log (`Задание 1.c: `, positiveArr)
// Задание 1.d
const res = arr.reduce((sum, elem) => {
  return sum + elem % 3;
});
console.log (`Задание 1.d: `, res)
// Задание 1.e
const poisk = arr.includes(5);
console.log (`Задание 1.e: `, poisk)
// Задание 2.f
const elem1 = arr.shift()
console.log (`Задание 2.f: `, arr, `удаленный 1-й элемент: `, elem1)
// Задание 2.g
const numArr = arr.sort((a, b) => {
  return a - b
})
console.log (`Задание 2.g: `, numArr)
// Задание 2.h
const numKrat = arr.some((elem) => {
  return elem % 5 === 0;
});
console.log (`Задание 2.h: `, numKrat)