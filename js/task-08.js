  const form = document.querySelector(".login-form");
  form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
      alert("Все поля должны быть заполнены!");
    }
    const form = {
      Email: `${email.value}`,
      Password: `${password.value}`
    }
    console.log(form);
    event.currentTarget.reset();
  }
