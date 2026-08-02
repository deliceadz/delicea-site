document.addEventListener("DOMContentLoaded", function () {

const packs = document.querySelectorAll(".pack");
const form = document.querySelector("form");

packs.forEach(pack => {
pack.addEventListener("click", function () {

packs.forEach(p => p.classList.remove("selected"));
this.classList.add("sélectionné");

const titre = this.querySelector("h3").innerText;

let hidden = document.getElementById("selectedPack");

si (!caché) {
caché = document.createElement("input");
caché.type = "caché";
hidden.id = "selectedPack";
hidden.name = "الباقة";
formulaire.appendChild(caché);
}

caché.valeur = titre;
});
});

form.addEventListener("submit", function (e) {
e.prévenirDefault();
alert("تم استلام طلبك بنجاح ✅");
});

});
