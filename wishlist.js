var wishlistArr=JSON.parse(localStorage.getItem("wishlistArr"))||[];
updateDisplay(wishlistArr);
console.log(wishlistArr);
function updateDisplay(arr){
  var parent=document.querySelector("#container");
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
    var addtocart=document.createElement("button");
    var remove=document.createElement("button");

    brandname.textContent=ele.brand;
    img.setAttribute("src",ele.imgUrl);
    producttype.textContent=ele.name;
    price.textContent=ele.price;
    remove.textContent="REMOVE";
    addtocart.textContent="Add To Cart";

    addtocart.addEventListener("click",function(){
        var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

        cartArray.push(ele);
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        alert("Product pushed to Cart!")
    });

    remove.addEventListener("click",function(){
      wishlistArr.splice(ind,1);
      localStorage.setItem("wishlistArr",JSON.stringify(wishlistArr));
    
      alert("Product removed from Wishlist!");
      updateDisplay(wishlistArr);
    });
    card1.append(brandname,producttype,price,stprice,discount,addtocart,remove);
    card.append(img,card1);
    parent.append(card);
  });
}
updateDisplay(wishlistArr);