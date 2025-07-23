const texts = ["🧠 Stay curious.", "💻 Stay secure.", "– Ashu_Cipher"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = isDeleting
    ? currentText.slice(0, --index)
    : currentText.slice(0, ++index);

  document.getElementById("typed-text").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
})();