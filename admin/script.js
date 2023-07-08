var category = document.querySelector("#category");
var menType = document.querySelector("#mentype");
var womenType = document.querySelector("#womentype");
var kidType = document.querySelector("#kidtype");
category.addEventListener("change", () => {
  var categoryValue = category.value;
  console.log({ category });
  console.log(categoryValue);
  if (categoryValue == "Men") {
    menType.style.display = "inline-block";
    womenType.style.display = "none";
    kidType.style.display = "none";
  } else if (categoryValue == "Women") {
    womenType.style.display = "inline-block";
    menType.style.display = "none";
    kidType.style.display = "none";
  } else if (categoryValue == "Kid") {
    kidType.style.display = "inline-block";
    womenType.style.display = "none";
    menType.style.display = "none";
  } else {
    menType.style.display = "inline-block";
    womenType.style.display = "inline-block";
    kidType.style.display = "inline-block";
  }
});

var form = document.querySelector("#adminform");
var adminArray = JSON.parse(localStorage.getItem("adminData")) || [];

function displayAdmin(adminArray) {
  var total = document.querySelector("h1>span");
  var men = document.querySelector("#men>span");
  var women = document.querySelector("#women>span");
  var kids = document.querySelector("#kids>span");
  var totalCount = adminArray.reduce((acc, curr) => {
    return acc + 1;
  }, 0);
  console.log(totalCount);
  var menCount = adminArray.reduce((acc, curr) => {
    console.log(curr.category);
    var value = curr.category == "Men" ? 1 : 0;
    return acc + value;
  }, 0);
  console.log(menCount);
  var womenCount = adminArray.reduce((acc, curr) => {
    console.log(curr.category);
    var value = curr.category == "Women" ? 1 : 0;
    return acc + value;
  }, 0);
  var kidCount = adminArray.reduce((acc, curr) => {
    console.log(curr.category);
    var value = curr.category == "Kid" ? 1 : 0;
    return acc + value;
  }, 0);

  men.textContent = menCount;
  kids.textContent = kidCount;
  women.textContent = womenCount;
  total.textContent = totalCount;
}

function addItem(obj) {
  console.log(adminArray);
  adminArray.push(obj);
  localStorage.setItem("adminData", JSON.stringify(adminArray));
  displayAdmin(adminArray);
}
form.addEventListener("submit", function () {
  event.preventDefault();
  var category = form.category.value;
  var type = "";
  if (category == "Men") {
    type = form.mentype.value;
  } else if (category == "Women") {
    type = form.womentype.value;
  } else {
    type = form.kidtype.value;
  }
  var imageURL1 = form.imageurl1.value;
  var imageURL2 = form.imageurl2.value;
  var imageURL3 = form.imageurl3.value;
  var imageURL4 = form.imageurl4.value;
  var imageURL5 = form.imageurl5.value;
  var color = form.color.value;
  var name = form.name.value;
  var brand = form.brand.value;
  var price = form.price.value;
  var discountedPrice = form.discountedprice.value;
  var discountPercentage = ((price - discountedPrice) / price) * 100;
  discountPercentage = discountPercentage.toFixed(0);
  addItem({
    id: adminArray.length + 1,
    category: category,
    type: type,
    imageURL1: imageURL1,
    imageURL2: imageURL2,
    imageURL3: imageURL3,
    imageURL4: imageURL4,
    imageURL5: imageURL5,
    color: color,
    name: name,
    brand: brand,
    price: price,
    discountedPrice: discountedPrice,
    discountPercentage: discountPercentage,
  });

  displayAdminTable(adminArray);
});

itemName.textContent = itemObj.name;
function displayAdminTable(adminArray) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  adminArray.forEach((element, index) => {
    var categoryTd = document.createElement("td");
    var typeTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var brandTd = document.createElement("td");
    var priceTd = document.createElement("td");
    var discountedPriceTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    categoryTd.textContent = element.category;
    typeTd.textContent = element.type;
    nameTd.textContent = element.name;
    brandTd.textContent = element.brand;
    priceTd.textContent = element.price;
    discountedPriceTd.textContent = element.discountedPrice;
    deleteTd.textContent = "Remove";

    var tr = document.createElement("tr");

    tr.append(
      categoryTd,
      typeTd,
      nameTd,
      brandTd,
      priceTd,
      discountedPriceTd,
      deleteTd
    );

    tbody.append(tr);

    deleteTd.addEventListener("click", function () {
      adminArray.splice(index, 1);
      localStorage.setItem("adminData", JSON.stringify(adminArray));
      displayAdminTable(adminArray);
      displayAdmin(adminArray);
    });
  });
}
var profile = document.querySelector(".profile");
var adminProfile = document.querySelector(".admin-profile");
var dropDown = document.querySelector(".admin-profile>ul");
profile.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});
displayAdminTable(adminArray);
displayAdmin(adminArray);
