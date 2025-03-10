// Pseudocode for the Card-Based Ball Toss Game
// 1. Initialize game, the cards section generates all 26 cards in sorted positions.
// 2. Player places a bet, it must be higher than 0.
// 3. Player chooses a card from the cards section.
// 4. Player pressed the "Start" button, and will only proceed when a proper bet is inputted and a card is chosen.
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
/*
    DEBUGGING & TESTING
    shuffleBtn is pressed
    card position
*/
const cards = document.getElementsByClassName("cards");
const betInput = document.getElementById("betinput");
const betAmount = document.getElementById("betamount");
const startBtn = document.getElementById("start");
const shuffleBtn = document.getElementById("shuffle");

const suites = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const deck = [];

startBtn.addEventListener("click", () => {
    const bet = parseFloat(betInput.value);
    if (bet > 0) {
        betAmount.innerText = bet;
    } else {
        alert("Bet must be higher than 0!");
    }
});

shuffleBtn.addEventListener("click", () => {
    // cards.inner.HTML += `<div class="card ${randColor} ${randSuite}">${randValue}</div>`; Use either of these
    // document.createElement("div");.classList.add(randColor, randSuite, 'randValue'); Use either of these
    }
})