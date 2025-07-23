
const hackerTexts = [
  "🧠 Stay curious. Stay secure.",
  "root@Ashu_Cipher:~# hacking the matrix...",
  "echo 'Welcome to my world!'"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("hacker-text");

function type() {
  const currentText = hackerTexts[index];
  if (isDeleting) {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % hackerTexts.length;
    }
  } else {
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
    }
  }
  textElement.textContent = currentText.slice(0, charIndex);
  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);
