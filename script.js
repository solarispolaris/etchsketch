


// highlight the mouseenter target
function hoverOnBox(e){
    e.target.classList.add("hover-on");

}

//stop hightlight of mouseenter target
function hoverOffBox(e){
    e.target.classList.remove("hover-on");
}

//make a box black if clicked on. If already black, clear it
function drawOnBox(e){
    e.target.classList.toggle("drew-on");
}






//set up a row of divs with provided number of rows and columns
function setUpEtchContainer(squaresPerSide){

    const container = document.querySelector(".etch-container");

    //set up a 4x4 grid of div containers
    for(let i = 0; i < squaresPerSide; i++){
        //add new row of divs
        const newRow = document.createElement("div");
        newRow.classList.add("etch-row");
        for(let j = 0; j < squaresPerSide; j++){
            //add new div elements inside of newly created row
            const divBox = document.createElement("div");
            divBox.classList.add("etch-box");
            divBox.addEventListener("mouseenter", hoverOnBox, false);
            divBox.addEventListener("mouseleave", hoverOffBox, false);
            divBox.addEventListener("click", drawOnBox, false);
            newRow.appendChild(divBox);
        }
        //add row to the container
        container.appendChild(newRow);
    }
}

function removeEtchContainer(){
    const container = document.querySelector(".etch-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function addNewGrid(){
    const numRow = prompt("How Many Squares Per Side?");
    removeEtchContainer();
    setUpEtchContainer(numRow);

}