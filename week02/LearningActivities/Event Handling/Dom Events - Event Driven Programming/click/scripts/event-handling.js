const buttonElement = document.getElementById("submitButton");

function copyInput(event) {

  console.log(event.type);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value; 
}
buttonElement.addEventListener("click", copyInput);

