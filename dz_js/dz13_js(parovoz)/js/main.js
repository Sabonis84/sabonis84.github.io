const btnLeftEl = document.querySelector('.btn-left');
const btnRightEl = document.querySelector('.btn-right');
const btnColorEl = document.querySelector('.btn-color');
const elemEl = document.querySelector('.elem');
const fonarEl = document.querySelector('.fonar');
elemEl.style.animationPlayState = 'paused';
console.log(elemEl.style);
// const currentLeft = getComputedStyle(elemEl).left


// let timeDuration = parseInt(currentLeft) * 4 / 240;
// const speed = parseInt(currentLeft) * 4 / 240;
// console.log(speed)
// console.log(getComputedStyle(elemEl).left)


btnColorEl.addEventListener('click', () => {
    fonarEl.classList.toggle('color1');
    fonarEl.classList.toggle('color2');
});

btnLeftEl.addEventListener('click', () => {
    elemEl.style.left = getComputedStyle(elemEl).left
    let timeDuration = parseInt(elemEl.style.left) *4 / 240;
    elemEl.style.animationDuration = `${timeDuration}s`;
    elemEl.classList.toggle('shift-l');  
    if(elemEl.style.animationPlayState === 'paused') {
                elemEl.style.animationPlayState = 'running';
            } else {
                elemEl.style.animationPlayState = 'paused'
            }
     console.log(timeDuration)       
     console.log(getComputedStyle(elemEl).left)       
})
btnRightEl.addEventListener('click', () => {
    elemEl.style.left = getComputedStyle(elemEl).left;
    let timeDuration = (240 - parseInt(elemEl.style.left)) / 240 * 4;
    elemEl.style.animationDuration = `${timeDuration}s`;
    elemEl.classList.toggle('shift-r');    
    if(elemEl.style.animationPlayState === 'paused') {
                elemEl.style.animationPlayState = 'running';
            } else {
                elemEl.style.animationPlayState = 'paused'
            }
            console.log(timeDuration)       
         console.log(getComputedStyle(elemEl).left)    
   
})
        

document.addEventListener('keydown', (ev) => {
    switch (ev.code) {
        case 'KeyF':
            fonarEl.classList.toggle('color1');
            fonarEl.classList.toggle('color2');
        break;
        case 'ArrowLeft':
            elemEl.style.left = getComputedStyle(elemEl).left;
            let timeDuration = parseInt(elemEl.style.left) *4 / 240;
            elemEl.style.animationDuration = `${timeDuration}s`;
            elemEl.classList.toggle('shift-l');  
            if(elemEl.style.animationPlayState === 'paused') {
            elemEl.style.animationPlayState = 'running';
            } else {
                elemEl.style.animationPlayState = 'paused'
            }
            console.log('Left');
            break;
        case 'ArrowRight':
            elemEl.style.left = getComputedStyle(elemEl).left;
            let timeDuration2 = (240 - parseInt(elemEl.style.left)) / 240 * 4;
            elemEl.style.animationDuration = `${timeDuration2}s`;
            elemEl.classList.toggle('shift-r');  
            if(elemEl.style.animationPlayState === 'paused') {
            elemEl.style.animationPlayState = 'running';
            } else {
                elemEl.style.animationPlayState = 'paused'
            }
            console.log('Right');
            break;

        
    }
});





// btnPlayEl.addEventListener('click', () => {
//     if(elemEl.style.animationPlayState === 'paused') {
//         elemEl.style.animationPlayState = 'running';
//     } else {
//         elemEl.style.animationPlayState = 'paused'
//     }
//     elemEl.style.left = getComputedStyle(elemEl).left;
// })
// btnRevEl.addEventListener('click', () => {
//     if(elemEl.style.animationPlayState === 'paused') {
//         elemEl.style.animationPlayState = 'running';
//     } else {
//         elemEl.style.animationPlayState = 'paused'
//     }
    
// })



// const refFunc = () => {
//     elemEl.style.left = getComputedStyle(elemEl).left;
//     elemEl.classList.toggle('shift-l');
//     elemEl.classList.toggle('shift-r');
// };

// btnRevEl.addEventListener('click', refFunc);
// btnPlayEl.addEventListener('click', refFunc)

// document.addEventListener('keydown', (ev) => {
//     switch (ev.code) {
//         case 'KeyF':
//         console.log('FFFFF');
//         refFunc();
//         break;
//         case 'ArrowLeft':
//             console.log('Left');
//             break;
//     }
// });