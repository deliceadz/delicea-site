document.addEventListener("DOMContentLoaded", () => {

const radios = document.querySelectorAll('input[name="pack"]');
const bouton = document.getElementById("commander");

const prix = {
"essentiel": "Commandant • 1950 DA",
"premium": "Commandant • 2550 DA",
"chef": "Commandant • 2600 DA",
"cuisine": "Commandant • 2800 DA"
};

radios.forEach(radio => {
radio.addEventListener("change", () => {
bouton.textContent = prix[radio.value];
});
});

});

