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

let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {
    
    roundChoices.textContent = `You played ${humanChoice} and the machine ${computerChoice}.`;
    
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "Oh my god it's a tie !";
        
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        resultDisplay.textContent = "You won against the machine !";
        humanScore++;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        resultDisplay.textContent = "You won against the machine !";
        humanScore++;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        resultDisplay.textContent = "You won against the machine !";
        humanScore++;
    }
    else {
        resultDisplay.textContent = "You loose, you fucking moron...";
        computerScore++;
    }

    score.textContent = `Human: ${humanScore} ${computerScore} :Computer`;

    if (humanScore == 5 || computerScore == 5) {
        score.textContent = `THE WINNER IS ${(humanScore>computerScore)?"YOU !":"THE COMPUTER !"}`
        humanScore = 0;
        computerScore = 0;
    }
}

// References
const container = document.querySelector(".container");
const roundChoices = document.createElement("div");
const resultDisplay = document.createElement("div");
const buttons = document.querySelectorAll("button");

const score = document.createElement("div");


container.appendChild(roundChoices);
container.appendChild(resultDisplay);
container.appendChild(score);


for (btn of buttons) {
    btn.addEventListener("click", (e)=> {
        const playerSelection = e.target.className;
        playRound(playerSelection, getComputerChoice());
    })
};








