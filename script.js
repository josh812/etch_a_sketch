
function changeColor() {
    this.classList.add('drawn');
}

const container = document.querySelector('#container');
const clear_btn = document.querySelector('#clear-btn');

let num = prompt("Enter the amount of rows you would like: ");
drawBoard(num-1);

const squares = container.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});

clear_btn.addEventListener('click', function() {
    // draw the new board
    deleteBoard();
    let num = prompt("Enter the amount of rows you would like: ");
    drawBoard(num-1);

    // Add the event listener to all squares
    const squares = container.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
    });
});

function drawBoard(num) {
    // create the grid columns and rows
    let width = 700 / num;
    let string = `${width}px`;
    for(let i=0; i<num; i++) {
        string += ` ${width}px`;
    }
    container.style.gridTemplateColumns = string;
    container.style.gridTemplateRows = string;
    for(let i=0; i<=num; i++) {
        for(let j=1; j<=num + 1; j++) {
            newdiv = document.createElement('div');
            newdiv.classList.add('square');
            container.appendChild(newdiv);
        }
    }
}

function deleteBoard() {
    container.innerHTML = "";
}