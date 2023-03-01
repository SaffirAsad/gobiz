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
    let FiltedProducts = [];
    products.forEach(product => {
        if(product["MainCategory"]==mainCategorySelectValue && 
        product["SubCategory"]==subCategorySelectValue &&
        product["Color"]==colorSelectValue){
            FiltedProducts.push(product);
        }
    });
    
    inputEl=document.querySelectorAll("input");
    price=validateRange(parseInt(inputEl[0].value), parseInt(inputEl[1].value));
    console.log("FiltedProducts:\n",FiltedProducts,price.min, price.max);
    ProductGrid(FiltedProducts,headers,price.min, price.max)

    let shop=document.querySelector("#shop");
    let section_category=document.querySelector(".Categories")
    let section_products=document.querySelector(".Filtred-Products")
    shop.append(section_products);
    shop.append(section_category);
}
// Add categories
CategoryGrid();
//SubCategoryGrid();


