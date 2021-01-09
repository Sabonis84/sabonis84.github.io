const mainEl = document.querySelector('.main')
let time = moment()
let currTime = time.format('DD-MM-YYYY HH:mm:ss')
console.log(currTime);
mainEl.innerHTML = `<div class="current-time">${currTime}</div>`