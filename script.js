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

let newGridBtn = document.querySelector('#gridBtn');
let clearBtn = document.querySelector('#clearBtn');


newGridBtn.addEventListener('click', (event) => {
    gridSize = parseInt(prompt("What size blocks? \n (Between 1 and 100)"));
    if (Number.isNaN(gridSize)) {
        gridSize = 16;
    }
    if (gridSize < 0) {
        gridSize = 16;
    }
    if (gridSize > 100) {
        gridSize = 100;
    }
    let container = document.querySelector('.container');
    
    //Delete all columns from container div
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeGrid();
});

clearBtn.addEventListener('click', (event) => {
    let container = document.querySelector('.container');
    
    //Delete all columns from container div
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeGrid();
});



makeGrid();