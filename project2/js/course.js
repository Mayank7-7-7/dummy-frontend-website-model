// Smooth scroll for navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Highlight row when clicked
const rows = document.querySelectorAll("table tbody tr");
rows.forEach(row => {
  row.addEventListener("click", () => {
    rows.forEach(r => r.classList.remove("active-row"));
    row.classList.add("active-row");
  });
});

// Active row animation
const style = document.createElement("style");
style.innerHTML = `
  .active-row {
    background: rgba(255, 102, 0, 0.5) !important;
    transition: 0.4s ease;
  }
`;
document.head.appendChild(style);
