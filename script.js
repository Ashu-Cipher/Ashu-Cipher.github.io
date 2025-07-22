
const terminalText = document.getElementById('terminal-text');
const phrases = [
  './boot.sh --user Ashu_Cipher',
  'establishing secure connection...',
  'scanning vulnerabilities...',
  'decrypting data █▒▒▒▒▒▒▒▒▒'
];
let i = 0, j = 0, isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[i];
  const displayText = currentPhrase.substring(0, j);
  terminalText.innerHTML = `> ${displayText}<span class="blinking-cursor">_</span>`;

  if (!isDeleting && j <= currentPhrase.length) {
    j++;
  } else if (isDeleting && j >= 0) {
    j--;
  }

  if (j === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, 1000);
    return;
  }

  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

document.addEventListener('DOMContentLoaded', typeLoop);
