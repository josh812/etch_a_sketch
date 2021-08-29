
function changeColor() {
    this.style.backgroundColor = `${current_color}`;
}

function revertColor() {
    this.style.backgroundColor = "#ddd";
}

function randomColor() {
    r = Math.floor(Math.random() * (254 - 1) - 1)
    g = Math.floor(Math.random() * (254 - 1) - 1)
    b = Math.floor(Math.random() * (254 - 1) - 1)
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

const container = document.querySelector('#container');
const clear_btn = document.querySelector('#clear-btn');
const grid_btn = document.querySelector('#grid-btn');
const eraser_btn = document.querySelector('#eraser-btn');
let eraser = false;
const rainbow_btn = document.querySelector('#rainbow-btn');
let rainbow = false;
const color_palette = document.querySelector('#color-input');
let current_color = "#6767ff";

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
    rainbow_btn.classList.remove('blue-btn');
    color_palette.value = "#6767ff";
    eraser = false;
    rainbow = false;
    current_color = "#6767ff";
});

grid_btn.addEventListener('click', Grid);

eraser_btn.addEventListener('click', () => {
    if(eraser === true) {
        eraser = false;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', revertColor);
            square.removeEventListener('mousemove', randomColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', changeColor);
        });
        rainbow_btn.classList.remove('blue-btn');
        rainbow = false;
    } else if(eraser === false) {
        eraser = true;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', changeColor);
            square.removeEventListener('mousemove', randomColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', revertColor);
        });
        rainbow_btn.classList.remove('blue-btn');
        rainbow = false;
    } 
    eraser_btn.classList.toggle('blue-btn');
});

rainbow_btn.addEventListener('click', () => {
    if(rainbow === false) {
        rainbow = true;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', revertColor);
            square.removeEventListener('mousemove', changeColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', randomColor);
        });
        eraser_btn.classList.remove('blue-btn');
        eraser = false;
    } else if(rainbow === true) {
        rainbow = false;
        const squares = container.querySelectorAll('.square');
        squares.forEach((square) => {
            square.removeEventListener('mousemove', revertColor);
            square.removeEventListener('mousemove', randomColor);
        });
        squares.forEach((square) => {
            square.addEventListener('mousemove', changeColor);
        });
        eraser_btn.classList.remove('blue-btn');
        eraser = false;
    }
    rainbow_btn.classList.toggle('blue-btn');
});

color_palette.addEventListener('change', (e) => {
    current_color = e.target.value;
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