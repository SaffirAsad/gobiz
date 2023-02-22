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
//sliderTrack.innerHTML = `<img class="imgSL" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg">`;
//sliderTrack.innerHTML = `<img class="imgSL" src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg">`;
sliderTrack.innerHTML = `<img src="https://cdn.pixabay.com/photo/2022/11/04/19/17/alone-7570547_640.jpg">`;


fixedDiv=document.querySelector("div.slider-track");
imgs=document.querySelectorAll("div.slider-track>img");
fixedDiv.style.backgroundColor="gray";
setTimeout(()=>{
  imgs.forEach(img=>{
    w=img.width;
    h=img.height;
    console.log(w,h);
    if (w>h){
      img.style.width="300px";
      img.style.height="auto";
      if(h!=0){
        img.style.marginTop = `${parseInt((300-img.height)/2)}px`;
      }
    }else{
      img.style.width="auto";
      img.style.height="300px"; 
      if(w!=0){
        img.style.marginLeft = `${parseInt((300-img.width)/2)}px`;
      }
    }
  });
  fixedDiv.style.width="300px";
  fixedDiv.style.height="300px";
},0);

