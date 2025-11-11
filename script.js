document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Registration Validation
  if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password.length < 6) {
        showPopup("⚠️ Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        showPopup("❌ Passwords do not match!");
        return;
      }

      showPopup(`✅ Welcome, ${name}! Your account has been created.`);
      registerForm.reset();
    });
  }

  // Login Validation
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (email === "" || password === "") {
        showPopup("⚠️ Please fill in both fields.");
        return;
      }

      showPopup(`👋 Welcome back, ${email}! Logged in successfully.`);
      loginForm.reset();
    });
  }
});

// Simple popup message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("show"), 10);
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 2500);
}