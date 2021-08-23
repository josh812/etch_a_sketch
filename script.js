
function changeColor() {
    this.classList.add('drawn');
}

const container = document.querySelector('#container');
const clear_btn = document.querySelector('#clear-btn');
const grid_btn = document.querySelector('#grid-btn');

drawBoard(16);

const squares = container.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});

clear_btn.addEventListener('click', function() {
    // draw the new board
    deleteBoard();
    let num = prompt("Enter the amount of rows you would like: ");
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
});

grid_btn.addEventListener('click', Grid);

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
    container.innerHTML = "";
}

function Grid() {
    const squares = container.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.toggle('grid');
    });
}