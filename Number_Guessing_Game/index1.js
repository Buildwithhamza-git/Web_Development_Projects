let Random = parseInt((Math.random() * 100) + 1);

const Userinput = document.getElementById('guessfield');
const Submit = document.getElementById("guesssubmit");
const Result = document.querySelector("#Resultpara");
const Userguess = document.querySelector(".guesses");
const ChanceRemain = document.querySelector(".Lastresult");
const Message = document.querySelector(".HIorLow");

let p = document.createElement("p");
let playgame = true;
let chance = 1;
let preguess = [];

if (playgame) {
    Submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(Userinput.value);
        Validation(guess);
    });
}

function Validation(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid number");
    } else if (guess < 1) { 
        alert("Please Enter number Greater Than 0");
    } else if (guess > 100) {
        alert("Please Enter number Smaller than 100");
    } else {
        preguess.push(guess);
        if (chance === 10) { 
            Displayguess(guess);
            if (guess === Random) {
                DisplayMessage(`Congrats! You guessed it on your last try!`);
            } else {
                DisplayMessage(`Game Over. Random Number was: ${Random}`);
            }
            GameOver();
        } else {
            Displayguess(guess);
            check(guess);
        }
    }
}

function check(guess) {
    if (guess === Random) {
        DisplayMessage(`Congrats! You Win!`);
        GameOver();
    } else if (guess > Random) {
        DisplayMessage("Too High! Try again.");
    } else if (guess < Random) {
        DisplayMessage("Too Low! Try again."); 
    }
}

function DisplayMessage(message) {
    Message.innerHTML = `<h2>${message}</h2>`;
}

function Displayguess(guess) {
    Userinput.value = ""; 
    Userguess.innerHTML += `${guess}, `;
    chance++;
    ChanceRemain.innerHTML = `${11 - chance}`;
}

function GameOver() {
    Userinput.value = "";
    Userinput.setAttribute('disabled', '');
    p.innerHTML = `<button id="newGame" style="padding: 10px; margin-top: 10px; cursor: pointer;">Start New Game</button>`;
    Result.appendChild(p);
    playgame = false;
    NewGame();
}

function NewGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        Random = parseInt(Math.random() * 100 + 1);
        preguess = [];
        chance = 1;
        Userguess.innerHTML = '';
        Message.innerHTML = ''; 
        ChanceRemain.innerHTML = `10`;
        Userinput.removeAttribute('disabled');
        Result.removeChild(p);
        playgame = true;
    });
}