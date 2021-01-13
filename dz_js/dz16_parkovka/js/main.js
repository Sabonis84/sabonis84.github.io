const places = 33;


/// Timer

const currentTimeEl = document.querySelector('.current-time')
let id;
const runTime = () => {
    id = setInterval( () => {
        let time = moment()
        let currTime = time.format('DD-MM-YYYY HH:mm:ss')
        currentTimeEl.innerHTML = `${currTime}`
    }, 1000);
};
runTime();

const freeSpacesEl = document.querySelector('.free-spaces')
const occupiedSpacesEl = document.querySelector('.occupied-spaces')

// generate arr

const arrPlaces = [];
const generatePlaces = () => {
    for(let i = 0; i < places; i++) {
        arrPlaces.push({
            id: i,
            occupied: false,
            time: '--:--', 
        });
    }
};

generatePlaces();

const occuPlaces = (arr) => {
    return arrPlaces.reduce((sum, val) => {
        if(val.occupied) sum += 1;
        return  sum;
    }, 0);
};

const refreshBoard = () => {
    let temp = occuPlaces();
    occupiedSpacesEl.innerHTML = `Occupied:${temp}`;
    freeSpacesEl.innerHTML = `Free:${arrPlaces.length - temp}`;
}
refreshBoard();

const mainEl = document.querySelector('.main')
const renderParkPlaces = () => {
    mainEl.innerHTML = arrPlaces.reduce((str, el) => {
        return `${str}
        <div id="${el.id}" class="parking-space">
        ${el.id}<br>
        ${el.occupied ? 'occupied' : 'free'} <br>
        ${el.time}
        </div>
        `;

    }, '')
}
renderParkPlaces();

const modalEl = document.querySelector('.modal')
const carInEl = document.querySelector('.car-in')
const carOutEl = document.querySelector('.car-out')
const overlayEl = document.querySelector('.overlay')
const btnCloseEls = document.querySelectorAll('.modal-close')
const inputFromTimeEl = document.querySelector('.from-time')
const btnOkEl = document.querySelector('.btn-ok')
const btnYesEl = document.querySelector('.btn-yes')
const btnNoEl = document.querySelector('.btn-no')
const occuTimeEl = document.querySelector('.occu-time')



const modalShowRemover = () => {
    carInEl.classList.remove('modal-show')
        carOutEl.classList.remove('modal-show')
        overlayEl.classList.remove('modal-show')
};

btnCloseEls.forEach(element => {
    element.addEventListener('click', modalShowRemover)
});

mainEl.addEventListener('click', (ev) => {
    if (ev.target.id !== '') {
    let i = Number(ev.target.id);
    console.log(arrPlaces[i])
      if(!arrPlaces[i].occupied) {
        carInEl.classList.add('modal-show');
        overlayEl.classList.add('modal-show');
        inputFromTimeEl.value = moment().format('HH:mm');

        const clickBtnOk = () => {
            arrPlaces[i].time = inputFromTimeEl.value;
            arrPlaces[i].occupied = true;
            modalShowRemover();
            renderParkPlaces();
            refreshBoard();
            btnOkEl.removeEventListener('click', clickBtnOk);
        }
        btnOkEl.addEventListener('click', clickBtnOk);
    } else {
        carOutEl.classList.add('modal-show')
        overlayEl.classList.add('modal-show')
        let currTime = moment();
        let destTime = moment(arrPlaces[i].time, 'HH:mm')
        occuTimeEl.innerHTML = moment(currTime - destTime).utc().format('HH:mm')

        
        const clickBtnYes = () => {
            
            arrPlaces[i].time = '--:--';
            arrPlaces[i].occupied = false;
            modalShowRemover();
            renderParkPlaces();
            refreshBoard();
            btnYesEl.removeEventListener('click', clickBtnYes);
         }
         const clickBtnNo = () => {
            modalShowRemover();
            renderParkPlaces();
            btnNoEl.removeEventListener('click', clickBtnYes);
         }
         btnYesEl.addEventListener('click', clickBtnYes);
         btnNoEl.addEventListener('click', clickBtnNo)
    }
 }
})