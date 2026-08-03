// ==========================
// DELICEA PACKS
// ==========================


const packs = [


{
    id:1,

    nom:"الباقة الأساسية",

    prix:1950,

    image:"images/packs/base.jpg",

    nombre:"8 أنواع من التوابل",

    description:
    "باقة أساسية تجمع أهم التوابل اليومية للمطبخ الجزائري",

    composition:[

        "كركم مرحي",
        "كمون مرحي",
        "كروية مرحية",
        "قصبر مرحي",
        "فلفل أسود مرحي",
        "قرفة مرحية",
        "بابريكا",
        "أعشاب عطرية"

    ]

},



{
    id:2,

    nom:"باقة الذوق",

    prix:2950,

    image:"images/packs/saveur.jpg",

    nombre:"12 نوع من التوابل",

    description:
    "مجموعة متنوعة لتحضير وصفات لذيذة كل يوم",

    composition:[

        "كركم",
        "كمون",
        "قصبر",
        "فلفل أسود",
        "قرفة",
        "زنجبيل",
        "بابريكا",
        "رأس الحانوت",
        "أعشاب بروفانس",
        "نعناع",
        "رند",
        "بسباس"

    ]

},




{
    id:3,

    nom:"الباقة الممتازة",

    prix:3950,

    image:"images/packs/premium.jpg",

    nombre:"18 نوع من التوابل",

    description:
    "باقة كاملة لمحبي النكهات الأصيلة",

    composition:[

        "توابل اللحم",
        "توابل الدجاج",
        "توابل السمك",
        "كاري",
        "رأس الحانوت",
        "شاورما",
        "كسكس",
        "شربة",
        "طاجين زيتون"

    ]

},





{
    id:4,

    nom:"باقة العائلة",

    prix:4950,

    image:"images/packs/maison.jpg",

    nombre:"مجموعة المطبخ الكامل",

    description:
    "كل ما تحتاجه العائلة الجزائرية في باقة واحدة",

    composition:[

        "توابل يومية",
        "أعشاب عطرية",
        "خلطات خاصة",
        "توابل المشويات",
        "توابل الأطباق التقليدية"

    ]

}



];





// عرض الباقات

const container =
document.getElementById("packs-container");



packs.forEach(pack=>{


container.innerHTML += `


<div class="pack-card">


<img src="${pack.image}">


<h3>
${pack.nom}
</h3>


<h4>
${pack.prix} دج
</h4>


<p>
${pack.nombre}
</p>



<button onclick="showPack(${pack.id})">

👁️ عرض المزيد

</button>


<br><br>


<button onclick="goCommande()">

🛒 اطلب الآن

</button>


</div>


`;


});





// فتح التفاصيل

function showPack(id){


let pack =
packs.find(p=>p.id===id);



document.getElementById("modal-image").src =
pack.image;


document.getElementById("modal-name").innerHTML =
pack.nom;


document.getElementById("modal-price").innerHTML =
pack.prix+" دج";


document.getElementById("modal-description").innerHTML =
pack.description;



let list =
document.getElementById("modal-composition");


list.innerHTML="";


pack.composition.forEach(item=>{


list.innerHTML +=
`<li>${item}</li>`;


});



document.getElementById("pack-modal").style.display="block";


}





// Aller au formulaire

function goCommande(){


document
.getElementById("commande")
.scrollIntoView({

behavior:"smooth"

});


}
