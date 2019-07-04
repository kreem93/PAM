
function makeGrid(event) {

    // prevent the page refresh after clicking submit button
    event.preventDefault();

    // create the needed variables
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var pixelsCanvas = document.getElementById("pixelCanvas");

    // cleaning the space for the table
    pixelsCanvas.innerHTML = "";

    // make the table rows and columns
    for (var x = 0; x < height; x++) {
        var row = document.createElement("tr");
        for (var y = 0; y < width; y++) {
            var column = document.createElement("td");
            column.addEventListener("click", colorCell(event));
            row.appendChild(column);
        }
        pixelsCanvas.appendChild(row);
    }

}

function colorCell(event) {
    // added the if to make sure the function colors the clicked cell
    if(event.target.nodeName == "TD") {
        var pickedColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = pickedColor
    }
}