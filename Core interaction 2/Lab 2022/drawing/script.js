let container = document.querySelector(".grid-container");

let reset = document.getElementById("reset");

for (let i = 0; i < 10 * 10; i++){
    let newDiv = document.createElement("div");
        let image = document.querySelector("img")
    newDiv.classList.add("pixel");
    newDiv.style.background = "rgb(30, 206, 30)";
    newDiv.addEventListener("click", function(){
        newDiv.style.opacity = "0";
        image.style.visibility = "visible";
    })

    reset.addEventListener("click", function() {
        newDiv.style.background = "rgb(30, 206, 30)";
        newDiv.style.opacity = "100";
    })
    container.appendChild(newDiv);
}


