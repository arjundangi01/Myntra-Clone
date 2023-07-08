var wishlistArr=JSON.parse(localStorage.getItem("wishlistArr"))||[];
console.log(wishlistArr);
var totalitems=wishlistArr.length;
console.log(totalitems);

document.querySelector(".wishcount").innerText =` ${totalitems} Items`;


function updateDisplay(arr){

  if(arr.length==0){
    var a=document.querySelector("#container");
    a.style.display = "none";

    var emptydiv=document.querySelector("#emptylist");
    emptydiv.style.display="block";

    var h2=document.createElement("h2");
    h2.textContent="YOUR WISHLIST IS EMPTY";
    var p=document.createElement("p");
    p.textContent="Add items that you like to your wishlist."
    var img=document.createElement("img");
    img.setAttribute("src","https://constant.myntassets.com/checkout/assets/img/empty-bag.webp");
    var shopnow=document.createElement("button");
    shopnow.textContent="CONTINUE SHOPPING";

    shopnow.addEventListener("click",function(){
      window.location.assign("");

    });

    emptydiv.append(h2,p,img,shopnow);
    
  }

else{

  var parent=document.querySelector("#container");
  parent.innerHTML="";
  arr.forEach(function(ele,ind,arr) {

    var card=document.createElement("div");
    var img=document.createElement("img");
    var card1=document.createElement("div");

    var brandname=document.createElement("h3");
    var producttype=document.createElement("p");

    var smalldiv=document.createElement("div");

    var price=document.createElement("p");
    var stprice = document.createElement("p");
    stprice.textContent = ele.strikedoffprice;

    var discount = document.createElement("p");
    discount.textContent =ele.discount;

    smalldiv.setAttribute("id", "smalldiv");
    smalldiv.append(price, stprice, discount);
    var hr=document.createElement("hr");
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

    if(wishlistArr.length==0){
      var a=document.querySelector("#container");
      
      var emptydiv=document.querySelector("#emptylist");
      var h2=document.createElement("h2");
      h2.textContent="YOUR WISHLIST IS EMPTY";
      var p=document.createElement("p");
      p.textContent="Add items that you like to your wishlist."
      var img=document.createElement("img");
      img.setAttribute("src","https://images.bewakoof.com/web/wishlistEmpty.svg");
      var shopnow=document.createElement("button");
      shopnow.textContent="CONTINUE SHOPPING";

      emptydiv.append(h2,p,img,shopnow);
      a.append(emptydiv);
    }
    

    card1.append(brandname,producttype,smalldiv,addtocart,remove);
    card.append(img,card1);
    parent.append(card);
  

  });
}
}
updateDisplay(wishlistArr);