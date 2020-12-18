// const textEl = document.querySelector('textarea');
let butEl = document.querySelector('.mbt');
let inputverhEl = document.querySelector('.verh');
let inputnizhEl = document.querySelector('.niz');


let str = '';
 let num1 = Number(inputverhEl.value)
 let num2 = Number(inputnizhEl.value)
butEl.addEventListener('click', (bbb) => {
    sum = num1 + num2;
    str = `${sum}`;
})

document.querySelector('.green').innerHTML = str

