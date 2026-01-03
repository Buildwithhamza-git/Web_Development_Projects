const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const Height = parseInt(document.querySelector("#Height").value);
    const Weight = parseInt(document.querySelector("#Weight").value);
    const Result = document.querySelector("#result");

    if (Height === "" || Height < 0 || isNaN(Height)) {
        Result.innerHTML = `Please Enter a valid height ${Height}`;
    } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
        Result.innerHTML = `Please Enter a valid Weight ${Weight}`;
    } else {
        const Bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
        if (Bmi < 18.5) {
             Result.innerHTML = `<span>You're Under Weight as your BMI is: ${Bmi}</span>`; 
        }else if(Bmi>=18.6 && Bmi<=24.9){
             Result.innerHTML = `<span>You're in Normal range  as your BMI is: ${Bmi}</span>`
        }else if(Bmi> 24.9){
        Result.innerHTML = `<span>You're Over Weighted as your BMI is: ${Bmi}</span>`;
        }
    }
})