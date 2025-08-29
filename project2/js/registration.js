document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const terms = document.getElementById("terms").checked;

    let errors = [];

    // Validation
    if (name.length < 3) errors.push("⚠️ Name must be at least 3 characters.");
    if (!/^[0-9]{10}$/.test(phone)) errors.push("⚠️ Phone must be 10 digits.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push("⚠️ Invalid email format.");
    if (!terms) errors.push("⚠️ You must accept the terms & conditions.");

    // Remove old messages
    document.querySelectorAll(".error-message, .success-message").forEach(el => el.remove());

    if (errors.length > 0) {
      const errorBox = document.createElement("div");
      errorBox.className = "error-message";
      errorBox.innerHTML = errors.join("<br>");
      errorBox.style.background = "rgba(255, 0, 0, 0.15)";
      errorBox.style.color = "#ff4d4d";
      errorBox.style.padding = "12px";
      errorBox.style.borderRadius = "8px";
      errorBox.style.marginBottom = "15px";
      form.prepend(errorBox);
    } else {
      const successBox = document.createElement("div");
      successBox.className = "success-message";
      successBox.innerHTML = "🎉 Registration Successful!";
      successBox.style.background = "rgba(0, 255, 100, 0.15)";
      successBox.style.color = "#4dff91";
      successBox.style.padding = "12px";
      successBox.style.borderRadius = "8px";
      successBox.style.marginBottom = "15px";
      form.prepend(successBox);

      form.reset();
    }
  });
});
