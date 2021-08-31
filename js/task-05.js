const inputName = document.querySelector("#name-input");
const inputAdd = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        inputAdd.textContent = event.currentTarget.value;
      }
      else {
        document.querySelector('#name-output').textContent = "Anonymous";
      }
    })
