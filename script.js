const container = document.getElementById('grid');
let row = "";
row.className = "row";
let column = "";
column.className = "column"

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        row = container.appendChild(document.createElement('div'));
        for (let j = 1; j < num; j++) {
            column = container.appendChild(document.createElement('div'));
        }
    }
}

createGrid(3);

console.dir(column.previousElementSibling);

function colorGenerator() { 
    let makeColorCode = "0123456789ABCDEF";
    let finalCode = "#";
    for (let i = 0; i < 6; i++) {
        finalCode += makeColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}
    
function getRandomColor() {
    row.style.backgroundColor = colorGenerator();
    column.style.backgroundColor = colorGenerator();
}

//add event listener for "click", getRandomColor();
container.addEventListener("click", getRandomColor());

