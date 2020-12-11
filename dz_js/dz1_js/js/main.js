// xa2+xb+c=0
let a = 1;
let b = 2;
let c = 1;
let d = b*b-4*a*c;
let sumEl = document.querySelector('.main');

if (d > 0) {
let x1 = (-b+Math.sqrt(d))/(2*a);
let x2 = (-b-Math.sqrt(d))/(2*a);
let strOut = `корень1 = ${x1}; корень2 = ${x2};`
sumEl.innerHTML = strOut;
} else if (d===0) {
let x = -b/(2*a)
sumEl.innerHTML = `d=0, корень = ${x};`;
}
else if (d < 0) {
    sumEl.innerHTML = 'корней нет'
}



