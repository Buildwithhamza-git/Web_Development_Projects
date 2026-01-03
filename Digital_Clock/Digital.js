const Time = document.getElementById("Clock")

setInterval(function () {
    let date = new Date();
    Time.innerHTML = date.toLocaleTimeString();
}, 1000)