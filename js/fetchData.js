function fetchData() {
    //console.log("load DataBase");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXdu2BEMg-HK6vicRYTmIskyAXS4dVKEIzRZFipBBYuwR9k_1bX7Kw_L9jUONWdUSsHhYUZIKDvS6k/pub?output=csv', false);
    request.send();
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText.split('\r');
      headers = data[0].split(',');
      products = [];
      for (var i = 1; i < data.length; i++) {
        var productData = data[i].split(',');
        if (productData.length < headers.length) {
          continue;
        }
        var product = {};
        for (var j = 0; j < headers.length; j++) {
          product[headers[j]] = productData[j];
        }
        products.push(product);
      }
      DataBase = products;
    } else {
      console.error('Error while fetching data from Google Sheet');
    }
}
function ProductGrid(products,headers,min, max){
    var Owner = Object.values(headers)[0];	
    var ProductName = Object.values(headers)[1];
    var	MainCategory = Object.values(headers)[2];	
    var SubCategory = Object.values(headers)[3];	
    var company = Object.values(headers)[4];
    var price = Object.values(headers)[5];
    var StockQuantity = Object.values(headers)[6];
    var Size = Object.values(headers)[7];	
    var Color = Object.values(headers)[8];
    var URLs = Object.values(headers)[9];

    const productsGrid = document.querySelector('#Filtred-Products');
    let productsHTML = '';
    let count=0;
    products.forEach(product => {
        let _price = product[price];
        
        if(Number( _price ) >= min && Number( _price ) <= max ){
            count+=1;
            document.querySelector('#Results').innerHTML = `<h4 id="res"> Availbale Products: </h4>`;
            productsHTML += `
                <div class="w-1/1 lg:w-1/3 p-4">
                    <div class="p-4 bg-white shadow-lg rounded-lg">
                        <div class="w-full mb-2">
                            <img class="rounded pb-2" id="6257f6f020364_product_image" src="${product[URLs]}" alt="${product[ProductName]}">
                        </div>
                        <span class="py-1 px-2 bg-red-500 rounded text-xs text-white">Hot</span>
                        <div class="w-full mb-1 mt-1 justify-between items-center">
                            <div>
                                <h3 id="6257f6f020364_product_name" class="text-sm font-medium">
                                    ${product[ProductName]}</h3>
                                <span id="6257f6f020364_subtitle" class="text-xs text-gray-500">${product[company]}</span>
                            </div>
                        </div>
                        <div class="w-full mb-1 justify-between items-center">
                            <h4 class="text-sm mb-3 font-bold"><span id="6257f6f020364_currency">$</span> <span id="6257f6f020364_price">${product[price]}</span>
                            </h4>
                            <a onclick="if (!window.__cfRLUnblockHandlers) return false; addToCart('6257f6f020364')" 
                            class="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-md text-white transition duration-200">Add			   </a>
                        </div>
                    </div>
                </div>
            `;
        }
        
    });
    
    productsGrid.innerHTML = productsHTML;
    //console.log(count);
    if (count == 0){
        document.querySelector('#Results').innerHTML = `<h4> No things to Show!. </h4>`;
    }
}

function CategoryGrid(){
    var request = new XMLHttpRequest();
    url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSXdu2BEMg-HK6vicRYTmIskyAXS4dVKEIzRZFipBBYuwR9k_1bX7Kw_L9jUONWdUSsHhYUZIKDvS6k/pub?gid=983383517&single=true&output=csv";
    request.open('GET', url, false);
    request.send();
    if (request.status >= 200 && request.status < 400) {
        var data = request.responseText.split('\r\n');
        headers = data[0].split(',');
        categoryImgUrls = [];
        for (var i = 1; i < data.length; i++) {
            var catData = data[i].split(',');
            if (catData.length < headers.length) {
            continue;
            }
            var cat = {};
            for (var j = 0; j < headers.length; j++) {
            cat[headers[j]] = catData[j];
            }
            categoryImgUrls.push(cat);
        }
        categoryImgUrls.forEach(cat=>{
            catHTML+=`
            <div class="w-1/1 lg:w-1/3 p-4">
                <div>
                    <h1 style="font-size:40px;">${cat["categories"]}<h1>
                </div>
                <div class="p-4 bg-white shadow-lg rounded-lg">
                    <div class="w-full mb-2">
                        <img class="rounded pb-2" id="6257f6f01d1e1_product_image" src="${cat["categoryUrl"]}" alt="${cat["categories"]}">
                    </div>
                </div>
            </div>
            `;
        });
    }
    else {
    console.error('Error while fetching data from Google Sheet');
    } 
    categories=document.querySelector("#Categories");
    categories.innerHTML = catHTML;
}
