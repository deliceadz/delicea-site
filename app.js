// ==========================
// DELICEA APP
// Commande WhatsApp + Total
// ==========================


// FERMER FENETRE DETAILS PACK

const closeBtn = document.querySelector(".close");

closeBtn.onclick = function(){

    document.getElementById("pack-modal").style.display="none";

}




window.onclick = function(event){

    let modal =
    document.getElementById("pack-modal");


    if(event.target == modal){

        modal.style.display="none";

    }

}




// BOUTON COMMANDE DEPUIS LA FENETRE

document.getElementById("modal-order").onclick=function(){

    document.getElementById("pack-modal").style.display="none";

    document
    .getElementById("commande")
    .scrollIntoView({

        behavior:"smooth"

    });

};







// CALCUL TOTAL


let quantity =
document.getElementById("quantity");


let total =
document.getElementById("total");



const prixPack = 1950;



quantity.addEventListener("change",function(){


let nombre =
parseInt(this.value);



total.innerHTML =
prixPack * nombre;


});



// valeur initiale

total.innerHTML = prixPack;







// ENVOI WHATSAPP


document
.getElementById("order-form")
.addEventListener("submit",function(e){


e.preventDefault();




let nom =
document.getElementById("nom").value;


let prenom =
document.getElementById("prenom").value;


let telephone =
document.getElementById("telephone").value;


let wilaya =
document.getElementById("wilaya").value;


let commune =
document.getElementById("commune").value;


let adresse =
document.getElementById("adresse").value;


let livraison =
document.getElementById("livraison").value;


let packs =
document.getElementById("quantity").value;


let montant =
document.getElementById("total").innerText;





let message =

`🌿 *Commande Delicea*

👤 Nom : ${nom}
👤 Prénom : ${prenom}

📱 Téléphone : ${telephone}

🏙️ Wilaya : ${wilaya}

🏘️ Commune : ${commune}

🏠 Adresse :
${adresse}

🚚 Livraison :
${livraison}

📦 Nombre de packs :
${packs}

💰 Total :
${montant} DA

Merci`;





let numero =
"213770715514";



let url =

"https://wa.me/"
+numero
+"?text="
+encodeURIComponent(message);




window.open(url,"_blank");



});
