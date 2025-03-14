// Pseudocode for the Card-Based Ball Toss Game
// 1. Initialize game, the cards section generates all 26 cards in sorted positions.
// 2. Player places a bet, it must be higher than 0, (2-10, A, J, Q, K).
// 3. Player chooses a card from the cards section.
// 4. Player pressed the "Start" button, and will only proceed when a proper bet is inputted and a card is chosen.
// 5. if the start button is pressed without proper bet input AND a card is not chosen, send alert(). Else; proceed to next step.
// 5. System Randomly Generates the 26 card positions, all both 26 red and black cards of all suites. No duplicates, all cards appear only once.
// 6. Player throws ball
// 7. Determine the card on which the ball lands (Player thorws ball Gobble-de-gook what-cha-ma-call-it)
// 8. Check for matching properties (Number, Suite)
/*
    8.1. IF NO property matches the chosen card
        9. Player loses
    8.2. IF ANY property matches the chosen card
        10. Player wins
*/
const cards = document.getElementById("cards");
const betInput = document.getElementById("betinput");
const betCard = document.getElementById("betcard");
const betAmount = document.getElementById("betamount");
const startBtn = document.getElementById("start");
const shuffleBtn = document.getElementById("shuffle");
let cardSelected = false;
let gameStarted = false;
const suites = ['&#9824;', '&#9827;', '&#9829;', '&#9830;'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const deck = [];

const orderedGen = () => { // START UP, EVERYTHING IS ORDERED, PLAYER CHOOSES A CARD FROM HERE
    cards.innerHTML = ``;
    for(let i = 0;i < values.length*2-1;i++) {
        const orderColor = i > 12 ? 'white' : 'red';
        const orderSuite = i % suites.length;
        const orderValue = i % 13;
        cards.innerHTML += `<div class="card ${orderColor}">${values[orderValue]}${suites[orderSuite]}</div>`;
    }
};
orderedGen();
startBtn.addEventListener("click", () => {
    const bet = parseFloat(betInput.value);
    if (bet > 0 && cardSelected) {
        betAmount.innerText = bet;
        gameStarted = true;
    } else { alert("Bet must be higher than 0 and a valid card must be selected!"); }
});

cards.addEventListener("click", () => { // A IS CARD IS CLICKED, IT IS RECORDED IN THE SYSTEM
    if (event.target.classList.contains("card")){
        cardSelected = true;
        const selectedCard = event.target.innerText;
        betCard.innerText = `${selectedCard}`;
    }
});
