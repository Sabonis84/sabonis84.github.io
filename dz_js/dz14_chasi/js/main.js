const btnStartStopEl = document.querySelector('.but1');
const inputTimeEl = document.querySelector('.time');
const timerEl = document.querySelector('.timer');
const spinEl = document.querySelector('.icon-spin');
btnStartStopEl.disabled = true

let timeVal;
let id;

const runTimer = () => {
   console.log(Date.now());
   let currTime = moment();
   console.log(currTime.format('DD-MM-YYYY HH:mm:ss'));
    let destTime = moment(`${timeVal}`, 'HH:mm');
    
    if (moment(destTime).isBefore(currTime)) {
        console.log('+1');
        destTime.add(1, 'd');
    }
    
    diffTime = moment(destTime.diff(currTime)).utc();
    if (diffTime.isDST()) {
        difftime.substract(1, 'h');
    };
    
    timerEl.innerHTML = diffTime.format('HH:mm:ss');
    if (diffTime.format('HH:mm:ss') == '00:00:00') {
        clearInterval(id)
        spinEl.classList.remove('animate-spin')
    }

};

const runTimerId = () => {
    id = setInterval(runTimer, 1000);
};

btnStartStopEl.addEventListener('click', () => {
   spinEl.classList.add('animate-spin')
});


inputTimeEl.addEventListener('input', (ev) => {
    timeVal = ev.target.value;
    console.log(ev.target.value);
    if (ev.target.value != "") {
        btnStartStopEl.disabled = false
        btnStartStopEl.addEventListener('click', runTimerId)
        
    } else {
        btnStartStopEl.disabled = true
        btnStartStopEl.addEventListener('click', runTimerId)
        
    }
});



  

   // const arr = diffTime.format('HH:mm:ss').split(":");
