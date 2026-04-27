

const charElements = document.querySelectorAll(".char-reveal");

// split text into spans
charElements.forEach((el) => {
  const text = el.innerText;
  el.innerHTML = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${i * 0.08}s`;
    el.appendChild(span);
  });
});

// scroll reveal
const charObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

charElements.forEach((el) => charObserver.observe(el));

// navbar highlighting based on current page
const navLinks = document.querySelectorAll(".about a");
const pages = document.querySelectorAll("#main > div");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Find the corresponding link and add active class
        const pageIndex = Array.from(pages).indexOf(entry.target);
        if (pageIndex !== -1 && navLinks[pageIndex]) {
          navLinks[pageIndex].classList.add("active");
        }
      }
    });
  },
  { threshold: 0.3 }
);

pages.forEach((page) => navObserver.observe(page));
