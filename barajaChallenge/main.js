const deck = [];
const gameContainer = document.querySelector(".game-container");
const startButton = document.querySelector(".start-button");

const greaterButton = document.querySelector(".greater");
const smallerButton = document.querySelector(".smaller");

const responseMessage = document.querySelector(".response");

let randomCards;

const passToSecondScreen = () => {
  gameContainer.classList.remove("hidden");
  startButton.classList.add("hidden");
};
const generateDeck = () => {
  const suits = ["♦️", "♠️", "♣️", "♥️"];

  suits.forEach((suit) => {
    for (let i = 2; i <= 14; i++) {
      let card = {};
      let cardNumber;
      if (i <= 10) {
        cardNumber = i.toString();
      } else if (i === 11) {
        cardNumber = "J";
      } else if (i === 12) {
        cardNumber = "Q";
      } else if (i === 13) {
        cardNumber = "K";
      } else if (i === 14) {
        cardNumber = "A";
      }

      card.number = cardNumber;
      card.value = i;
      card.suit = suit;

      deck.push(card);
    }
  });
};

const generateRandomCards = () => {
  let randomCard1 = deck[Math.floor(Math.random() * deck.length)];
  let randomCard2 = deck[Math.floor(Math.random() * deck.length)];
  if (randomCard2.value === randomCard1.value) {
    return generateRandomCards();
  } else {
    randomCards = [randomCard1, randomCard2];
    return randomCards;
  }
};

const showCard1 = (randomCard) => {
  const firstCardSuit = document.querySelectorAll(".current-cardsuit");
  const currentCard = document.querySelector(".number-card");

  firstCardSuit.forEach(
    (cardSuit) => (cardSuit.textContent = randomCard[0].suit)
  );
  currentCard.textContent = randomCard[0].number;
};

const showCard2 = (randomCard) => {
  const secondCardSuit = document.querySelectorAll(".suitcard-to-guess");
  const numbercardToGuess = document.querySelector(".number-to-guess");

  secondCardSuit.forEach((cardSuit) => {
    cardSuit.textContent = randomCard[1].suit;
    responseMessage.classList.remove("no-visible");
  });

  numbercardToGuess.textContent = randomCard[1].number;

  secondCardSuit.forEach((cardSuit) => cardSuit.classList.remove("no-visible"));
};

const checkCardSmaller = (randomCards) => {
  if (randomCards[0].value < randomCards[1].value) {
    let resultCheck = "smaller";
    responseMessage.textContent = "You got it!";
    showCard2(randomCards);

    return resultCheck;
  } else {
    let resultCheck = "bigger";
    responseMessage.textContent = "Nop! Looooser";
    showCard2(randomCards);

    return resultCheck;
  }
};

const checkCardGreater = (randomCards) => {
  if (randomCards[0].value > randomCards[1].value) {
    let resultCheck = "bigger";
    responseMessage.textContent = "You got it!";
    showCard2(randomCards);
    return resultCheck;
  } else {
    let resultCheck = "smaller";
    responseMessage.textContent = "Nop! Looooser";
    showCard2(randomCards);
    return resultCheck;
  }
};

const resetGame = () => {
  responseMessage.classList.add("no-visible");
  const secondCardSuit = document.querySelectorAll(".suitcard-to-guess");
  const numbercardToGuess = document.querySelector(".number-to-guess");
  secondCardSuit.forEach((cardSuit) => cardSuit.classList.add("no-visible"));
  numbercardToGuess.textContent = "?";
  setTimeout(() => {
    randomCards = generateRandomCards();
    showCard1(randomCards);
  }, 3000);
};

const startSuitGame = () => {
  startButton.addEventListener("click", passToSecondScreen);
  generateDeck();
  randomCards = generateRandomCards();
  console.log(randomCards);

  showCard1(randomCards);
  smallerButton.addEventListener("click", () => {
    checkCardSmaller(randomCards);
  });
  greaterButton.addEventListener("click", () => checkCardGreater(randomCards));
  resetGame();
};

startSuitGame();
