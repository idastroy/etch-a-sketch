function createGrid(num) {
    const container = document.getElementById('grid');
    for (let i = 0; i < num; i++) {
        let row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < num; j++) {
            let coloumn = container.appendChild(document.createElement('div'));
        }
    }
}

createGrid(3);






































/*

function createGrid(a) {
    const container = document.getElementById('grid');    
    for (let i = 0; i < a; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < a; j++) {
            const coloumn = row.appendChild(document.createElement('div'));
        }
    }
}

createGrid(4);


function addSquare() {
    const newSquare = document.createElement('div');
    //Use the next two lines to add text to the div:
    //const newContent = document.createTextNode('Insert text');
    //newDiv.appendChild(newContent);
    const container = document.getElementById('grid');
    document.body.insertBefore(newSquare, container);
}


*/