
function changeColor() {
    this.classList.add('drawn');
}

function revertColor() {
    this.classList.remove('drawn');
}

const container = document.querySelector('#container');
const clear_btn = document.querySelector('#clear-btn');
const grid_btn = document.querySelector('#grid-btn');
const eraser_btn = document.querySelector('#eraser-btn');
let eraser = false;

drawBoard(16);

const squares = container.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mousemove', changeColor);
});

clear_btn.addEventListener('click', function() {
    // draw the new board
    deleteBoard();
    let num = prompt("Enter the amount of squares (1-100): ");
    if(num > 100) {
        drawBoard(100);
    } else {
        drawBoard(num);
    }

    // Add the event listener to all squares
    const squares = container.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mousemove', changeColor);
    });
    grid_btn.classList.remove('blue-btn');
    eraser_btn.classList.remove('blue-btn');
    eraser = false;
});

grid_btn.addEventListener('click', Grid);

eraser_btn.addEventListener('click', () => {
    if(eraser === true) {
        eraser = false;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', revertColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', changeColor);
        });
    } else if(eraser === false) {
        eraser = true;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', changeColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', revertColor);
        });
    } 
    eraser_btn.classList.toggle('blue-btn');
    console.log(eraser);
});

function drawBoard(num) {
    // create the grid columns and rows
    container.style.gridTemplateColumns = `repeat(${num}, ${100 / num}%)`;
    container.style.gridTemplateRows = `repeat(${num}, ${100 / num}%)`;

    for(let i=0; i<num * num; i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('square');
        container.appendChild(newdiv);
    }
}

function deleteBoard() {
    container.textContent = "";
}

function Grid() {
    const squares = container.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.toggle('grid');
    });
    grid_btn.classList.toggle('blue-btn');
}