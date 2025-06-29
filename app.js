const words = ["sho'rva", "baliq", "chuchvora", "shovla", "shashlik", "norin", "somsa"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 20;

const wordContainer = document.getElementById("wordContainer");
selectedWord.split("").forEach(() => {
    const box = document.createElement("div");
    box.classList.add("box");
    wordContainer.appendChild(box);
});

document.getElementById("attemptsLeft").textContent = attemptsLeft;

document.addEventListener("keydown", (event) => {
    const guessedLetter = event.key.toLowerCase();

    let correctGuess = false;

    selectedWord.split("").forEach((letter, index) => {
        if (letter === guessedLetter) {
            const boxes = document.querySelectorAll(".box");
            boxes[index].textContent = guessedLetter.toUpperCase();
            correctGuess = true;
        }
    });

    if (!correctGuess) {
        attemptsLeft--;
        document.getElementById("attemptsLeft").textContent = attemptsLeft;
    }

    if (attemptsLeft <= 0) {
        showMessage(`Вы проиграли! Слово было: ${selectedWord.toUpperCase()}`);
        disableGame();
    } else if (![...document.querySelectorAll(".box")].some(box => box.textContent === "")) {
        showMessage("Поздравляем! Вы угадали слово!");
        disableGame();
    }
});

function showMessage(message) {
    document.getElementById("message").textContent = message;
}

function disableGame() {
    document.removeEventListener("keydown", handleKeyPress);
}
