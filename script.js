const container = document.getElementById('grid');
let squares;
let squareColor;

//Create the grid and add random color when mouse enters a div 
function createGrid(num) {
    for (let i = 0; i < num*num; i++) {
        squares = container.appendChild(document.createElement('div'));
        squares.classList.add('div');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;  
        
        container.addEventListener("mouseover", (e) => {
            squareColor = e.target;
            if (squareColor.matches('.div')) {
                getRandomColor(squareColor);
            }
        }) 
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
    squareColor.style.backgroundColor = colorGenerator();
}

//Prompt user to enter a number for the grid

function enterNumber() {
    let number = prompt("Enter a number from 1-100");
        if (number < 1 || number > 100) {
            number = prompt("Please enter a number from 1-100");
        } else {
            createGrid(number);
        }
}


//reset button

const btn = document.querySelector("#reset");
btn.addEventListener("click", () => {
    location.reload();
});

enterNumber();
