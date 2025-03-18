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
       9. Player wins
*/
const cards = document.getElementById("cards");
const betInput = document.getElementById("betinput");
const betCard = document.getElementById("betcard");
const betAmount = document.getElementById("betamount");
let balanceAmount = document.getElementById("balanceamount");
const startBtn = document.getElementById("start");
const shuffleBtn = document.getElementById("shuffle");
let cardSelected = false;
let gameStarted = false;
let selectedCard;
// const suites = ['&#9824;', '&#9827;', '&#9829;', '&#9830;'];
const suites = ['♠', '♣', '♥', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const deck = []; // object array
balanceAmount.innerText = "0"

const orderedGen = () => { // START UP, EVERYTHING IS ORDERED, PLAYER CHOOSES A CARD FROM HERE
    cards.innerHTML = ``;
    for(let i = 0;i < values.length*2;i++) {
        const orderColor = i > 12 ? 'white' : 'red';
        const orderSuite = i % suites.length;
        const orderValue = i % 13;
        deck.push({
            color: orderColor,
            suite: suites[orderSuite],
            value: values[orderValue]
        });
        // cards.innerHTML += `<div class="card ${orderColor}">${values[orderValue]}${suites[orderSuite]}</div>`; // DEBUGGING
    }
    if (deck.length > 0) { // Remove 1 card
        const randomIndex = Math.floor(Math.random() * deck.length);
        deck.splice(randomIndex, 1);
    }
    deck.forEach(card => { // Display all cards
        cards.innerHTML += `<div class="card ${card.color}">${card.value}${card.suite}</div>`;
    });
};
orderedGen();

const randBall = () => {
    const rand = Math.floor(Math.random() * deck.length);
    return deck[rand];
};
const didPlayerWin = () => {
    const ball = randBall();
    const selectedCardValue = selectedCard.slice(0, -1);
    const selectedCardSuite = selectedCard.slice(-1);
    if (ball.value === selectedCardValue || ball.suite === selectedCardSuite) {
        alert(`The system rolled a ${ball.value}${ball.suite}! You won!`);
        balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(betInput.value);
    } else {
        alert(`The system rolled a ${ball.value}${ball.suite}! You lost!`);
        balanceAmount.innerText = parseFloat(balanceAmount.innerText) - parseFloat(betInput.value);
    }
}

startBtn.addEventListener("click", () => { // BUTTONS, HOLA CHICO, VAVANOS!
    const bet = parseFloat(betInput.value);
    if (bet > 0) {
        betAmount.innerText = bet;
        if (cardSelected) {
            gameStarted = true;
            didPlayerWin();
        } else { alert("A card must be selected!") }
    } else { alert("Bet must be higher than 0!") }
});
betInput.addEventListener("keydown", (e) => {
    const bet = parseFloat(betInput.value);
    if (e.key === "Enter") {
        if (bet > 0) {
            betAmount.innerText = bet;
            if (cardSelected) {
                gameStarted = true;
                didPlayerWin();
            } else { alert("A card must be selected!") }
        } else { alert("Bet must be higher than 0!") }
    }
  })
cards.addEventListener("click", () => { // A IS CARD IS CLICKED, IT IS RECORDED IN THE SYSTEM
    if (event.target.classList.contains("card")){
        cardSelected = true;
        selectedCard = event.target.innerText;
        betCard.innerText = `${selectedCard}`;
        selectedCard = deck.find(card => `${card.value}${card.suite}` === cardText);
    }
});