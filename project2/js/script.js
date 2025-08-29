// Smooth scroll for nav links
document.querySelectorAll("header ul li a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Typing effect for search placeholder
const searchInput = document.querySelector(".search-container input");
const placeholderTexts = [
  "Search for new courses...",
  "Find your next skill...",
  "Explore trending topics...",
  "Learn from experts..."
];

let i = 0;
function changePlaceholder() {
  searchInput.setAttribute("placeholder", placeholderTexts[i]);
  i = (i + 1) % placeholderTexts.length;
}
setInterval(changePlaceholder, 2500);

// Button click animation
document.querySelector(".search-container button").addEventListener("click", () => {
  alert("Searching courses... (this will be linked later)");
});
