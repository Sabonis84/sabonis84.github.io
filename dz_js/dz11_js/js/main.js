
let str = '';
let cont = null;
numEl = document.querySelector('.main')


for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    cont = cont + 1;
     if(i % 2 !==0 ) {
        str += j % 2 === 0 ? `<div class="cub white"id="${cont}"></div>`: `<div class="cub black"id=${cont}></div>`
      } else {
        str += j % 2 === 0 ? `<div class="cub black"id=${cont}></div>`: `<div class="cub white"id=${cont}></div>`
      }
    
    }
   
    } 
    // numEl.children[0].style.backgroundimage = 'url(peska_white.png)'
  numEl.innerHTML = str
  console.dir(numEl)


  // num = Number(numEl.children[i])
  // numCub = Number(numEl.innerHTML.value)
  // if (i % 2 === 0) {
  //   str = cubEl.style.backgroundColor = 'Yellow';
  // }
//   cubEl = document.querySelector('.cub')
//   console.dir(cubEl)
// }



// document.addEventListener('click', (e) => {
//   console.log(event.target.style.backgroundColor = 'Yellow');
// }) 

//   if (figure[i]!==undefined && figure[i][j]!==undefined){
    //     numEl.style.backgroundImage = 'url(сhess_symbols_set_.png)';
    //     numEl.style.backgroundPosition = figure[i][j];
    // }


    // let figure = {
//   0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px','-372px -17px', '-484px -22px','-263px -19px'],
//   1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
//   6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
//   7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px','-372px -116px', '-484px -116px','-263px -116px'],
// };