
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let gameOver = false;

function checkGuess() {

    if (gameOver) return;

    const input = document.getElementById("guessInput");

    const guess = Number(input.value);

    const message = document.getElementById("message");

    if (input.value === "" || guess < 1 || guess > 100) {

        message.textContent = "Please enter a number between 1 and 100!";

        return;
    }

    attempts++;

    document.getElementById("attempts").textContent = attempts;

    if (guess === secretNumber) {

        message.textContent = "🎉 Correct! You Won!";

        message.style.color = "#4ade80";

        gameOver = true;

        document.getElementById("checkBtn").disabled = true;

    } else if (guess < secretNumber) {

        message.textContent = "📉 Too Low! Try Again.";

        message.style.color = "#fbbf24";

    } else {

        message.textContent = "📈 Too High! Try Again.";

        message.style.color = "#fb7185";
    }

    input.value = "";

    input.focus();
}

function restartGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    gameOver = false;

    document.getElementById("attempts").textContent = 0;

    document.getElementById("message").textContent =
        "Let's start the game! 🚀";

    document.getElementById("message").style.color = "#fbbf24";

    document.getElementById("guessInput").value = "";

    document.getElementById("checkBtn").disabled = false;
}
