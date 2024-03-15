document.body.children[2].children[0].href = "https://google.com";

let anchorElement = document.getElementById("eternal-link");
anchorElement.href = "https://google.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "google";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector("h1");

document.querySelector("h1").remove();

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "No <strong>way!</strong>";
