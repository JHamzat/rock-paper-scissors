let humanScore = 0
let computerScore = 0

playGame()


//function needs to play 5 rounds, display and update scores and show winner at the end 
/* function playGame() {
    //Declare playRound function 
    //declare human and computer score variables
  
    for (let i = 0; i < 5;i++) {
       playRound(humanSelection,computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Score: Human:" + " " + humanScore + " - Computer: " + computerScore);
    } else {
        console.log("You lose! Score: Human:" + " " + humanScore + " - Computer: " + computerScore);
    }
   
} */

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
    if (choice !== "") {
        return choice.toLowerCase()
    }   else {
        alert("Incorrect choice!")
    }
    
}






 

 function playGame() {
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            switch(computerChoice) {
                case "scissors":
                    humanScore += 1
                    console.log("Computer chose " + computerChoice)
                    console.log("You Win! Rock beats Scissors")
                    break;
                case "paper":
                    computerScore += 1
                    console.log("Computer chose " + computerChoice)
                    console.log("You Lose! Paper beats Rock") 
                    break;
            } 
        } else {
            if (humanChoice == "scissors") {
                switch(computerChoice) {
                    case "paper":
                        humanScore += 1
                        console.log("Computer chose " + computerChoice)
                        console.log("You Win! Scissors beats Paper")
                        break;
                    case "rock":
                        computerScore += 1
                        console.log("Computer chose " + computerChoice)
                        console.log("You Lose! Rock beats Scissors") 
                        break;
                } 
            } else {
                if (humanChoice == "paper") {
                    switch(computerChoice) {
                        case "rock":
                            humanScore += 1
                            console.log("Computer chose " + computerChoice)
                            console.log("You Win! Paper beats Rock")
                            break;
                        case "scissors":
                            computerScore += 1
                            console.log("Computer chose " + computerChoice)
                            console.log("You Lose! Scissors beats Paper") 
                            break;
                    } 
                } else {
                    if (humanChoice == computerChoice) {
                        console.log("Computer chose " + computerChoice)
                        console.log("It's a Tie!")
                    }
                }
            }
        
        }
        
    }
    for (let i = 0; i < 5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)  
    }
    if (humanScore > computerScore) {
        alert("You win! Your score: " + humanScore + " Computer score: " + computerScore)
    } else {
        if (computerScore > humanScore) {
            alert("You Lose! Your score: " + humanScore + " Computer score: " + computerScore)
        } else {
            alert("It's a tie! Your score: " + humanScore + " Computer score: " + computerScore)
        }
    }
 }



