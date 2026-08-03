let packChoisi = "";

function choisirPack(pack){

    packChoisi = pack;

    document.getElementById("pack").value = pack;

    window.scrollTo({
        top: document.querySelector(".commande").offsetTop,
        behavior: "smooth"
    });

}


function envoyerCommande(){

    let nom = document.getElementById("nom").value;
    let tel = document.getElementById("tel").value;
    let wilaya = document.getElementById("wilaya").value;
    let commune = document.getElementById("commune").value;
    let adresse = document.getElementById("adresse").value;


    let message =
    "Nouvelle commande Delicea%0A%0A" +
    "Pack : " + packChoisi + "%0A" +
    "Nom : " + nom + "%0A" +
    "Téléphone : " + tel + "%0A" +
    "Wilaya : " + wilaya + "%0A" +
    "Commune : " + commune + "%0A" +
    "Adresse : " + adresse;


    let numero = "213770715514";


    window.open(
        "https://wa.me/" + numero + "?text=" + message,
        "_blank"
    );

}
