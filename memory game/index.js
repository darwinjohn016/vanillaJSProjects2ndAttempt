// HTML Elements

const cards = document.querySelectorAll('.card');
const cardsBx = document.querySelector('.memory-game');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milli = document.querySelector('.milli');

cards.forEach(card => cardsBx.removeChild(card));

// Function Expressions

const shuffleCards = (cards) =>
{
    let noDuplicateArr = new Set();
    do
    {
        j = Math.floor(Math.random() * cards.length);
        noDuplicateArr.add(j);
    }
    while(noDuplicateArr.size != cards.length);

    let randomPosArr = Array.from(noDuplicateArr);
    for(let i=0; i<cards.length; i++)
    {
        cardsBx.append(cards[randomPosArr[i]]);
    }
}

const selectCard = (e) =>
{
    e.target.style.transform = `perspective(${4000}px) rotateY(${0}deg)`;
    e.target.style.pointerEvents = "none";
    checkIfMatch(e);
}

const checkIfMatch = (() =>
{
    let firstCard = "";
    let secondCard = "";
    let count = 0;

    return (e) =>
    {
        
        firstCard === "" ? firstCard = e.target : secondCard = e.target;
        
        if(secondCard === "" || secondCard === firstCard) return;

        if(firstCard.dataset.value == secondCard.dataset.value)
        {
            firstCard.style.transform = `perspective(${4000}px) rotateY(${0}deg)`;
            secondCard.style.transform = `perspective(${4000}px) rotateY(${0}deg)`;

            firstCard.style.pointerEvents = "none";
            secondCard.style.pointerEvents = "none";

            firstCard = "";
            secondCard = "";

            count++;

            if(count === 5)
            {
                alert("Your Time: " + minutes.textContent+ ":"+seconds.textContent + ":" + milli.textContent);
                stopTimer();
                resetGame();
                count = 0;
            }
        }
        else if(firstCard.dataset.value != secondCard.dataset.value)
        {
            setTimeout(()=>
            {                
                firstCard.style.transform = `perspective(${4000}px) rotateY(${180}deg)`;
                secondCard.style.transform = `perspective(${4000}px) rotateY(${180}deg)`;
                firstCard.style.pointerEvents = "all";
                secondCard.style.pointerEvents = "all";
                firstCard = "";
                secondCard = "";
            },500);
        }
    }
})();

const timer = (()=>
{
    let ms = 0;
    let secs = 0;
    let mins = 0;

    return Object.freeze({

        run : ()=>
        {            
            ms === 100 ? ms = 0 : ms++;
            ms > 9 ? milli.textContent = ms : milli.textContent = "0" + ms;

            if(ms === 100) secs++;
            secs > 9 ? seconds.textContent = secs : seconds.textContent = "0" + secs;

            if(secs === 60) 
            {
                mins++;
                secs = 0;   
            }

            mins > 9 ? minutes.textContent = mins : minutes.textContent = "0" + mins;
        },

        stop: ()=>
        {
            ms = 0;
            secs = 0;
            mins = 0; 
        }
    })
})();

let interval = null;

const runTimer = () =>
{
    interval = setInterval(timer.run,10);
    cards.forEach(card=> card.removeEventListener('click', runTimer));
}

const stopTimer = () =>
{
    clearInterval(interval);
    timer.stop();
    cards.forEach(card=> card.addEventListener('click', runTimer));
}

const resetGame = () =>
{
    minutes.textContent = "00";
    seconds.textContent = "00";
    milli.textContent = "00";
    shuffleCards(cards);
    cards.forEach(card => 
    {
        card.style.transform = `perspective(${4000}px) rotateY(${180}deg)`;
        card.style.pointerEvents = "all";
    })
}

shuffleCards(cards);

// Event Listeners

cards.forEach(card => 
{
    card.addEventListener('click',selectCard);
    card.addEventListener('click',runTimer);
})
























