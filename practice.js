let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputStroke = document.body.children[1];

function logInput() {
  let enteredText = inputStroke.value;
    console.log(enteredText);
}

inputStroke.addEventListener("input", logInput);
