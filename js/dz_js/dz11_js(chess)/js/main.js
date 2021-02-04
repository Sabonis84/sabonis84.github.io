
let str = '';
let cont = null;
mainEl = document.querySelector('.main')

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    cont = cont + 1;
     if(i % 2 !==0 ) {
        str += j % 2 === 0 ? `<div class="cub black" id="${cont}"></div>`: `<div class="cub white"id="${cont}"></div>`
      } else {
        str += j % 2 === 0 ? `<div class="cub white" id="${cont}"></div>`: `<div class="cub black"id="${cont}"></div>`
      }
     }
   }  
    
  mainEl.innerHTML = str
  for (let i = 7; i <= 15; i++) {
    mainEl.children[i].innerHTML = `<div class="peshkaW">&#9823;</div>`
    }
  for (let i = 48; i < 56; i++) {
      mainEl.children[i].innerHTML = `<div class="peshkaB">&#9823;</div>`
    }
  mainEl.children[0].innerHTML = `<div class="ladyaW">&#9820;</div>`;
  mainEl.children[7].innerHTML = `<div class="ladyaW">&#9820;</div>`;
  mainEl.children[1].innerHTML = `<div class="horseW">&#9822;</div>`;
  mainEl.children[6].innerHTML = `<div class="horseW">&#9822;</div>`;
  mainEl.children[2].innerHTML = `<div class="oficerW">&#9821;</div>`;
  mainEl.children[5].innerHTML = `<div class="oficerW">&#9821;</div>`;
  mainEl.children[3].innerHTML = `<div class="queenW">&#9819;</div>`;
  mainEl.children[4].innerHTML = `<div class="kingW">&#9818;</div>`;

  
  mainEl.children[56].innerHTML = `<div class="ladyaB">&#9820;</div>`;
  mainEl.children[63].innerHTML = `<div class="ladyaB">&#9820;</div>`;
  mainEl.children[57].innerHTML = `<div class="horseB">&#9822;</div>`;
  mainEl.children[62].innerHTML = `<div class="horseB">&#9822;</div>`;
  mainEl.children[58].innerHTML = `<div class="oficerB">&#9821;</div>`;
  mainEl.children[61].innerHTML = `<div class="oficerB">&#9821;</div>`;
  mainEl.children[59].innerHTML = `<div class="queenB">&#9819;</div>`;
  mainEl.children[60].innerHTML = `<div class="kingB">&#9818;</div>`;
  
  
  console.dir(mainEl.children[0]);
  console.dir(mainEl);



 