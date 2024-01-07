//check if html is loaded or not
// it will prevent to load the script before the html load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to form and input elements by their IDs
  const form = document.getElementById("registrationForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  // Add a submit event listener to the form

  form.addEventListener("submit", function (event) {
    // event handlers to prevent the default behavior associated with an event.
    if (!validUsername()) {
      // Validate the username and prevent form submission if validation fails
        event.preventDefault();
    }

    if (!validEmail()) {
      event.preventDefault();
    }

    if (!validPassword) {
      event.preventDefault();
    }
  });

  //add eventlisteners to username , email and password
  username.addEventListener('input', validUsername);
  email.addEventListener('input', validEmail);
  password.addEventListener('input', validPassword);

  //select the spans to show the errors
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  function validUsername() {
    //remove the spaces in form by using trim
    const usernameField = username.value.trim();

    // Check if the username is empty
    if (usernameField === " ") {
      usernameError.textContent = "Username should not be empty";
      return false;
    }

    if(usernameField.length < 8){
        usernameError.textContent = 'Username should be 8 characters'
        return false;
    }

    // Clear the error message if the username is not empty
    usernameError.textContent = "";
    return true;
  }

  function validEmail() {
    const emailField = email.value.trim();
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;

    // Check if the email is empty

    if (emailField === "") {
      emailError.textContent = "email should not be empty";
      return false;
    }

    //check if the email field meets the requirement
    if (!emailRegex.test(emailField)) {
      emailError.textContent = "Invalid email ";
      return false;
    }

    // if the email is filled and has valid format
    emailError.textContent = "";
    return true;
  }

  function validPassword() {
    const passwordField = password.value.trim();
    // Check if the username is empty

    if (passwordField === "") {
      passwordError.textContent = "password should not be empty";
      return false;
    }

    if (passwordField.length < 8) {
      passwordError.textContent = "password must be atleast 8 characters";
      return false;
    }

    // Clear the error message if the password is not empty and meets the length requirement
    passwordError.textContent = "";
    return true;
  }
});
