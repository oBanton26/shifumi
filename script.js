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

    if (humanChoice === computerChoice) {
        console.log("Oh my god it's a tie !");
    }
    else if (humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You won against the machine !!");
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You won against the machine !!");
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        console.log("You won against the machine !!");
    }
    else {
        console.log("You loose you fucking moron");
    }
}

const buttons = document.querySelectorAll("button");
for (btn of buttons) {
    btn.addEventListener("click", (e)=> {
        const playerSelection = e.target.className;
        playRound(playerSelection, getComputerChoice());
    })
};

const container = document.querySelector(".container");
const resultDisplay = document.createElement("div");
resultDisplay.textContent = "prout";
container.appendChild(resultDisplay);





