//======================================
// DELICEA
// app.js
//======================================

// Menu Mobile

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

//======================================
// Header au scroll
//======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

//======================================
// Bouton Retour en haut
//======================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("active");

    } else {

        topButton.classList.remove("active");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

//======================================
// Animation des cartes
//======================================

const cards = document.querySelectorAll(
    ".pack-card,.advantage-card,.testimonial-card,.contact-card,.item"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => observer.observe(card));

//======================================
// Animation des boutons
//======================================

const buttons = document.querySelectorAll(
    ".btn-pack,.btn-primary,.btn-secondary"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

//======================================
// Effet sur les images des packs
//======================================

const images = document.querySelectorAll(".pack-card img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08) rotate(2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});

//======================================
// Année automatique du footer
//======================================

const footer = document.querySelector(".footer p");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() + " DELICEA - Tous droits réservés.";

}

//======================================
// Préchargement des images
//======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("DELICEA - Site chargé avec succès");
