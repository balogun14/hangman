const wordEl = document.getElementById("word");
const wrongLetters = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const WrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          ` <span class="letter">
          ${correctLetters.includes(letter) ? letter : ""}
        </span>`
      )
      .join("")}
    `;
  const innerword = wordEl.innerText.replace(/\n/g, "");
  if (innerword === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! 😃";
    popup.style.display = 'flex'
  } else {
  }
}
displayWord();
