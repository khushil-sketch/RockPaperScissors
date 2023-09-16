
const choices = ['rock', 'paper', 'scissor']; // initially opted for an Object (dictionary), but getting its length is more complex code.

// Computer's Choice
function computerChoice(){
    // math.random generates a random number between 0 (inclusive) and 1 (exclusive)
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(randomIndex)
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    
    if (normalizedPlayerSelection === "rock" && normalizedComputerSelection === "rock") {
        return 'Draw!';
    }

    else if (normalizedPlayerSelection === "rock" && normalizedComputerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }

    else if (normalizedPlayerSelection === "rock" && normalizedComputerSelection === "scissor") {
        return "You Win! Rock beats Scissor";
    }

    else if (normalizedPlayerSelection === "paper" && normalizedComputerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    
    else if (normalizedPlayerSelection === "paper" && normalizedComputerSelection === "paper") {
        return "Draw! Play Again";
    }

    else if (normalizedPlayerSelection === "paper" && normalizedComputerSelection === "scissor") {
        return "You Lose! Scissor beats Paper";
    }

    else if (normalizedPlayerSelection === "scissor" && normalizedComputerSelection === "rock") {
        return "You Lose! Rock beats Scissor";
    }

    else if (normalizedPlayerSelection === "scissor" && normalizedComputerSelection === "paper") {
        return "You Win! Scissor beats Paper";
    }

    else if (normalizedPlayerSelection === "scissor" && normalizedComputerSelection === "scissor") {
        return "Draw!";
    }

}


// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that 
// keeps score and reports a winner or loser at the end.

function game() {
    for (let i = 0; i < 5; i++){
        
        correct = false;
        // Use an infinite loop to loop as many time as possible until the user enters the right input
        while (correct === false) {
            const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissor!");
            normalizedPlayerSelection = playerSelection.toLowerCase();
            if (normalizedPlayerSelection === "rock" || normalizedPlayerSelection === "paper" || normalizedPlayerSelection === "scissor") {
                correct = true;
            }
            else {
                alert("Error, Choose the right weapon!");
            }

        }
   
        const computerSelection = computerChoice();
        normalizedComputerSelection = computerSelection.toLowerCase();
        console.log(playRound(normalizedPlayerSelection, normalizedComputerSelection));
    }
}

game()