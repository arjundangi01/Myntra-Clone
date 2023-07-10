var wishlistArr = JSON.parse(localStorage.getItem("wishlistArr")) || [];

display(wishlistArr);

function display(array) {
  var parent = document.querySelector("#wishlistContainer");
  parent.innerHTML = "";
  if (wishlistArr.length == 0) {
    var a = document.querySelector("#wishlistContainer");
    a.style.display = "none";
    var b = document.querySelector("h3");
    b.style.display = "none";

    var emptydiv = document.querySelector("#emptyWishlist");
    emptydiv.style.display = "block";
    var emptyImg = document.createElement("img");
    emptyImg.setAttribute(
      "src",
      "https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
    );
    var emptyH = document.createElement("h2");
    emptyH.textContent = "YOUR WISHLIST IS EMPTY";
    var emptyP = document.createElement("p");
    emptyP.textContent =
      "Add items that you like to your wishlist. Review them anytime and easily move them to the bag.";

    var emptyWishlistBtn = document.createElement("button");
    emptyWishlistBtn.textContent = "CONTINUE SHOPING";
    emptyWishlistBtn.setAttribute("id", "emptyWishlistbtn");

    emptydiv.append(emptyImg, emptyH, emptyP, emptyWishlistBtn);
  } else {
    array.forEach(function (element, index) {
      if (array.length == 1) {
        document.querySelector("#totalWishlistItem").textContent =
          array.length + " item";
      } else {
        document.querySelector("#totalWishlistItem").textContent =
          array.length + " items";
      }

      var div = document.createElement("div");

      var removeBtn = document.createElement("button");
      removeBtn.innerHTML =
        '<i class="fa-solid fa-xmark" style="color: #000000;opacity: 0.7;scale:1;"></i>';
      removeBtn.setAttribute("id", "removeBtn");
      removeBtn.addEventListener("click", function () {
       
        wishlistArr.splice(index, 1);
        localStorage.setItem("wishlistArr", JSON.stringify(wishlistArr));
        display(wishlistArr);
      });

      var img = document.createElement("img");

      img.setAttribute("src", element.image1);

      var imgDiv = document.createElement("div");
      imgDiv.setAttribute("id", "imgDiv");
      imgDiv.append(img);

      imgDiv.addEventListener("click", function () {
        var itemObj = {
          imageURL1: element.image1,
          imageURL2: element.image2,
          imageURL3: element.image3,
          imageURL4: element.image4,
          imageURL5: element.image5,

          name: element.name,
          brand: element.brand,

          price: element.price,
          discountedPrice: element.strikedoffprice,
          discountPercentage:
            (element.strikedoffprice - element.price) / element.strikedoffprice,
        };
        localStorage.setItem("itemDetails", JSON.stringify(itemObj));
      });

      // var h3 = document.createElement("h3");
      // h3.textContent = element.brand;

      var name = document.createElement("p");
      name.textContent = element.name;

      var nameDiv = document.createElement("div");
      nameDiv.setAttribute("id", "nameDiv");
      nameDiv.append(name);

      var smalldiv = document.createElement("div");

      var price = document.createElement("p");
      price.textContent = "Rs. " + element.price;

      var stprice = document.createElement("p");
      stprice.textContent = "Rs " + element.strikedoffprice;

      var discount = document.createElement("p");
      discount.textContent = element.discount;

      smalldiv.setAttribute("id", "price-small-div");
      smalldiv.append(price, stprice, discount);

      var cartButton = document.createElement("button");
      cartButton.textContent = "MOVE TO BAG";
      cartButton.setAttribute("id", "cartButton");

   

      cartButton.addEventListener("click", function () {
        var selectSizeAlert = document.querySelector(".select-size-alert");
        selectSizeAlert.style.display = "none";
        var sizePopup = document.querySelector("#sizeDiv");
        sizePopup.style.display = "block";
        var crossBtn = document.querySelector("#crossBtn");
        crossBtn.addEventListener("click", function () {
          sizePopup.style.display = "none";
         
        });
        
        var parentElement = document.querySelector(".size-buttons"); // Replace with the appropriate parent element selector
        parentElement.addEventListener("click", function(event) {
          if (event.target.id === "xyz") {
            // Handle button click
           var  a = event.target.value
            console.log("Button with ID 'xyz' clicked!");
            doSomethingWithA(a);
          }
        });
       
        function doSomethingWithA(size) {
          var goTocart = document.querySelector("#goTocart");
          goTocart.addEventListener("click", function () {
            console.log(size)
          })
        }
        
       
     
      
      
      
      });
      // ---------------------------------------------------------------------------
      div.append(removeBtn, imgDiv, nameDiv, smalldiv, cartButton);

      parent.append(div);
    });
  }
}
