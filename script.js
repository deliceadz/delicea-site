let packChoisi = "";
let prixPack = 0;
let tarifLivraison = 0;



// اختيار الباك

function choisirPack(pack, prix){

    packChoisi = pack;
    prixPack = prix;

    document.getElementById("pack").value = pack + " - " + prix + " DA";


    window.scrollTo({
        top: document.querySelector(".commande").offsetTop,
        behavior: "smooth"
    });


    afficherTotal();

}



// عرض تفاصيل الباك

function voirDetails(){

    document.getElementById("detailsPack").style.display="block";

}



// إغلاق التفاصيل

function fermerDetails(){

    document.getElementById("detailsPack").style.display="none";

}



// حساب التوصيل

function calculerLivraison(){

let wilaya = document.getElementById("wilaya").value;

let type = document.getElementById("typeLivraison").value;


let info = document.getElementById("infoLivraison");



if(livraisons[wilaya]){


    if(type=="domicile"){

        tarifLivraison = livraisons[wilaya].domicile;

    }


    else if(type=="bureau"){

        tarifLivraison = livraisons[wilaya].bureau;

    }


    else{

        tarifLivraison = 0;

    }



    info.innerHTML =

    "🚚 Délai : "
    + livraisons[wilaya].delai
    +"<br>💰 Livraison : "
    + tarifLivraison
    +" DA";



}

else{

tarifLivraison = 0;

info.innerHTML="Choisir Wilaya";

}



afficherTotal();


}



// affichage total

function afficherTotal(){

let total = prixPack + tarifLivraison;


let zone = document.getElementById("totalCommande");


if(zone){

zone.innerHTML =
"💰 Total à payer : "
+ total
+" DA";

}

}




// إرسال الطلب واتساب

function envoyerCommande(){


let nom =
document.getElementById("nom").value;


let tel =
document.getElementById("tel").value;


let wilaya =
document.getElementById("wilaya").value;


let commune =
document.getElementById("commune").value;


let type =
document.getElementById("typeLivraison").value;


let adresse =
document.getElementById("adresse").value;



let total = prixPack + tarifLivraison;



let message =

"🌶️ DELICEA - Nouvelle commande%0A%0A"+

"📦 Pack : "+packChoisi+"%0A"+

"💰 Prix : "+prixPack+" DA%0A"+

"🚚 Livraison : "+tarifLivraison+" DA%0A"+

"💵 Total : "+total+" DA%0A%0A"+

"👤 Nom : "+nom+"%0A"+

"📞 Téléphone : "+tel+"%0A"+

"📍 Wilaya : "+wilaya+"%0A"+

"🏘️ Commune : "+commune+"%0A"+

"🚚 Type : "+type+"%0A"+

"🏠 Adresse : "+adresse;



let numero="213770715514";



window.open(

"https://wa.me/"+numero+"?text="+message,

"_blank"

);



}
