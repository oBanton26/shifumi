function getComputerChoice () {
    let randomNumber = Math.random()*100;
    if (randomNumber < 33){
        return "rock";
    } else if (randomNumber > 66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound (humanChoice, computerChoice) {
    
    roundChoices.textContent = `You played ${humanChoice} and the machine ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "Oh my god it's a tie !";
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        resultDisplay.textContent = "You won against the machine !";
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        resultDisplay.textContent = "You won against the machine !";
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        resultDisplay.textContent = "You won against the machine !";
    }
    else {
        resultDisplay.textContent = "You loose, you fucking moron...";
    }

    
}

const container = document.querySelector(".container");
const roundChoices = document.createElement("div");
const resultDisplay = document.createElement("div");

container.appendChild(roundChoices);
container.appendChild(resultDisplay);
const buttons = document.querySelectorAll("button");

for (btn of buttons) {
    btn.addEventListener("click", (e)=> {
        const playerSelection = e.target.className;
        playRound(playerSelection, getComputerChoice());
    })
};








