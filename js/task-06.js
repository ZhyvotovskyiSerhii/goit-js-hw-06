const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", onInputValidation);
function onInputValidation(evt) {
  const currentLength = evt.currentTarget.value.length;
  const validLength = inputElement.dataset.length;
  this.classList.add("invalid");
  this.classList.remove("valid");
  if (currentLength === validLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}

