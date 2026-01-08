// let generate a random color first

const Randomcolor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
    }
    return color;
}

let interval;
const Start = function () {
    interval = setInterval(color, 1500);
    function color() {
        document.body.style.backgroundColor = Randomcolor();
    }
}

const stop = function () {
    clearInterval(interval)
    alert("Changing color is Stoped!")
}

document.querySelector("#start").addEventListener("click", Start)
document.querySelector("#stop").addEventListener("click", stop)