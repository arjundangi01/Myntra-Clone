var cartArr=JSON.parse(localStorage.getItem("cartArray"))||[];

var totalitems=cartArr.length;
localStorage.setItem("totalitems",totalitems);
console.log(totalitems);
var sum=0;

var MRP =  cartArr.reduce(function(sum,a,ind){
  return sum+ +(cartArr[ind].strikedoffprice.split(" ")[1])
},0);
localStorage.setItem("MRP",MRP)
console.log(MRP);

document.querySelector(".items").textContent=totalitems;
updateDisplay(cartArr);
console.log(cartArr);
function updateDisplay(arr){
  var parent=document.querySelector(".container");
  parent.innerHTML="";
  arr.forEach(function(ele,ind,arr) {
  
    var card=document.createElement("div");
    var img=document.createElement("img");
    var card1=document.createElement("div");

    var brandname=document.createElement("h3");
    var producttype=document.createElement("p");
    var price=document.createElement("p");
    var stprice = document.createElement("p");
    stprice.textContent = ele.strikedoffprice;

    var discount = document.createElement("p");
    discount.textContent =ele.discount;

    var remove=document.createElement("button");

    brandname.textContent=ele.brand;
    img.setAttribute("src",ele.imgUrl);
    producttype.textContent=ele.name;
    price.textContent=ele.price;
    remove.textContent="REMOVE";

    remove.addEventListener("click",function(){
      cartArr.splice(ind,1);
      localStorage.setItem("cartArray",JSON.stringify(cartArr));
    
      alert("Product removed from cart!");
      updateDisplay(cartArr);
    });
    card1.append(brandname,producttype,price,stprice,discount,remove);
    card.append(img,card1);
    parent.append(card);
  });
}
updateDisplay(cartArr);

document.querySelector("#first").addEventListener("click",function(){
  window.location.assign("./cart.html");
});

document
.querySelector("#second")
.addEventListener("click", function () {
  window.location.assign("");
});

document.querySelector("#third").addEventListener("click",function(){
  window.location.assign("");
  
});

document.querySelector(".wishlist").addEventListener("click",function(){
  window.location.assign("./wishlist.html");

});

document.querySelector(".makeorder").addEventListener("click",function(){

  window.location.assign("")

});

document.querySelector("#homePage").addEventListener("click",function(){

  window.location.assign("");
})
