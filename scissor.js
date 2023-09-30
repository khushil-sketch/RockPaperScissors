
const choices = ['rock', 'paper', 'scissor']; // initially opted for an Object (dictionary), but getting its length is more complex code.

// Computer's Choice
function computerChoice(){
    // math.random generates a random number between 0 (inclusive) and 1 (exclusive)
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerChoice;
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playerChoice = "rock");

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playerChoice = "paper");

const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => playerChoice = "scissor");

function playRound(normalizedPlayerSelection, normalizedComputerSelection) {
    
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
    
    const computerSelection = computerChoice();
    const playerSelection = playerChoice;

    // Ensuring the player has pressed a button
    while (true) {
        if (playerSelection !== undefined) {
            break;
        }
        else {
            alert("YO CHOOSE A WEAPON MAN");
            break;
        }
    }

    // This method below means we don't have to use the child/descendant combinator, because we have assigned classes to the paragraph tags
    const result2 = document.querySelector(".result");
    result2.textContent = playRound(playerSelection, computerSelection); // textContent ALLOWS YOU TO CHANGE THE TEXT OF THE ELEMENT in the HTML directly!


}


// Adding a div to the body - THIS SOLVES YOUR CONFUSION ON HOW TO ADD A DIV TO THE BODY using appendChild!!!!

// const div = document.createElement('div');
// div.textContent = 'Hello World!';

// document.body.appendChild(div);

// const result = document.querySelector("div.display-result > p");
// result.textContent = "Score: 68";
// document.div.appendChild(result);

// Game Event Listener
const gameButton = document.querySelector(".play");
gameButton.addEventListener("click", game);





