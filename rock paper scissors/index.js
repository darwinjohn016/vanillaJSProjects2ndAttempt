// HTML Elements

const gameBtn = document.querySelectorAll('.game-btn button');
const playerHands = document.querySelectorAll('.player-hands i');
const computerHands = document.querySelectorAll('.computer-hands i');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const winnerNotif = document.querySelector('.winner-notif');

// Function Expressions

const shuffleComputerHands = (() =>
{
    let count = 0;
    return () =>
    {
        computerHands.forEach((hand,index) => count === index ? hand.style.display="block" : hand.style.display = "none")
        count++;
        if(count === computerHands.length) count = 0;  
    }
})();

let interval = null;

const runShuffleHands = ()=> interval = setInterval(shuffleComputerHands,500);
runShuffleHands();

const stopShuffleHands = ()=> 
{
    clearInterval(interval);   
    computerHands.forEach(hand => hand.style.display = "none");
}

const displayPlayerHand = (e) =>
{
    let playerHand = "";
    playerHands.forEach(hand=>
    {
        if (e.target.dataset.value === hand.dataset.value)
        {
            hand.style.display = "block";
            playerHand = hand.dataset.value;
        }
        else hand.style.display = "none";
    })
    stopShuffleHands();
    displayComputerHand(playerHand);
}

const displayComputerHand = (playerHand) =>
{
    let computerHand = "";
    let randomNum = Math.floor(Math.random()* computerHands.length);
    computerHands.forEach((hand,index) => 
    {
        if(randomNum === index) 
        {
            hand.style.display = "block";
            computerHand = hand.dataset.value;
            handsValidation(playerHand,computerHand);
        }
        else hand.style.display = "none";
    })
}

const handsValidation = (playerHand,computerHand) =>
{
    let player = "Player";
    let computer = "Computer";

    if(playerHand === computerHand) winnerNotif.textContent = "It's A Tie!";

    else if(playerHand === "rock") computerHand === "scissors" ?  addScore(player) :  addScore(computer);
    
    else if(playerHand === "scissors") computerHand === "paper" ?  addScore(player) :  addScore(computer);
   
    else if(playerHand === "paper") computerHand === "rock" ?  addScore(player) :   addScore(computer); 
}

const addScore = (()=>
{
    let playerScores = 0;
    let computerScores = 0;

    return (name) =>
    {
        if(name === "Player")
        {
            winnerNotif.textContent = name + " Wins This Round!";
            playerScores++;
            playerScore.textContent = playerScores;
        }
        else
        {   
            winnerNotif.textContent = name + " Wins This Round!";
            computerScores++;
            computerScore.textContent = computerScores;
        }
    }
})();

// Event Listeners

gameBtn.forEach(btn => btn.addEventListener('click',displayPlayerHand));










