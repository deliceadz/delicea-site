let packChoisi = "";
let tarifLivraison = 0;


function choisirPack(pack){

    packChoisi = pack;

    document.getElementById("pack").value = pack;

    window.scrollTo({
        top: document.querySelector(".commande").offsetTop,
        behavior: "smooth"
    });

}



function calculerLivraison(){

    let wilaya = document.getElementById("wilaya").value;
    let type = document.getElementById("typeLivraison").value;

    let info = document.getElementById("infoLivraison");


    if(livraisons[wilaya]){

        if(type === "domicile"){
            tarifLivraison = livraisons[wilaya].domicile;
        }

        else if(type === "bureau"){
            tarifLivraison = livraisons[wilaya].bureau;
        }

        else{
            tarifLivraison = 0;
        }


        info.innerHTML =
        "🚚 Délai : " + livraisons[wilaya].delai +
        "<br>Tarif livraison : " + tarifLivraison + " DA";


    }else{

        info.innerHTML="Choisir une wilaya";

    }

}




function envoyerCommande(){


let nom = document.getElementById("nom").value;
let tel = document.getElementById("tel").value;
let wilaya = document.getElementById("wilaya").value;
let type = document.getElementById("typeLivraison").value;
let commune = document.getElementById("commune").value;
let adresse = document.getElementById("adresse").value;



let message =

"Nouvelle commande Delicea%0A%0A"+

"📦 Pack : "+packChoisi+"%0A"+

"👤 Nom : "+nom+"%0A"+

"📞 Téléphone : "+tel+"%0A"+

"📍 Wilaya : "+wilaya+"%0A"+

"🚚 Livraison : "+type+"%0A"+

"💰 Tarif livraison : "+tarifLivraison+" DA%0A"+

"🏠 Commune : "+commune+"%0A"+

"Adresse : "+adresse;



let numero="213770715514";



window.open(

"https://wa.me/"+numero+"?text="+message,

"_blank"

);


}
