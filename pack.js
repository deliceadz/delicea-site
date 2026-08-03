//======================================
// DELICEA
// packs.js
//======================================

const packs = [

{
    id:1,

    nom:"Pack Essentiel",

    nomAr:"الباقة الأساسية",

    prix:1950,

    ancienPrix:2200,

    remise:11,

    image:"images/packs/pack1.png",

    nombre:8,

    poids:"120 g",

    poidsTotal:"960 g",

    composition:[

        "Curcuma moulu",
        "Cumin moulu",
        "Coriandre moulue",
        "Cannelle moulue",
        "Paprika",
        "Poivre noir",
        "Gingembre moulu",
        "Ail moulu"

    ],

    compositionAr:[

        "كركم مرحي",
        "كمون مرحي",
        "قصبر مرحي",
        "قرفة مرحية",
        "فلفل أحمر حلو",
        "فلفل أسود مرحي",
        "زنجبيل مرحي",
        "ثوم مرحي"

    ]

},

{
    id:2,

    nom:"Pack Chef",

    nomAr:"باقة الشيف",

    prix:2600,

    ancienPrix:2900,

    remise:10,

    image:"images/packs/pack2.png",

    nombre:10,

    poids:"120 g",

    poidsTotal:"1200 g",

    composition:[

        "Curcuma",
        "Cumin",
        "Poivre noir",
        "Paprika",
        "Cannelle",
        "Coriandre",
        "Ail",
        "Gingembre",
        "Herbes de Provence",
        "Ras El Hanout"

    ],

    compositionAr:[

        "كركم",
        "كمون",
        "فلفل أسود",
        "فلفل أحمر",
        "قرفة",
        "قصبر",
        "ثوم",
        "زنجبيل",
        "أعشاب عطرية",
        "رأس الحانوت"

    ]

},

{
    id:3,

    nom:"Pack Premium",

    nomAr:"الباقة الممتازة",

    prix:2550,

    ancienPrix:2850,

    remise:10,

    image:"images/packs/pack3.png",

    nombre:10,

    poids:"120 g",

    poidsTotal:"1200 g",

    composition:[

        "Curry",
        "Paprika",
        "Curcuma",
        "Poivre noir",
        "Coriandre",
        "Cumin",
        "Cannelle",
        "Ail",
        "Gingembre",
        "Piment doux"

    ],

    compositionAr:[

        "كاري",
        "فلفل أحمر",
        "كركم",
        "فلفل أسود",
        "قصبر",
        "كمون",
        "قرفة",
        "ثوم",
        "زنجبيل",
        "فلفل حلو"

    ]

},

{
    id:4,

    nom:"Pack Cuisine",

    nomAr:"باقة المطبخ",

    prix:2800,

    ancienPrix:3200,

    remise:12,

    image:"images/packs/pack4.png",

    nombre:12,

    poids:"120 g",

    poidsTotal:"1440 g",

    composition:[

        "Curcuma",
        "Cumin",
        "Paprika",
        "Poivre noir",
        "Cannelle",
        "Coriandre",
        "Ail",
        "Gingembre",
        "Ras El Hanout",
        "Herbes de Provence",
        "Origan",
        "Basilic"

    ],

    compositionAr:[

        "كركم",
        "كمون",
        "فلفل أحمر",
        "فلفل أسود",
        "قرفة",
        "قصبر",
        "ثوم",
        "زنجبيل",
        "رأس الحانوت",
        "أعشاب عطرية",
        "زعتر",
        "حبق"

    ]

}

];

//===============================
// Recherche d'un pack
//===============================

function getPack(id){

    return packs.find(pack => pack.id == id);

}

//===============================
// Affichage console
//===============================

console.log("Packs chargés :", packs);
