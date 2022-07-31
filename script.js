let gridSize = 16;

function makeColumn() {
    let container = document.querySelector('.container');
    let column = document.createElement('div');

    for (let i = 0; i < gridSize; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.width = `${300 / gridSize}px`;
        block.style.height = `${300 / gridSize}px`;

        column.appendChild(block);
    }

    container.appendChild(column);
}

makeColumn();