<<<<<<< Updated upstream
const textInput = document.querySelector("#validation-input");
const validNumber = Number(textInput.dataset.length);
textInput.addEventListener("focus", () => { 
  });
  
textInput.addEventListener("blur", () => {
    if (textInput.value.length !== validNumber) {
        textInput.classList.add("invalid");
    }  else {
        textInput.classList.remove("invalid")
        textInput.classList.add("valid");
    }
=======
const input = document.querySelector("#validation-input");
const validLength = Number(input.dataset.length);
input.addEventListener("focus", () => { 
  });
  
input.addEventListener("blur", () => {
    if (input.value.length !== validLength) {
        input.classList.add("invalid");
    }  else {
        input.classList.remove("invalid")
        input.classList.add("valid");
    }
>>>>>>> Stashed changes
  });