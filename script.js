document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const feedbackDiv = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let messages = [];
    let isValid = true;

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@")) {
      isValid = false;
      messages.push("Email must be valid.");
    }

    // Password validation
    if (password.length < 6) {
      isValid = false;
      messages.push("Password must be at least 6 characters long.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
