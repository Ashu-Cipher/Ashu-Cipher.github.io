
const phrases = [
  "🧠 Stay curious. Stay secure.",
  "Scanning vulnerabilities...",
  "TryHackMe Session: Active",
  "Listening on port 443..."
];
const el = document.querySelector(".typed-text");
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  isEnd = false;
  el.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }
  const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}
loop();
