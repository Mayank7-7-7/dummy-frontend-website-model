// JS for animations and interactivity

// Animate instructor cards on scroll
const cards = document.querySelectorAll(".instructor_card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Smooth scroll for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Small card hover interaction with message
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.border = "2px solid #ff9800";
  });

  card.addEventListener("mouseleave", () => {
    card.style.border = "none";
  });
});
