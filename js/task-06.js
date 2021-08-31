
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
