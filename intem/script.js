var itemObj = {
  category: "Men",
  type: "Men T-Shirt",
  imageURL1:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23241662/2023/5/25/4587aac9-b3e0-4168-8c6b-d951ca375cd91684989775414-NOISE-Unisex-Headphones-3141684989775112-5.jpg",
  imageURL2:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23241662/2023/5/25/035ef6ad-3346-422e-938f-1396ce68d3e21684989775404-NOISE-Unisex-Headphones-3141684989775112-6.jpg",
  imageURL3:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23241662/2023/5/25/9da33b22-f867-4d16-84b8-f5336b49652e1684989775390-NOISE-Unisex-Headphones-3141684989775112-7.jpg",
  imageURL4:
    "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/19597724/2022/9/16/9798bf0b-dfa3-4bef-966d-ec2d7a39cd5b1663321896091-boAt-Airdopes-Black-163-M-with-ASAP-Charge-In-the-Ear-Blueto-1.jpg",
  imageURL5:
    "https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/22107106/2023/5/29/1973372e-51d5-40a4-9c2e-4e5a84e4fe191685349231478-mivi-Unisex-Headphones-1001685349231334-1.jpg",
  color: "red",
  name: "HRX T-Shirt",
  brand: "HRX",
  price: 567,
  discountedPrice: 500,
  discountPercentage: 12,
};

var imageContainer = document.querySelector(".item-images");
var images = [
  itemObj.imageURL1,
  itemObj.imageURL2,
  itemObj.imageURL3,
  itemObj.imageURL4,
  itemObj.imageURL5,
];

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
