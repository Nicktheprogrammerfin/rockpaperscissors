const computerPlay = function(){
    let hands = ['rock', 'paper', 'scissors']
    let computerChoice = hands[Math.floor(Math.random() * hands.length)];
    return computerChoice;
};

computerPlay();
