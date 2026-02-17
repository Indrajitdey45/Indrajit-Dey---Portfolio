

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
