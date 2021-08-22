function changeColor() {
    this.classList.add('drawn');
}
const container = document.querySelector('#container');


for(let i=1; i<=15; i++) {
    for(let j=1; j<=16; j++) {
    newdiv = document.createElement('div');
    newdiv.classList.add('square');
    container.appendChild(newdiv);
    }
}

const squares = container.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});