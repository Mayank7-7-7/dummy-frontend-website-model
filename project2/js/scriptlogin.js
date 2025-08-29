// ===== Form Validation & Animations =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let terms = document.getElementById("terms").checked;

    if (!name || !email || !password) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    if (!terms) {
      alert("⚠️ Please accept the terms and conditions.");
      return;
    }

    // Show success animation
    form.style.animation = "fadeInUp 1s ease";
    alert("✅ Form submitted successfully!");
    form.reset();
  });

  // Input focus glow effect
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 10px rgba(248,193,2,0.7)";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "none";
    });
  });
});
