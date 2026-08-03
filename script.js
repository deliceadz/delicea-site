let selectedPrice = 0;


// اختيار الباقة

function orderPack(name, price){

document.getElementById("packSelect").value = name;

document.getElementById("packPrice").innerHTML = price;

selectedPrice = price;

calculateTotal();


document.getElementById("order").scrollIntoView({
behavior:"smooth"
});

}




// تغيير الولاية

document.getElementById("wilayaSelect").addEventListener("change",function(){

let wilaya = this.value;

let delivery = getDeliveryPrice(wilaya);


document.getElementById("deliveryPrice").innerHTML = delivery;


calculateTotal();


});






// حساب المجموع

function calculateTotal(){

let delivery = Number(
document.getElementById("deliveryPrice").innerHTML
) || 0;


let total = selectedPrice + delivery;


document.getElementById("totalPrice").innerHTML = total;

}






// إرسال WhatsApp

function sendOrder(){


let firstname =
document.getElementById("firstname").value;


let lastname =
document.getElementById("lastname").value;


let phone =
document.getElementById("phone").value;


let pack =
document.getElementById("packSelect").value;


let wilaya =
document.getElementById("wilayaSelect").value;


let commune =
document.getElementById("communeSelect").value;


let address =
document.getElementById("address").value;



let price =
document.getElementById("packPrice").innerHTML;


let delivery =
document.getElementById("deliveryPrice").innerHTML;


let total =
document.getElementById("totalPrice").innerHTML;



let message =

"🌶️ DELICEA - Nouvelle commande\n\n"+

"📦 Pack : "+pack+"\n"+

"💰 Prix : "+price+" DA\n"+

"🚚 Livraison : "+delivery+" DA\n"+

"💵 Total : "+total+" DA\n\n"+


"👤 Nom : "+firstname+" "+lastname+"\n"+

"📞 Téléphone : "+phone+"\n"+

"📍 Wilaya : "+wilaya+"\n"+

"🏘️ Commune : "+commune+"\n"+

"🏠 Adresse : "+address;



window.open(

"https://wa.me/213770715514?text="+
encodeURIComponent(message)

);


}
