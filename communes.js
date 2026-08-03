const communes = {

"Alger":[
"Alger Centre",
"Bab El Oued",
"El Harrach",
"Hussein Dey",
"Bir Mourad Raïs",
"Dar El Beida"
],

"Blida":[
"Blida",
"Boufarik",
"El Affroun",
"Mouzaïa",
"Ouled Yaïch"
],

"Tipaza":[
"Tipaza",
"Koléa",
"Fouka",
"Douaouda",
"Hadjout"
],

"Oran":[
"Oran",
"Bir El Djir",
"Es Senia",
"Arzew",
"Aïn El Turk"
],

"Constantine":[
"Constantine",
"El Khroub",
"Aïn Smara",
"Hamma Bouziane"
],

"Sétif":[
"Sétif",
"El Eulma",
"Aïn Arnat",
"Aïn Oulmene"
]

};


function chargerCommunes(){

let wilaya=document.getElementById("wilaya").value;

let select=document.getElementById("commune");


select.innerHTML="<option>Choisir Commune</option>";


if(communes[wilaya]){

communes[wilaya].forEach(function(c){

let option=document.createElement("option");

option.text=c;
option.value=c;

select.add(option);

});

}

}
