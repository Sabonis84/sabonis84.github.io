let arr = [];
arr.length = 5;
let cX = 0;                                         
let cY = 0;                                         
let coordXPrev = null;                                 
let coordYPrev = null;

let field = document.querySelector(".field");

let allCell;                                             
let message = document.querySelector(".message");
let arrows = document.querySelector(".arrows");
let btns = Array.from(arrows.querySelectorAll(".btn"));
let arrowUp = document.querySelector(".btn.up");
let arrowLeft = document.querySelector(".btn.left");
let arrowRight = document.querySelector(".btn.right");
let arrowDown = document.querySelector(".btn.down");
let gameOverTimer;


const createField = (x, y) => {
    for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array;
    for(let j = 0; j < arr.length; j++) {
    (i === y && j === x) ? arr[i][j] = 1 : arr[i][j] = null;
        }
    }
}


const newField = (x1, y1, x2, y2) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i === y1 && j === x1) arr[i][j] = 1;
            if(i === y2 && j === x2) arr[i][j] = 2;
        }
    }
}


const renderField = () => {
    let count = 0;
    let indX = null;
    let indY = null;
    field.innerHTML = "";
    message.innerHTML = "";
 arr.forEach(firstInd => {
        indY++;
        firstInd.forEach(secondInd => {
            if(indX % 5 === 0) indX = 0;
            indX++;
            if(secondInd === 1) {
                count++;
                field.innerHTML += `<div class="indX${indX} indY${indY} ${moveCellColor}"></div>`;
            }
            else if(secondInd === 2) {
                count++;
                field.innerHTML += `<div class="indX${indX} indY${indY} ${prevCellColor}"></div>`;
            }
            else {
                field.innerHTML += `<div class="indX${indX} indY${indY}"></div>`;
            }
        })
    });
    
    message.innerHTML += `Кол-во не нулевых ячеек = ${count}`;
}
let cellHeight = 50;
let cellWidth = 50;
let celBorder = 1;                                    
let moveCellColor = "blue";
let prevCellColor = "orange";

field.style.height = `${cellHeight * arr.length}px`;
field.style.width = `${cellWidth * arr.length}px`;
field.style.boxSizing = "border-box";

const colour = () => {
    allCell = field.querySelectorAll("div");
    allCell.forEach(elem => {
        elem.style.height = `${cellHeight}px`;
        elem.style.width = `${cellWidth}px`;
        elem.style.border = `${celBorder}px solid black`;
        elem.style.boxSizing = "inherit";
        if(elem.classList.contains(`${moveCellColor}`)) {
            elem.style.backgroundColor = `${moveCellColor}`;
        }
        else if(elem.classList.contains(`${prevCellColor}`)) {
            elem.style.backgroundColor = `${prevCellColor}`;
        }
    })
}
const updateField = (a1, b1, a2, b2) => {
    newField(a1, b1, a2, b2);
    renderField();
    colour();
}

const btnBlock = (x, y) => {

    if(y - 1 < 0) {
        arrowUp.disabled = true;
    }
    else {
        if(arr[y - 1][x] === 2) {
            arrowUp.disabled = true;
        }
        else {
            arrowUp.disabled = false;
        }
    }
    if(x - 1 < 0) {
        arrowLeft.disabled = true;
    }
    else {
        if(arr[y][x - 1] === 2) {
            arrowLeft.disabled = true;
        }
        else {
            arrowLeft.disabled = false;
        }
    }

    if(x + 1 > arr.length - 1) {
        arrowRight.disabled = true;
    }
    else {
        if(arr[y][x + 1] === 2) {
            arrowRight.disabled = true;
        }
        else {
            arrowRight.disabled = false;
        }
    }

    if(y + 1 > arr.length - 1) {
        arrowDown.disabled = true;
    }
    else {
        if(arr[y + 1][x] === 2) {
            arrowDown.disabled = true;
        }
        else {
            arrowDown.disabled = false;
        }
    }
}


createField(cX, cY);
renderField();
colour();
btnBlock(cX, cY);
gameOverTimer = setTimeout(() => {
    btns.forEach(arrow => arrow.disabled = true);
    field.innerHTML += "<div class=\"game-over\">Game over!</div>";

}, 10000);

arrows.addEventListener ("click", (event) => {
    clearTimeout(gameOverTimer);                    
    coordXPrev = cX;
    coordYPrev = cY;
    if(event.target.classList.contains("up")) {
        if(cY - 1 >= 0) {
            cY = cY - 1;
            updateField(cX, cY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("left")) {
        if(cX - 1 >= 0) {
            cX = cX - 1;
            updateField(cX, cY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("right")) {
        if(cX + 1 < arr.length) {
            cX = cX + 1;
            updateField(cX, cY, coordXPrev, coordYPrev);
        }
    }
    else if(event.target.classList.contains("down")){
        if(cY + 1 < arr.length) {
            cY += 1;
            updateField(cX, cY, coordXPrev, coordYPrev);
        }
    }
    
    btnBlock(cX, cY);
    if(btns.every(arrow => arrow.disabled === true)) {
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";
    }
    gameOverTimer = setTimeout(() => {
        btns.forEach(arrow => arrow.disabled = true);
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";

    }, 10000);
});
document.addEventListener ("keydown", (event) => {
    clearTimeout(gameOverTimer);
    coordXPrev = cX;
    coordYPrev = cY;
    switch(event.code){
        case "ArrowUp":
            if(!arrowUp.disabled) {
                if(cY - 1 >= 0) {
                    cY = cY - 1;
                    updateField(cX, cY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowLeft":
            if(!arrowLeft.disabled) {
                if(cX - 1 >= 0) {
                    cX = cX - 1;
                    updateField(cX, cY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowRight":
            if(!arrowRight.disabled) {
                if(cX + 1 < arr.length) {
                    cX = cX + 1;
                    updateField(cX, cY, coordXPrev, coordYPrev);
                }
            }
            break;
        case "ArrowDown":
            if(!arrowDown.disabled) {
                if(cY + 1 < arr.length) {
                    cY = cY + 1;
                    updateField(cX, cY, coordXPrev, coordYPrev);
                }
            }
    }

    btnBlock(cX, cY);
    if(btns.every(arrow => arrow.disabled === true)) {
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";
    }
    gameOverTimer = setTimeout(() => {
        btns.forEach(arrow => arrow.disabled = true);
        field.innerHTML += "<div class=\"game-over\">Game over!</div>";

    }, 10000);
});