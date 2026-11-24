
// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// TYPE THE HERO NAME
const typingText = document.querySelector(".typing-text");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (typingText && !reduceMotion.matches) {
  const name = typingText.textContent;
  let characterIndex = 0;
  let deleting = false;

  typingText.textContent = "";

  const typeNextCharacter = () => {
    if (!deleting && characterIndex < name.length) {
      typingText.textContent += name[characterIndex];
      characterIndex += 1;
      window.setTimeout(typeNextCharacter, 90);
      return;
    }

    if (!deleting) {
      deleting = true;
      window.setTimeout(typeNextCharacter, 1300);
      return;
    }

    if (characterIndex > 0) {
      characterIndex -= 1;
      typingText.textContent = name.slice(0, characterIndex);
      window.setTimeout(typeNextCharacter, 45);
      return;
    }

    deleting = false;
    window.setTimeout(typeNextCharacter, 450);
  };

  window.setTimeout(typeNextCharacter, 350);
}
