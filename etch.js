//Javascript file for The Odin Project Etch-a-Sketch project
const container = document.getElementById("container")
const div = document.createElement('div')


div.classList.add("grid-sq");
div.textContent = "1";

container.style.cssText = "grid-template-columns: repeat(8, 1fr)"

function trail(){
    const grids = document.querySelectorAll(".grid-sq")
    grids.forEach(grid => {
    
        grid.addEventListener('mouseover', function sketch() {
            grid.classList.add("grid-sq-black")
        })
    });
}
function start() {
    for (i = 0; i < 64; i++){

        container.appendChild(div.cloneNode())
    }
    

    trail()
   
}

start()


const sizeInput = document.getElementById("sizeInput")
function gridSize() {
    container.style.cssText = `grid-template-columns: repeat(${sizeInput.value}, 1fr)`
    container.innerHTML = '';
    for (i = 0; i < sizeInput.value *sizeInput.value; i++){
        container.appendChild(div.cloneNode())
    }
    trail()
}
