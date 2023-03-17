var cart = [];
var FavCart = [];
var whatsAppNumber = "919159345508";
var whatsAppMessage = "Thanks for shopping with us. Pre Payment Required";
var currency = "$";
$("#badge").hide();
$("#badgeFav").hide();
$("#place-order").hide();
$("#empty-cart").show();

function addToCart(pid) {
  "use strict";
  var productName = $("#" + pid + "_product_name").text();
  var price = $("#" + pid + "_price").text();
  var product_image = $("#" + pid + "_product_image").attr("src");
  var subtitle = $("#" + pid + "_subtitle").text();

  var quantity_increment = false;
  for (let index = 0; index < cart.length; index++) {
    if (cart[index].product_id == pid) {
      cart[index].qty = cart[index].qty + 1;
      quantity_increment = true;
      successAlert("Cart updated");
      updateBadge();
    }
  }
  if (quantity_increment == false) {
    cart.push({
      product_name: productName,
      price: price,
      product_id: pid,
      currency: currency,
      qty: 1,
      product_image: product_image,
      subtitle: subtitle,
    });
    successAlert("Item added to cart");
    updateBadge();
  }
  updateList();
}

function updateList() {
  "use strict";
  var cart_items = "";
  var grandTotal = 0;
  for (let j = 0; j < cart.length; j++) {
    var total_price = 0;
    total_price = cart[j].qty * Number(cart[j].price);
    grandTotal += Number(total_price);
    cart_items +=
      '<div class="p-4 bg-white rounded"><img class="rounded bp-2" src="images/115462851703180043069-61540d063bfbe.png"><div class="flex mb-6 mt-1 justify-between items-center"><div><h3 class="text-sm font-medium">' +
      cart[j].product_name +
      '</h3> <span class="text-xs text-gray-500">' +
      cart[j].subtitle +
      '</span></div></div><div class="flex mb-2 justify-between items-center"><h4 class="text-xl font-bold">' +
      currency +
      " " +
      total_price +
      '</h4> <a onclick="reduceQty(' +
      j +
      ')" class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200">-</a><h4 class="text-sm font-medium">' +
      cart[j].qty +
      '</h4> <a onclick="addQty(' +
      j +
      ')" class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200">+</a> <a class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200" onclick="removeFromCart(' +
      j +
      ')">X</a></div></div>';
  }
  cart_items +=
    '<br> <h3 class="pl-4 pt-4 pr-4 font-bold">Grand total: ' +
    currency +
    " " +
    grandTotal.toFixed(2) +
    "</h3>";
  $("#cart_items").html(cart_items);
}

function updateBadge() {
  "use strict";
  var badgeCount = cart.length;
  if (badgeCount > 0) {
    $("#empty-cart").hide();
    $("#badge").text(badgeCount);
    $("#badge").show();
    $("#place-order").show();
  } else {
    $("#badge").hide();
    $("#place-order").hide();
    $("#empty-cart").show();
  }
}



