const phrases = [
  "🧠 Stay curious. Stay secure.",
  "Scanning vulnerabilities...",
  "TryHackMe Session: Active",
  "Listening on port 443..."
];
const el = document.querySelector(".typed-text");
let i = 0, j = 0, isDeleting = false;
function loop() {
  const current = phrases[i];
  if (!isDeleting && j < current.length) {
    el.textContent += current[j++];
  } else if (isDeleting && j > 0) {
    el.textContent = el.textContent.slice(0, -1);
    j--;
  }
  if (j === current.length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }
  setTimeout(loop, isDeleting ? 50 : 150);
}
document.addEventListener("DOMContentLoaded", loop);