console.log("Hello World!")

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