function addToFavCart(pid) {
    
    "use strict";
    var productName = $("#" + pid + "_product_name").text();
    var price = $("#" + pid + "_price").text();
    var product_image = $("#" + pid + "_product_image").attr("src");
    var subtitle = $("#" + pid + "_subtitle").text();
    
    var quantity_increment = false;
    for (let index = 0; index < FavCart.length; index++) {
        if (FavCart[index].product_id == pid && pid!="") {
            FavCart[index].qty = FavCart[index].qty + 1;
            quantity_increment = true;
            
            console.log("pid",pid);
            successFavAlert('Favorite Cart updated');
            updateFavBadge();
        }
    }
    if (quantity_increment == false) {
        FavCart.push({
            "product_name": productName,
            "price": price,
            "product_id": pid,
            "qty": 1,
            "product_image": product_image,
            "subtitle": subtitle
        });
        successFavAlert("Item added to Favorite Cart");
        updateFavBadge();
    }
    updateFavList();
}
function updateFavList() {
    "use strict";
    var FavCart_items = "";
    var grandTotal = 0;
    for (let j = 0; j < FavCart.length; j++) {
        console.log(FavCart)
        var total_price = 0;
        total_price = FavCart[j].qty * Number(FavCart[j].price);
        grandTotal += Number(total_price);
        console.log(FavCart[j].pid)
        FavCart_items += `
                        <div class="p-4 bg-white rounded">
                            <img class="rounded bp-2" src="${FavCart[j].product_image}">
                            <div class="flex mb-6 mt-1 justify-between items-center">
                                <div>
                                    <h3 class="text-sm font-medium">${FavCart[j].product_name}</h3> 
                                    <span class="text-xs text-gray-500">${FavCart[j].subtitle}</span>
                                </div>
                            </div>
                            <div class="flex mb-2 justify-between items-center"> 
                                <div class="p-add-shop">
                                    <button class="btn" onclick="if (!window.__cfRLUnblockHandlers) return false; addToCart('${FavCart[j].product_id}')">Add</button>
                                </div>
                                <h4 style="display: flex; width:auto">
                                    <span id="${FavCart[j].pid}_currency">$</span>
                                    <div id="${FavCart[j].pid}_price">${FavCart[j].price}</div>
                                </h4>
                                <a class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200" onclick="removeFromFavCart(${j})">X</a>
                            </div>
                        </div>
                        `;
                        }
    $("#FavCart_items").html(FavCart_items);
}

function updateFavBadge() {
    "use strict";
    var badgeCount = FavCart.length;
    if (badgeCount > 0) {
        $("#badgeFav").text(badgeCount);
        $("#badgeFav").show();
    } else {
        $("#badgeFav").hide();
    }
}

function removeFromCart(i) {
    "use strict";
    var cartList = cart;
    cart = [];
    for (let l = 0; l < cartList.length; l++) {
        if (l == i) {} else {
            cart.push(cartList[l])
        }
    }
    
    successAlert('Item Removed');
    updateBadge();
    updateList();
}
function removeFromFavCart(i) {
    "use strict";
    var FavCartList = FavCart;
    FavCart = [];
    for (let l = 0; l < FavCartList.length; l++) {
        if (l == i) {} else {
            FavCart.push(FavCartList[l])
        }
    }
    console.log("Fav",FavCart);
    successFavAlert('Item Removed');
    updateFavBadge();
    updateFavList();

}
function updateFavListOnload(products) {
  "use strict";
  var FavCart_items = "";
  var grandTotal = 0;
  let product = {};
  let id = "";
  for (let j = 0; j < Object.keys(localStorage).length; j++) {
      id = Object.keys(localStorage)[j].split("_fav")[0]
      product = products.filter(product=>{return (product.Product_id==id)})
      console.log("product",product.URLs);
      FavCart_items += `
                      <div class="p-4 bg-white rounded">
                          <img class="rounded bp-2" src="${product.URLs.split("\n")[0].replace('\"',"")}">
                          <div class="flex mb-6 mt-1 justify-between items-center">
                              <div>
                                  <h3 class="text-sm font-medium">${product.ProductName}</h3> 
                                  <span class="text-xs text-gray-500">${product.subtitle}</span>
                              </div>
                          </div>
                          <div class="flex mb-2 justify-between items-center"> 
                              <div class="p-add-shop">
                                  <button class="btn" onclick="if (!window.__cfRLUnblockHandlers) return false; addToCart('${product.Product_id}')">Add</button>
                              </div>
                              <h4 style="display: flex; width:auto">
                                  <span id="${product.Product_id}_currency">$</span>
                                  <div id="${product.Product_id}_price">${product.price}</div>
                              </h4>
                              <a class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200" onclick="removeFromFavCart(${j})">X</a>
                          </div>
                      </div>
                      `;
                      }
  $("#FavCart_items").html(FavCart_items);
}

