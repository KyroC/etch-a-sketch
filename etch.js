//Javascript file for The Odin Project Etch-a-Sketch project
const container = document.getElementById("container")
const div = document.createElement('div')


div.classList.add("grid-sq");
div.textContent = "1"




for (i = 0; i < 64; i++){

    container.appendChild(div.cloneNode())
}

const grids = document.querySelectorAll(".grid-sq")

grids.forEach(grid => {

    grid.addEventListener('mouseover', function sketch() {
        grid.classList.add("grid-sq-black")
    })
});