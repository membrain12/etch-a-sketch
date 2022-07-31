let gridSize = 16;

function makeColumn() {
    let container = document.querySelector('.container');
    let column = document.createElement('div');

    for (let i = 0; i < gridSize; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.width = `${300 / gridSize}px`;
        block.style.height = `${300 / gridSize}px`;

        addHover(block);

        column.appendChild(block);
    }

    container.appendChild(column);
}

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        makeColumn();
    }
}

function addHover(el) {
    el.addEventListener('mouseover', (event) => {
        el.classList.add('hover');
    });
}

let btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    gridSize = prompt("What size blocks?");
    container.remove();
    
});

makeGrid();