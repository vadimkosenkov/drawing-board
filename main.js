const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = ['#ff6d69', '#fecc50', '#0be7fb', '#9eaad9', '#c99ccf'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
}

function setColor(event) {
    const color = getRandomColor();
    event.target.style.backgroundColor = color;
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    event.target.style.backgroundColor = '#1d1d1d';
    event.target.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}