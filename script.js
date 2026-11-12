const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Dark Mode";
    }
    else {
        themeToggle.textContent = "Light Mode";
    }
});

if (typeof ScrollReveal !== "undefined" && !window.matchMedia("(prefers-reduced-mottion: reduce)").matches) {
    ScrollReveal().reveal("#about, #projects, #contact",{
        distance: "25px", duration: 700, origin: "bottom", interval: 150, reset: false

    });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    VanillaTilt.init(document.querySelectorAll("#projects article"), {
        max: 1.5, speed: 400, scale: 1, glare: false, gyroscope: false
    });
}