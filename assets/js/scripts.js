// Typing Effect
const roles = [
    "MCA Student@MACFAST|",
    "Web Developer|",
    "Programmer|",
    "Tech Enthusiast|"
];
let count = 0, index = 0, currentText = '', letter = '';

(function type() {
    if (count === roles.length) count = 0;
    currentText = roles[count];
    letter = currentText.slice(0, ++index);
    const typingText = document.getElementById("typing-text");
    if (typingText) typingText.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 120);
    }
})();

// Scroll Reveal
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);

// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Trigger a bit early
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Skill Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-level').forEach(skill => {
        const rect = skill.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            skill.style.width = skill.dataset.skill + '%';
        }
    });
});

// Theme Toggle with Local Storage
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (themeBtn) {
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        themeBtn.innerHTML = isLight
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Contact Form
function sendMessage(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    e.target.reset();
}

// === Image Popup with Navigation ===
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".project-card img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".image-modal .close");
    const prevBtn = document.querySelector(".image-modal .prev");
    const nextBtn = document.querySelector(".image-modal .next");

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[index].src;
        modal.style.display = "flex";
        modal.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => (modal.style.display = "none"), 400);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        refreshModalImage();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        refreshModalImage();
    }

    function refreshModalImage() {
        modalImg.classList.remove("fade-in");
        void modalImg.offsetWidth; // restart animation
        modalImg.src = images[currentIndex].src;
        modalImg.classList.add("fade-in");
    }

    // Add click listeners to project images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    // Button actions
    closeBtn.addEventListener("click", closeModal);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("show")) return;
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "Escape") closeModal();
    });
});
