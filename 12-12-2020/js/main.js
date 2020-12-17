
let str = '';
for (let i = 0; i < 144; i++) {
  str = `${str} <div class="cub"id=${i}>${i}</div>`
}
document.querySelector('.main').innerHTML = str
document.addEventListener('click', (e) => {
  console.log(event.target.style.backgroundColor = 'Yellow');
}) 