let remainingChars = document.getElementById("remaining-chars");
let input = document.getElementById("input-field");

console.dir(remainingChars);
let max = input.maxLength;

function count(event) {
  let chars = event.target.value;
  let length = chars.length;
  let counted = max - length;

  remainingChars.textContent = counted;

  if (counted <= 10) {
    input.classList.add("warning");
  } else {
    input.classList.remove("warning");
  }
}

input.addEventListener("input", count);
