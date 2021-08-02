// HTML Elements

const tictactoeBx = document.querySelectorAll('.tictactoe-bx');
const playerXScoreboard = document.querySelector('.player-X-score');
const playerOScoreboard = document.querySelector('.player-O-score');
const playerNotif = document.querySelector('.player-notif');

// Function Expressions

const getPlayerTurn = (()=>
{
    let currentRound = 0;
    let playerName = "";

    return Object.freeze({

        playerTurn : ()=>
        {      
           currentRound % 2 === 0 ? playerName = "Player X" : playerName = "Player O";
           currentRound++;
           return playerName;
        },
        resetPlayerTurn : ()=>
        {
            currentRound = 0;
            playerName = "";
            playerNotif.textContent = "Player X's Turn";
        }
    })
})();

const getValue = (e) =>
{
    if(e.target.textContent !== "") return;

    let playerName = getPlayerTurn.playerTurn();
    
    if(playerName === "Player X")
    {
        e.target.textContent = "X"; 
        playerNotif.textContent = "Player O's Turn";     
    }
    else
    {
        e.target.textContent = "O";
        playerNotif.textContent = "Player X's Turn";
    }
    
    let playerValue = parseInt(e.target.dataset.value);

    tallyValues(playerName,playerValue);
}

const tallyValues = (()=>
{
    let playerXSum = [];
    let playerOSum = [];

    return (playerName,playerValue)=>
    {
        playerName === "Player X" ? playerXSum.push(playerValue) : playerOSum.push(playerValue);

        for(let i=0; i<9; i++)
        {
            for(let j=i+1; j<9; j++)
            {
                for(let k=j+1; k<9; k++)
                {
                    if(playerXSum[i] + playerXSum[j] + playerXSum[k] === 15) 
                    {
                        addPlayerScore(playerName);
                        playerXSum = [];
                        playerOSum = [];
                    }
                    else if(playerOSum[i] + playerOSum[j] + playerOSum[k] === 15)
                    { 
                        addPlayerScore(playerName);
                        playerXSum = [];
                        playerOSum = [];
                    }
                }
            }
        }
        
        if(playerXSum.length === 5 || playerOSum.length === 5)
        {
            alert("Its A Tie!");
            resetGame();
            playerXSum = [];
            playerOSum = [];
        }
    }
})();


const addPlayerScore = (() =>
{
    let playerXScore = 0;
    let playerOScore = 0;

    return (playerName) =>
    {
        if(playerName === "Player X")
        {
            playerXScore++;
            playerXScoreboard.textContent = playerXScore;
            alert(playerName + " wins!");
            resetGame();
        }
        else
        {
            playerOScore++;
            playerOScoreboard.textContent = playerOScore;
            alert(playerName + " wins!");
            resetGame();
        }
    }
})();

const resetGame = ()=> 
{
    tictactoeBx.forEach(bx=> bx.textContent = "");
    getPlayerTurn.resetPlayerTurn();
}

// Event Listeners

tictactoeBx.forEach(bx => bx.addEventListener('click',getValue));

   








