const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform validation here
  if (username === "" || password === "") {
    errorMessage.textContent = "Username and password cannot be empty.";
    return;
  }

  // Replace this with a call to your server-side authentication logic
  // that **does not** involve sending the password in plain text
  // (e.g., use a secure hashing algorithm)
  if (username !== "JinkaUmesh" || password !== "1234") {
    errorMessage.textContent = "Invalid username or password.";
    return;
  }

  // Simulate successful login (replace with actual redirection)
  alert("Login successful!");
});
