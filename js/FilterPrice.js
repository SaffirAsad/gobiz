// read google sheets database
let DataBase = "";
//loading();
fetchData();
//console.log(headers)
let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");
function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {
    // Swap to Values
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }
  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
  var price = {min: minPrice,max : maxPrice}
  return price;
}
const inputElements = document.querySelectorAll("input");
inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);
    validateRange(minPrice,maxPrice);
  });
});
validateRange(parseInt(inputElements[0].value), parseInt(inputElements[1].value));
MenuUser(products,headers);

function Search(products){
    const mainCategorySelectValue = document.getElementById("mainCategorySelect").value;
    const subCategorySelectValue = document.getElementById("subCategorySelect").value;
    const colorSelectValue = document.getElementById("colorSelect").value;
    const sizeSelectValue = document.getElementById("sizeSelect").value;
    var	mMainCategory = Object.values(headers)[2];	
    var mSubCategory = Object.values(headers)[3];
    var mSize = Object.values(headers)[7];	
    var mColor = Object.values(headers)[8];
    let FiltedProducts = [];

    products.forEach(product => {
        if(product[mMainCategory]==mainCategorySelectValue && 
        product[mSubCategory]==subCategorySelectValue &&
        product[mSize] == sizeSelectValue &&
        product[mColor]==colorSelectValue){
            FiltedProducts.push(product);
        }
    });
    
    inputEl=document.querySelectorAll("input");
    price=validateRange(parseInt(inputEl[0].value), parseInt(inputEl[1].value));
    console.log("FiltedProducts:\n",FiltedProducts,price.min, price.max);
    ProductGrid(FiltedProducts,headers,price.min, price.max)
    let shop=document.querySelector("#shop");
    let session_subCat=document.querySelector(".SubCategories")
    let section_category=document.querySelector(".Categories")
    let section_products=document.querySelector(".Filtred-Products")
    shop.append(section_products);
    shop.append(session_subCat);
    shop.append(section_category);
}
// Add categories
CategoryGrid();
//SubCategoryGrid();

// Form submit and save Data to google sheets
function saveData(name,phone,email){
  console.log("saveData:",name,email,phone);
  var url = "https://script.google.com/macros/s/AKfycbzACncFMqMZj5pw1Cl_cZv3mDa9xCScg9oH3jYiFyI6lzrz1bMTs7Yd7PEjWI-aDAkkjQ/exec";
  var form = new FormData();
  form.append("name", name);
  form.append("email", phone);
  form.append("phone", email);
  /// jquery post
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?" + new FormData(form).toString());
  xhr.send();
}
$("#contact-form").click(function(event) {
  event.preventDefault();
  var form = $(this);
  var url = "https://script.google.com/macros/s/AKfycbzACncFMqMZj5pw1Cl_cZv3mDa9xCScg9oH3jYiFyI6lzrz1bMTs7Yd7PEjWI-aDAkkjQ/exec";
  $.get(url, form.serialize(), function(data) {
    console.log("Data saved successfully 2.");
    form.trigger("reset");
  });
});