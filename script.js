//Sets important constants and variables

const container = document.getElementById("container");
/* let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell"); */
let cell;


function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow); 
    container.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}

function promptGrid() {
    let number = prompt("Choose grid size between 5-64", 16); 
     if (number >= 5 && number <= 64) {
         makeGrid (number,number);
     }else {
         do {
             number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
         }
         while(number < 5 || number > 64);
         makeGrid (number,number);
     }
 }

 
promptGrid();

/* defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
}; */

document.querySelectorAll(".cell").forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = "black";
    })
})

function reset()
{
    container.textContent="";
    promptGrid();    
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "black";
        })
    })
}

resetButton.addEventListener("click", reset)
