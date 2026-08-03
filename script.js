// =========================
// DELICEA APP
// =========================

const packs = document.querySelectorAll(".pack");

const selectedPack = document.getElementById("selectedPack");
const productPrice = document.getElementById("productPrice");
const deliveryPrice = document.getElementById("deliveryPrice");
const totalPrice = document.getElementById("totalPrice");

let currentPack = "";
let currentPrice = 0;
let shipping = 0;

// =========================
// Choix du pack
// =========================

packs.forEach(pack => {

    pack.addEventListener("click", () => {

        packs.forEach(p => p.classList.remove("active"));

        pack.classList.add("active");

        currentPack = pack.dataset.name;

        currentPrice = Number(pack.dataset.price);

        selectedPack.innerHTML = currentPack;

        productPrice.innerHTML = currentPrice + " DA";

        updateTotal();

    });

});

// Pack par défaut

if (packs.length > 0) {

    packs[0].click();

}

// =========================
// Calcul du total
// =========================

function updateTotal() {

    totalPrice.innerHTML = (currentPrice + shipping) + " DA";

}

// =========================
// Livraison
// =========================

const wilaya = document.getElementById("wilaya");

if (wilaya) {

    wilaya.addEventListener("change", function () {

        if (typeof deliveryPrices !== "undefined") {

            const data = deliveryPrices[this.value];

            if (data) {

                const type = document.getElementById("deliveryType").value;

                shipping = data[type];

                deliveryPrice.innerHTML = shipping + " DA";

                updateTotal();

            }

        }

    });

}

// =========================
// Changement mode livraison
// =========================

const deliveryType = document.getElementById("deliveryType");

if (deliveryType) {

    deliveryType.addEventListener("change", function () {

        wilaya.dispatchEvent(new Event("change"));

    });

}

// =========================
// WhatsApp
// =========================

document
.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nom = document.getElementById("fullname").value;

    const phone = document.getElementById("phone").value;

    const wil = document.getElementById("wilaya").value;

    const commune = document.getElementById("commune").value;

    const address = document.getElementById("address").value;

    const type = document.getElementById("deliveryType").value;

    let message = `*Nouvelle Commande Délicea*%0A%0A`;

    message += `📦 Pack : ${currentPack}%0A`;

    message += `💰 Prix : ${currentPrice} DA%0A`;

    message += `🚚 Livraison : ${shipping} DA%0A`;

    message += `💵 Total : ${currentPrice + shipping} DA%0A%0A`;

    message += `👤 Nom : ${nom}%0A`;

    message += `📞 Téléphone : ${phone}%0A`;

    message += `📍 Wilaya : ${wil}%0A`;

    message += `🏘 Commune : ${commune}%0A`;

    message += `🏠 Adresse : ${address}%0A`;

    message += `🚚 Type : ${type}`;

    window.open(

        "https://wa.me/213770715514?text=" + message,

        "_blank"

    );

});
