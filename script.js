const container = document.getElementById('grid');
let row;
let column;

//Create the grid
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        row = container.appendChild(document.createElement('div'));
        row.classList.add('div')
        for (let j = 1; j < num; j++) {
            column = container.appendChild(document.createElement('div'));
            column.classList.add('div')
        }
    }
}

//Generate a random color

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


//Prompt user to enter a number for the grid

function enterNumber() {
    let number = prompt("Enter a number from 1-16");
        if (number < 1 || number > 16) {
            number = prompt("Please enter a number from 1-16");
        } else {
            createGrid(number);
        }
}

enterNumber();

//Add random color when mouse enters a div

container.addEventListener("mouseover", getRandomColor);
