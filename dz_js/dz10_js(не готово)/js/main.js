const textEl = document.querySelector('textarea');
const butEl = document.querySelector('.btn');
let str = '';
butEl.addEventListener('click', (bbb) => {
    str = `${str} Lorem ipsum wetrew werwer`;
  document.querySelector('textarea').innerHTML = str
  console.dir(bbb);
})