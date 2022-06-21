let round = 1;
let playerScore = 0;
let computerScore = 0;
let winScore = 3;

function gamePlay(){
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

    if (computerHand === 'rock' && playerHand === 'scissor'){
        console.log("Sorry, you've lost! Rock beats scissors!")
        computerScore++;
    } else if (computerHand === 'scissors' && playerHand === 'paper'){
        console.log("Sorry, you've lost! Scissors cuts paper!")
        computerScore++;
    } else if (computerHand === 'paper' && playerHand === 'rock'){
        console.log("Sorry, you've lost! Paper covers rock!")
        computerScore++;
    } else if (computerHand === playerHand){
        console.log("You've tied!")
    } else {
        console.log(`You won, ${playerHand} beats ${computerHand}!`)
        playerScore++;
    };
    
    round++;

};

while ((playerScore < winScore) || (computerScore < winScore)){
    console.log(`You are on round ${round}`);
    gamePlay();
    console.log(`You have ${playerScore} points!`);
    console.log(`The computer has ${computerScore} points!`)

    if (playerScore === winScore){
        console.log("Congrats, you won the battle! Refresh to play again!")
    } else if (computerScore === winScore){
        console.log("Ooo, Tough break! The computer has won the battle! Refresh to try again!")
    }

    if ((playerScore === winScore) || (computerScore === winScore)){
        break;
    }
};
