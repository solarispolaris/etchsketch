


// highlight the mouseenter target
function hoverOnBox(e){
    const drewOn = e.target.classList.contains('drew-on');
    if(drewOn)
        e.target.style.backgroundColor = "#363030";
    else
        e.target.style.backgroundColor = "#868590";

}

//stop hightlight of mouseenter target
function hoverOffBox(e){
    const drewOn = e.target.classList.contains('drew-on');
    if(drewOn)
        e.target.style.backgroundColor = "#000000";
    else
        e.target.style.backgroundColor = "white";
    
}

//make a box black if clicked on. If already black, clear it
function drawOnBox(e){
    e.target.style.backgroundColor = "#363030";
    e.target.classList.toggle("drew-on");   
}

//clear all colored in boxes
function clearBoxes(){
    const etchContainer = document.querySelector(".etch-container");
    //clear all divs inside the container by removing the drew-on class
    for(let childRow = etchContainer.firstChild; childRow !== null; childRow = childRow.nextSibling){
        for(let childBox = childRow.firstChild; childBox !== null; childBox = childBox.nextSibling){
            childBox.classList.remove("drew-on");
            childBox.style.backgroundColor = "white";
        }
    }

}

//invert all colored in boxes
function invertBoxes(){
    const etchContainer = document.querySelector(".etch-container");
    //invert all divs inside the container by toggling the drew-on class
    for(let childRow = etchContainer.firstChild; childRow !== null; childRow = childRow.nextSibling){
        for(let childBox = childRow.firstChild; childBox !== null; childBox = childBox.nextSibling){
            childBox.classList.toggle("drew-on");
            if(childBox.classList.contains("drew-on"))
                childBox.style.backgroundColor = "#000000";
            else
                childBox.style.backgroundColor = "white";
        }
    }

}

//remove all elements inside the etch-a-sketch container
function removeEtchContainer(){
    const container = document.querySelector(".etch-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function addNewGrid(){
    const numRow = prompt("How Many Squares Per Side? (Up to 50)");
    //only run functions if the correct input was given
    if (numRow > 0 && numRow <= 50){
        removeEtchContainer();
        setUpEtchContainer(numRow);
    }
   
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

