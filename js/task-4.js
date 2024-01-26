const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  console.log(data);

  form.reset();
});
