const choice = getHumanChoice();

function getHumanChoice() {
    let choice = prompt("Enter your turn:\n")
    if (choice !== "") {
        alert("You entered "+ choice)
    }   else {
        alert("Incorrect choice!")
        console.log(choice)
    }
    
}
