// const currentTimeEl = document.querySelector('.current-time')
// let id;
// const runTime = () => {
//     id = setInterval( () => {
//         let time = moment()
//         let currTime = time.format('DD-MM-YYYY HH:mm:ss')
//         console.log(currTime);
//         currentTimeEl.innerHTML = `${currTime}`
//     }, 1000);
// };
// runTime();
const freePlaces = (arr) => {
    let places = 0;
    arr.forEach(element => {
        if (element.occupied) places += 1;
    });
    return places;
    
    }