const packs = [

{
    id: "basic",
    name: "الباقة الأساسية",
    price: 1950,
    image: "images/pack4.jpg",
    weight: "وزن كل علبة 120غ",
    details: [
        "كركم مرحي",
        "كمون مرحي",
        "فلفل أسود مرحي",
        "كروية مرحية",
        "قصبر مرحي",
        "فلفل عكري مرحي",
        "فلفل حار مرحي",
        "رأس الحانوت"
    ]
},

{
    id: "kitchen",
    name: "باقة الكوزينة",
    price: 2800,
    image: "images/pack1.jpg",
    weight: "وزن كل علبة 120غ",
    details: [
        "قرفة مرحية",
        "ثوم مرحي",
        "قصبر مرحي",
        "كمون مرحي",
        "بسباس حب",
        "أعشاب عطرية",
        "بابريكا مدخن",
        "فلفل أحمر حار مرحي",
        "زعفران مرحي",
        "رأس الحانوت",
        "توابل الدجاج",
        "توابل الكاري"
    ]
},

{
    id: "mamira",
    name: "باقة المميرة",
    price: 2550,
    image: "images/pack2.jpg",
    weight: "وزن كل علبة 120غ",
    details: [
        "فلفل عكري مرحي",
        "فلفل حار مرحي",
        "رأس الحانوت",
        "فلفل أسود مرحي",
        "قرفة مرحية",
        "أعشاب عطرية",
        "قرنفل حب",
        "زعفران مرحي",
        "بابريكا مدخن",
        "زعيترة"
    ]
},

{
    id: "chef",
    name: "باقة الشيف",
    price: 2600,
    image: "images/pack3.jpg",
    weight: "وزن كل علبة 120غ",
    details: [
        "فلفل أسود مرحي",
        "إكليل الجبل",
        "فلفل عكري مرحي",
        "فلفل أحمر حار مرحي",
        "معدنوس مجفف",
        "بابريكا مدخن",
        "أعشاب عطرية",
        "سكنجبير مرحي",
        "قصبر مرحي",
        "ثوم مرحي"
    ]
}

];

const container = document.getElementById("packs-container");

packs.forEach(pack => {

container.innerHTML += `

<div class="pack-card">

<img src="${pack.image}" alt="${pack.name}">

<h3>${pack.name}</h3>

<p>${pack.weight}</p>

<div class="price">${pack.price} دج</div>

<div class="buttons">

<button class="order-btn"
onclick="window.location.href='order.html?pack=${pack.id}'">
اطلب الآن
</button>

<button class="details-btn"
onclick="toggleDetails('${pack.id}')">
عرض التفاصيل
</button>

</div>

<div class="details" id="${pack.id}">

<h4>مكونات الباقة</h4>

<ul>

${pack.details.map(item => `<li>${item}</li>`).join("")}

</ul>

</div>

</div>

`;

});

function toggleDetails(id){

const box = document.getElementById(id);

if(box.style.display === "block"){
    box.style.display = "none";
}else{
    box.style.display = "block";
}

}
