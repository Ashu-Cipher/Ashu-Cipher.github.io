const phrases = [
  "🧠 Stay curious. Stay secure.",
  "💻 Student of Cybersecurity.",
  "🔐 Learning from TryHackMe.",
  "🐧 Linux is my playground."
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const textElement = document.getElementById("typing-text");

  const phrase = phrases[currentPhrase];
  const displayText = phrase.substring(0, currentChar);
  textElement.textContent = displayText;

  if (!isDeleting) {
    if (currentChar < phrase.length) {
      currentChar++;
    } else {
      isDeleting = true;
    }
  } else {
    if (currentChar > 0) {
      currentChar--;
    } else {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);