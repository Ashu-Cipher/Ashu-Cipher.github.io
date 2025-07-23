const phrases = [
  "Student. Ethical Hacker.",
  "Cybersecurity Explorer.",
  "Learning. Breaking. Securing."
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  const phrase = phrases[currentPhrase];
  typingElement.textContent = phrase.substring(0, currentChar);

  if (!isDeleting) {
    if (currentChar < phrase.length) {
      currentChar++;
    } else {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    if (currentChar > 0) {
      currentChar--;
    } else {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 40 : 100);
}

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

type();
