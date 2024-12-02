console.log("Hello World!")

let humanScore = 0
let computerScore = 0

// function that randomly returns rock, paper or scissors, the computer
function getComputerChoice() {
    //random number is generated and stored in variable 'random'
    let random = Math.random()*10
    //if statement selects return value based on value of random
    if (random <= 3.33) {
        return "rock"
    } else if (random >= 6.66) {
        return "paper"
    }
    return "scissors"
}

function getHumanChoice() {
    let choice = prompt("Enter your turn:\n")
    return choice.toLowerCase
}

function playRound(humanChoice, computerChoice) {
if (humanChoice = "rock") {
    if (computerChoice = "scissors") {
        humanScore += 1
        console.log("You Win! Rock beats Scissors")
    } else if (computerChoice = "paper") {
        computerScore += 1
        console.log("You Lose! Paper beats Rock")
    }
} else if (humanChoice = "paper") {
    if (computerChoice = "scissors") {
        computerScore += 1
        console.log("You Lose! Scissors beats Paper")
    }
    if (computerChoice = "rock") {
        humanScore += 1
        console.log("You Win! Paper beats Rock")
    }
} else if (humanChoice = "scissors") {
    if (computerChoice = "paper") {
        humanScore += 1
        console.log("You Win! Scissors beats Paper")
    }else if (computerChoice = "rock") {
        computerScore += 1
        console.log("You Lose! Rock beats Scissors")
    }
}


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
