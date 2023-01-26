//create DOM node for sketchpad
const sketchPad = document.querySelector('.sketch-pad');

let mouseDown = false;
function handleMove(e) {
    if(mouseDown) {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        console.log(r, g, b);
        e.target.style.backgroundColor = `rgb(${r},${g}, ${b})`;
    }
}

function createGrid(gridSize) {

    for(let i = 0; i < gridSize; i++) {

        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            row.appendChild(box);
        }

        sketchPad.appendChild(row);
    }

    const gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener('mousedown', () => mouseDown = true);
    gridBox.addEventListener('mouseup', () => mouseDown = false);
    gridBox.addEventListener('mousemove', handleMove);
});
}

function deleteGrid() {
    sketchPad.innerHTML = "";
}


let gridSize = 16;
createGrid(gridSize);

const gridSizeButton = document.querySelector('.toolbar button');

gridSizeButton.onclick = () => { 
    let newGridSize = prompt("please enter the new grid size");
    if(newGridSize < 100 && newGridSize > 0) {
        gridSize = newGridSize;
    }
    deleteGrid();
    createGrid(gridSize);
}



