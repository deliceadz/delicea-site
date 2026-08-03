const packs = [

{
id:"kitchen",
name:"باقة الكوزينة",
price:2800,
image:"pack1.jpg",
weight:"وزن كل علبة 120غ",
details:[
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
id:"mamira",
name:"باقة المميرة",
price:2550,
image:"pack2.jpg",
weight:"وزن كل علبة 120غ",
details:[
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
id:"chef",
name:"باقة الشيف",
price:2600,
image:"pack3.jpg",
weight:"وزن كل علبة 120غ",
details:[
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
},




{
id:"basic",
name:"الباقة الأساسية",
price:1950,
image:"pack4.jpg",
weight:"وزن كل علبة 120غ",
details:[
"كركم مرحي",
"كمون مرحي",
"فلفل أسود مرحي",
"كروية مرحية",
"قصبر مرحي",
"فلفل عكري مرحي",
"فلفل حار مرحي",
"رأس الحانوت"
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


<h4>${pack.price} دج</h4>



<button onclick="orderPack('${pack.name}',${pack.price})">
اطلب الآن
</button>



<button onclick="showDetails('${pack.id}')">
عرض التفاصيل
</button>



<div id="${pack.id}" class="details">

<h4>مكونات الباقة:</h4>

<ul>

${pack.details.map(item=>`<li>${item}</li>`).join("")}

</ul>


</div>


</div>

`;

});
