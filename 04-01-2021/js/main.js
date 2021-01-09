const currentTimeEl = document.querySelector('.current-time')
let id;
const runTime = () => {
    id = setInterval( () => {
        let time = moment()
        let currTime = time.format('DD-MM-YYYY HH:mm:ss')
        console.log(currTime);
        currentTimeEl.innerHTML = `${currTime}`
    }, 1000);
};
runTime();
