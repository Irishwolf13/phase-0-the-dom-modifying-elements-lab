const myElement = document.getElementById("main");
myElement.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Rooeny is the champion";
document.body.append(newHeader);
