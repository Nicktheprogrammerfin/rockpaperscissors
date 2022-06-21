    
let gameMatches = 0;
let playerScore = 0;
let computerScore = 0;
let winScore = 3;

if (playerScore === winScore){
    console.log("Congrats, you won the battle!")
}

if (computerScore === winScore){
    console.log("Ooo, Tough break! The computer has won the battle!")
}


let playerSelection = prompt("Choose: Rock, Paper, or Scissors!");
let playerHand = playerSelection.toLowerCase();
console.log(`You chose: ${playerHand}`);

const computerPlay = function(){
let hands = ['rock', 'paper', 'scissors'];
let computerChoice = hands[Math.floor(Math.random() * hands.length)];
return computerChoice;
};

let computerHand = computerPlay();

console.log(`The computer chose: ${computerHand}`)


function gamePlay(playerHand, computerHand){
    if (computerHand === 'rock' && playerHand === 'scissor'){
        console.log("Sorry, you've lost! Rock beats scissors!")
    } else if (computerHand === 'scissors' && playerHand === 'paper'){
        console.log("Sorry, you've lost! Scissors cuts paper!")
    } else if (computerHand === 'paper' && playerHand === 'rock'){
        console.log("Sorry, you've lost! Paper covers rock!")
    } else if (computerHand === playerHand){
        console.log("You've tied!")
    } else {
        console.log(`You won, ${playerHand} beats ${computerHand}!`)
    };
}

gamePlay();