/* ==========================================================
   MOBILE MENU TOGGLE
   ========================================================== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
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
revealOnScroll();


/* ==========================================================
   TYPING ANIMATION
   ========================================================== */
const typingElement = document.querySelector(".typing");
const typingWords = [
    "Java Full Stack Developer",
    "SQL Specialist",
    "Motivation Creator",
    "Mindset Builder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = typingWords[wordIndex];

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

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();


/* ==========================================================
   ACTIVE NAVBAR HIGHLIGHT
   ========================================================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveMenu() {
    let scrollY = window.pageYOffset;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
            navItems.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveMenu);


/* ==========================================================
   EXTENDED DESCRIPTION TOGGLE (READ MORE / SHOW LESS)
   ========================================================== */
const toggleBtn = document.getElementById("toggleAbout");
const showLessBtn = document.getElementById("showLess");
const extendedBox = document.getElementById("extendedAbout");

toggleBtn.addEventListener("click", () => {
    extendedBox.classList.add("visible");
    toggleBtn.style.display = "none";
});

showLessBtn.addEventListener("click", () => {
    extendedBox.classList.remove("visible");
    toggleBtn.style.display = "inline-block";
});


/* ==========================================================
   PARTICLES JS — HERO SECTION ONLY
   ========================================================== */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 55,
            "density": { "enable": true, "value_area": 800 }
        },
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
            "direction": "none",
            "straight": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" }
        }
    },
    "retina_detect": true
});


/* ==========================================================
   AUTO LOAD GITHUB REPOSITORIES
   ========================================================== */
function loadGitHubRepos() {
    const username = "dhanusheelan-bit";
    const container = document.getElementById("github-projects");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";

            data.forEach(repo => {
                if (repo.fork) return;

                const card = document.createElement("div");
                card.classList.add("repo-card");

                card.innerHTML = `
                    <h4>${repo.name}</h4>
                    <p>${repo.description ? repo.description : "No description available."}</p>
                    <span class="repo-lang">Language: ${repo.language}</span><br>
                    <a class="repo-link" href="${repo.html_url}" target="_blank">View on GitHub →</a>
                `;

                container.appendChild(card);
            });
        })
        .catch(() => {
            container.innerHTML = "<p style='color:red;'>Unable to load GitHub repositories.</p>";
        });
}

loadGitHubRepos();

