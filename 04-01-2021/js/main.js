const mainEl = document.querySelector('.main')
let id;
const runTime = () => {
    id = setInterval( () => {
        let time = moment()
        let currTime = time.format('DD-MM-YYYY HH:mm:ss')
        console.log(currTime);
        mainEl.innerHTML = `<div class="current-time">${currTime}</div>`
    }, 1000);
};
runTime();
