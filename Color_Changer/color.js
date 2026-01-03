const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
const Original = document.querySelector("#Original")

buttons.forEach((color) => {
    color.addEventListener('click', function (each) {
        if (each.target.id === "Grey") {
            body.style.backgroundColor = each.target.id;
        }
        if (each.target.id === "Red") {
            body.style.backgroundColor = each.target.id;
        }
        if (each.target.id === "Blue") {
            body.style.backgroundColor = each.target.id;
        }
        if (each.target.id === "Yellow") {
            body.style.backgroundColor = each.target.id;
        }
        if (each.target.id === "Orange") {
            body.style.backgroundColor = each.target.id;
        }
        if (each.target.id === "Green") {
            body.style.backgroundColor = each.target.id;
        }
    })
})

Original.addEventListener("click", function (change) {
    body.style.backgroundColor = "white"
})