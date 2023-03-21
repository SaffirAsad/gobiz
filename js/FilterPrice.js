// read google sheets database
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
    //console.log("FiltedProducts:\n",FiltedProducts,price.min, price.max);
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
// Form submit and save Data to google sheets
function saveData(products_name,products_id,msg){
  var url = "https://script.google.com/macros/s/AKfycbyy9t0W2SXkXKrUUjdQRud3TX3vLxKWlIchTvbpgnz7ASmrXTkSE4NhjETUX48ITGAT/exec";
  /// jquery post
  data = `&products_name=${products_name.replace(/ +/g,'')}&products_id=${products_id.replace(/ +/g,'')}&msg=${msg}`
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?" + data);
  xhr.send();
}
//update favorite products based on saved cookies
updateFavListOnload(products)

// When the user clicks the scroll-to-top button, scroll to the top of the document with animation
document.getElementById("scroll-to-top-btn").onclick = function() {
  // Get the current scroll position
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  // Define the animation duration and easing function
  const duration = 500;
  const easing = t => t * (2 - t);

  // Define the starting and ending scroll positions
  const start = scrollPos;
  const end = 0;

  // Define the start time of the animation
  const startTime = performance.now();

  // Define the animation function
  const animateScroll = currentTime => {
    const elapsedTime = currentTime - startTime;
    const scrollPos = Math.round(start + (end - start) * easing(elapsedTime / duration));
    window.scrollTo(0, scrollPos);
    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  // Start the animation
  requestAnimationFrame(animateScroll);
};
