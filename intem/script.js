var tempObj = {
  category: "Men",
  type: "Men T-Shirt",
  imageURL1:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
  imageURL2:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg",
  imageURL3:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg",
  imageURL4:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg",
  imageURL5:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg",
  color: "red",
  name: "Some T-Shirt",
  brand: "HRX",
  price: 567,
  discountedPrice: 500,
  discountPercentage: 12,
};
var itemObj = JSON.parse(localStorage.getItem("itemDetails")) || tempObj;
var imageContainer = document.querySelector(".item-images");
var images = [
  itemObj.imageURL1,
  itemObj.imageURL2,
  itemObj.imageURL3,
  itemObj.imageURL4,
  itemObj.imageURL5,
];
var itemName = document.querySelector(".item-name");
itemName.textContent = itemObj.name;
var itemDiscountedPrice = document.querySelector(".discounted-price");
itemDiscountedPrice.textContent = itemObj.discountedPrice;
var itemOriginalPrice = document.querySelector(".original-price>strike");
itemOriginalPrice.textContent = itemObj.price;
var itemDiscountPercentage = document.querySelector(".discount-percentage");
itemDiscountPercentage.innerText = `(${itemObj.discountPercentage}%)`;
for (var index = 0; index < images.length; index++) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", images[index]);
  div.setAttribute("class", "image");
  div.append(img);
  imageContainer.append(div);
}
var deliveryButton = document.querySelector(".delivery-input>button");
var deliveryInput = document.querySelector(".delivery-input input");
deliveryButton.addEventListener("click", function () {
  if (deliveryInput.value == "") {
    alert("give pin code");
  } else {
    deliveryButton.innerHTML +=
      '<i class="fa-solid fa-check" style="color: #229b2a;"></i>';
    this.disabled = true;
  }
});
deliveryInput.addEventListener("change", function () {
  if (deliveryInput.value == "") {
    console.log({ deliveryButton });
    var element = deliveryButton.children[0];
    element.remove();
    console.log(element);
    deliveryButton.disabled = false;
    console.log(deliveryButton);
  }
});
var addToCartButton = document.querySelector(".cart-button");
var cartButtonSpan = document.querySelector(".cart-button>span");
addToCartButton.addEventListener("click", function () {
  cartButtonSpan.textContent = "Go To Bag";
  addToCartButton.innerHTML +=
    ' <i class="fa fa-regular fa-arrow-right" style="color: #fcfcfd;"></i>';
  this.disabled = true;
  var arrow = document.querySelector(".cart-button>i:nth-child(3)");
  arrow.style.marginLeft = "0.9rem";
  arrow.style.marginTop = "0.5rem";
  arrow.addEventListener("click", function () {
    var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
    obj = {
      imgUrl: element.image1,

      brand: element.brand,
      name: element.name,
      price: element.price,
      strikedoffprice: element.strikedoffprice,
      discount: element.discount,
    };
    cartArray.push(obj);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    window.open("https://www.myntra.com/", "_blank");
  });
  console.log(arrow);
});

var sizeButton = document.querySelectorAll(".size-buttons>button");
sizeButton.forEach((button) => {
  button.addEventListener("click", function () {
    button.style.border = "0.5px solid rgb(238, 36, 87);";
    button.classList.toggle("size-button-clicked");
  });
});

var wishlistButton = document.querySelectorAll(".add-buttons>button");
console.log(wishlistButton);
wishlistButton[1].addEventListener("click", function () {
  wishlistButton[1].classList.toggle("wishlist-button");
  wishlistButton[1].classList.toggle("wishlist-button-clicked");
  this.disabled = true;
});
