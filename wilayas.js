const wilayas = [
"Adrar",
"Chlef",
"Laghouat",
"Oum El Bouaghi",
"Batna",
"Béjaïa",
"Biskra",
"Béchar",
"Blida",
"Bouira",
"Tamanrasset",
"Tébessa",
"Tlemcen",
"Tiaret",
"Tizi Ouzou",
"Alger",
"Djelfa",
"Jijel",
"Sétif",
"Saïda",
"Skikda",
"Sidi Bel Abbès",
"Annaba",
"Guelma",
"Constantine",
"Médéa",
"Mostaganem",
"M'Sila",
"Ouargla",
"Oran",
"El Bayadh",
"Illizi",
"Bordj Bou Arreridj",
"Boumerdès",
"El Tarf",
"Tindouf",
"Tissemsilt",
"El Oued",
"Khenchela",
"Souk Ahras",
"Tipaza",
"Mila",
"Aïn Defla",
"Naâma",
"Aïn Témouchent",
"Ghardaïa",
"Relizane",
"Timimoun",
"Bordj Badji Mokhtar",
"Ouled Djellal",
"Béni Abbès",
"El M'Ghair",
"El Meniaa",
"In Salah",
"In Guezzam",
"Illizi",
"Djanet",
"Touggourt"
];


window.onload = function(){

let select = document.getElementById("wilaya");


wilayas.forEach(function(wilaya){

let option = document.createElement("option");

option.text = wilaya;
option.value = wilaya;

select.add(option);

});

}
