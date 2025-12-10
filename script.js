/* ==========================================================
   MOBILE MENU TOGGLE
========================================================== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});


/* ==========================================================
   REVEAL ON SCROLL ANIMATION
========================================================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run initially


/* ==========================================================
   TYPING ANIMATION — PREMIUM VERSION
========================================================== */
const typingElement = document.querySelector(".typing");
const typingWords = [
    "Java Developer",
    "SQL Learner",
    "Mindset Builder",
    "Silent Hard Worker"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typingWords.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


/* ==========================================================
   PARTICLES JS CONFIG (RED PREMIUM MODE)
========================================================== */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 55, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "#ff0000" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4 },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff0000",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none"
        }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    },
    "retina_detect": true
});


/* ==========================================================
   PROFILE IMAGE AUTO-HIDE IF MISSING
========================================================== */
const profileImg = document.getElementById("profile-img");

if (profileImg) {
    profileImg.onerror = () => {
        profileImg.style.display = "none";
    };
}


/* ==========================================================
   SMOOTH PAGE TRANSITIONS (FADE-IN)
========================================================== */
document.body.classList.add("page-loaded");

window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});
