let round = 1;
let playerScore = 0;
let computerScore = 0;
let winScore = 3;

//this sets the basis for the game. Round starts at 1, both scores are at 0, and winScore is the limit for the scores (best out of 5)


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

// this is the main game. function gamePlay asks the player to choose between the three choices, automatically converts any answer into lowercase
// chooses the computer's hand randomly from an array, pulls the computer's choice out of the function and into the variable "computerHand"
// goes through all possibilities of ties and losses through the use of if/else if, otherwise the player wins and returns the "you won" message
// if the computer wins, it increases computerScore by 1, or the playerScore if the player wins
// the last line of the code is to increase the round number, just to keep track of which round the game is on


while ((playerScore < winScore) || (computerScore < winScore)){
    console.log(`You are on round ${round}`);
    gamePlay();
    console.log(`You have ${playerScore} points!`);
    console.log(`The computer has ${computerScore} points!`)

    if (playerScore === winScore){
        alert("Congrats, you won the battle! Refresh to play again!");
    } else if (computerScore === winScore){
        alert("Ooo, Tough break! The computer has won the battle! Refresh to try again!");
    }

    if ((playerScore === winScore) || (computerScore === winScore)){
        break;
    }
};

// this code loops the actual game. As long as the player or computer score is less than 3 (winScore), it loops the code
// when either the player or computer score reaches 3, it breaks the code, ending the game and alerting the appropriate code
