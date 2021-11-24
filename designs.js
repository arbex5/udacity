// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
    for (let i = 0; i < height; i++) { //creates the rows of the table
        let tableRow = document.createElement("tr"); // create a table row

        for (let j = 0; j < width; j++) { // creates the cells (columns) of the table
            let tableCell = document.createElement("td"); // creates a table cell
            tableRow.appendChild(tableCell); // add table cell for the table row
        }
        let chessBoard = document.getElementById('pixelCanvas').appendChild(tableRow);  // compose the table row and cell (column)
    }
}

function colorSquare(evt){ // Function to color the square
                           // evt is the event passed by when the function is called
    colorPicker = document.querySelector("#colorPicker").value; // takes the color selected by the user on colopicker and stores in the variabale
    evt.target.style.backgroundColor = colorPicker; // Sets the background color of the square using the color on the variabale colorPicker
}

const begin = document.getElementById('sizePicker'); //stores the object sizePicker inthe variabale begin
begin.addEventListener('submit', function(evt){ // listen to submit event and run the function on the begin variabale
    evt.preventDefault(); // method in an event handler to prevent the default action associated with the event from happening
    document.getElementById("pixelCanvas").innerHTML = "";
    let gridHeight = document.getElementById("inputHeight").value; // get the value of the height input by the user
    let gridWidth = document.getElementById("inputWidth").value; // get the value of the width input by the user
    makeGrid(gridHeight, gridWidth); // when user click in submit, makeGrid() function is called

    const square = document.querySelectorAll('td'); // stores the cells object in a list on square variable

    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener('click', colorSquare, false); // calls the colorSquare function when any square area is clicked

    }

});
