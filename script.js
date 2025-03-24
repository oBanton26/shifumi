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

function getHumanChoice () {
    return prompt("What's the shape of your hand, Human ?");
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        console.log("The machine said "+computerChoice);
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("Oh my god it's a tie !");
        }
        else if (humanChoice==="rock" && computerChoice==="scissors"){
            console.log("You won against the machine !!");
            ++humanScore;
        }
        else if (humanChoice==="scissors" && computerChoice==="paper"){
            console.log("You won against the machine !!");
            ++humanScore;
        }
        else if (humanChoice==="paper" && computerChoice==="rock"){
            console.log("You won against the machine !!");
            ++humanScore;
        }
        else {
            console.log("You loose you fucking moron");
            ++computerScore;
        }
    }


    // I think it would be better to just call the get functions directly into the playRound call
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    return console.log("Your score is "+humanScore+" and the machine's is "+computerScore);
}

console.log("Hey welcome ! You can play my simple Shifumi game on the console: simply write the 'playGame();' command. Enjoy !")

