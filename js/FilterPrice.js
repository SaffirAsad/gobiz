// read google sheets database
let DataBase = "";
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
MenuUser(products);

function Search(products){
    const mainCategorySelectValue = document.getElementById("mainCategorySelect").value;
    const subCategorySelectValue = document.getElementById("subCategorySelect").value;
    const colorSelectValue = document.getElementById("colorSelect").value;
    let FiltedProducts = [];
    products.forEach(product => {
        if(product["MainCategory"]==mainCategorySelectValue && 
        product["SubCategory"]==subCategorySelectValue &&
        product["Color"]==colorSelectValue){
            FiltedProducts.push(product);
        }
    });
    //console.log("price.min,price.max");
    inputEl=document.querySelectorAll("input");
    price=validateRange(parseInt(inputEl[0].value), parseInt(inputEl[1].value));
    ProductGrid(FiltedProducts,headers,price.min, price.max)
}

// slider test
var sliderTrack = document.querySelector("div.slider-track");
sliderTrack.innerHTML = ` <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"> `
var imgs = document.querySelectorAll("div.slider-track>img");
const fixedDiv = document.querySelector("div.slider-track");
imgs.forEach(img =>{
  
  const imgWidth = img.width;
  const imgHeight = img.height;
  console.log("this ><>",imgWidth,imgHeight);
  if (imgWidth > imgHeight) {
    img.style.width = "auto";
    img.style.height = "300px";
  } else {
    img.style.width = "300px";
    img.style.height = "auto";
  }
  fixedDiv.style.width = "300px";
  fixedDiv.style.height = "300px";
});
