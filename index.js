let numberToGuess;
let computerGuess;
let minGuess = 0;
let maxGuess = 100;
let numGuesses = 0;

const takeAGuess = () => {
    console.log("minGuess: ", minGuess);
    console.log("maxGuess: ", maxGuess);
    let guessText = document.getElementById("guess-number");
    
    // Refactor to use binary search - start
    if (numGuesses === 0) {
        // This is always the best first guess
        computerGuess = 50;
    } else {
        computerGuess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
    }
    // refactor to use binary search - end
    
    guessText.textContent = computerGuess;
    numGuesses++;

    console.log('Number to guess: ', computerGuess);
    console.log('Num guesses: ', numGuesses);
}

const higherClicked = () => {
    const doucheText = document.getElementById("douche");
    minGuess = computerGuess + 1;
    if (computerGuess < numberToGuess) {
        takeAGuess();
    } else {
        doucheText.classList.remove("hide");

        setTimeout(() => {
            doucheText.classList.add("hide");
        }, 2000);
    }
}

const lowerClicked = () => {
    const doucheText = document.getElementById("douche");
    maxGuess = computerGuess - 1;
    if (computerGuess > numberToGuess) {
        takeAGuess();
    } else {
        doucheText.classList.remove("hide");

        setTimeout(() => {
            doucheText.classList.add("hide");
        }, 2000);
    }
}

const correctClicked = () => {
    const winText = document.getElementById("win-text");
    winText.classList.remove("hide");
    const numGuessesToWinText = document.getElementById("num-guesses-to-win");
    numGuessesToWinText.textContent = numGuesses;
}

const startGame = (num) => {
    numberToGuess = num;
    console.log('The number to guess is ', numberToGuess);
    takeAGuess();
}

// TODO:
// - Ensure user can't type in a number outside range