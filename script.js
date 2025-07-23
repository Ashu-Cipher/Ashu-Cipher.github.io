
const text = "Ethical Hacker 🛡️" , "Cybersecurity Enthusiast 🔐" , "Network Tester 🌐" , "Penetration Tester 👨🏻‍💻" ;
let index = 0;
let forward = true;
const speed = 100;
const textElement = document.getElementById("typewriter-text");

function typeEffect() {
  if (forward) {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    } else {
      forward = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (index > 0) {
      textElement.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, speed / 2);
    } else {
      forward = true;
      setTimeout(typeEffect, 800);
    }
  }
}

typeEffect();
