
const butEl = document.querySelector('.btn');
let str = '';


butEl.addEventListener('click', (bbb) => {
  const textEl = document.querySelector('textarea').value;
    const arr = textEl.split(" ");
    for(let i=0; i< arr.length; i++) {
      str = `${str}<input placeholder="${arr[i]}">`
    }
  document.querySelector('.main').innerHTML = str
  // console.dir(textarea);
  console.log(textEl);
})

