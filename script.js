const computerPlay = function(){
    let hands = ['rock', 'paper', 'scissors'];
    let computerChoice = hands[Math.floor(Math.random() * hands.length)];
    return computerChoice;
};

let computerHand = computerPlay();

// console.log(computerHand)


const playerSelection = function(){
   let playerChoice = prompt("Choose: Rock, Paper, or Scissors!")
   return playerChoice
}

let playerChoice = playerSelection();

let playerHand = playerChoice.toLowerCase();


// console.log(playerHand);

if (computerHand === 'rock' && playerHand === 'scissor'){
    alert("Sorry, you've lost! Rock beats scissors!")
} else if (computerHand === 'rock' && playerHand === 'rock'){
    alert("You've tied! You both picked rock!")   
} else if (computerHand === 'scissors' && playerHand === 'paper'){
    alert("Sorry, you've lost! Scissors cuts paper!")
} else if (computerHand === 'scissors' && playerHand === 'scissors'){
    alert("You've tied! You both picked scissors")
} else if (computerHand === 'paper' && playerHand === 'rock'){
    alert("Sorry, you've lost! Paper covers rock!")
} else if (computerHand === 'paper' && playerHand === 'paper'){
    alert("You've tied!")
} else {
    alert(`You won! ${playerHand} beats ${computerHand}!`)
};
