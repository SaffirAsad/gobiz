var cart = [];
var FavCart = [];
var whatsAppNumber = "919159345508";
var whatsAppMessage = "Thanks for shopping with us. Pre Payment Required";
var currency = "$";

$("#badge").hide();
$("#badgeFav").hide();
$("#place-order").hide();
$(".cardpricing").hide();
$("#empty-cart").show();

function placeOrder() {
    createWhatsAppLink();
    /*
    "use strict";
    Swal.fire({
        html: '<div class="text-left mt-2"> <p class="text-md">Please fill following details: </p>' +
            '<label class="mt-6 block text-gray-700 text-sm font-bold mb-2" for="cus_name">Full Name</label>' +
            '<input id="cus_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">' +

            '<label class="mt-4 block text-gray-700 text-sm font-bold mb-2" for="cus_mobile">Mobile</label>' +
            '<input id="cus_mobile" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">' +

            '<label class="mt-4 block text-gray-700 text-sm font-bold mb-2" for="cus_address">Address</label>' +
            '<input id="cus_address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">' +
            '</div>',

        focusConfirm: false,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#17BB84',
        confirmButtonText: 'Confirm',
        cancelButtonText: "Close",
        preConfirm: () => {
            var customerDetails = [
                document.getElementById('cus_name').value,
                document.getElementById('cus_mobile').value,
                document.getElementById('cus_address').value
            ];
            createWhatsAppLink(customerDetails);

        }
        
    })
    */
}
function createWhatsAppLink() {
        var products_name = "";
        var products_id = "";
        var productsList = "\n- - - - - - - - - - - - - - - - - - - -\n";
        productsList += "📦 *`Order Details:`* \n";

        var grandTotal = 0;
        for (let x = 0; x < cart.length; x++) {
            var item_cost = Number(cart[x].qty) * Number(cart[x].price);
            var cart_price = Number(cart[x].price);
            products_name += cart[x].product_name.replace("\n","").replace(" ","")+";"
            products_id += cart[x].product_id+";"
            productsList += cart[x].product_name + "     " + cart[x].qty + " X " + cart_price.toFixed(2) + "     *" + currency + " " + item_cost.toFixed(2) + "* \n";
            grandTotal += Number(cart[x].price) * cart[x].qty;
        }

        productsList += "\n- - - - - - - - - - - - - - - - - - - -\n";
        productsList += "*`Total :`* " + "*" + currency + " " + grandTotal.toFixed(2) + "*";
        productsList += "\n- - - - - - - - - - - - - - - - - - - -\n\n";
        /*
        var customerDetails = "📞 *`Customer Details:`* \n\n";
        customerDetails += cusDetails[0] + "\n";
        customerDetails += cusDetails[1] + "\n";
        customerDetails += cusDetails[2] + "\n\n";
        */
        var waShareContent = "🎉 *`New Order`* \n";

        // save data to google sheets
        saveData(products_name , products_id , encodeURI(waShareContent+productsList));
        
        /*
        old line was 
        waShareContent = waShareContent + productsList + customerDetails + "*" + whatsAppMessage + "*";
        */
        waShareContent = waShareContent + productsList + "*" + whatsAppMessage + "*";
        var link = "https://api.whatsapp.com/send/?phone=" + whatsAppNumber + "&text=" + encodeURI(waShareContent);
        window.open(link, '_blank');
        successAlert('Order Placed!');
}
function addToCart(pid) {
  "use strict";
  var productName = $("#" + pid + "_product_name").text();
  var price = $("#" + pid + "_price").text();
  var product_image = $("#" + pid + "_product_image").attr("src");
  var subtitle = $("#" + pid + "_subtitle").text();
  let product = {};
  if(product_image==undefined){
    product = products.filter(product=>{return (product[headers[9]]==pid)})[0]
    var productName = product[headers[1]];
    var price = product[headers[5]];
    var product_image = product[headers[10]].split("\n")[0].replace('\"',"");
    var subtitle = product[headers[4]];
  }   
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
  $("#cart_items").hide()
  $("#empty-cart").show();
  for (let j = 0; j < cart.length; j++) {
    $("#cart_items").show()
    $("#empty-cart").hide();
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
    `<div class="pt-6 p-3">
      <div class="btnpricing" id="mainTotalPrice">
          <p class="cure" style="margin-right:10px;">Total:</p>
          <p class="total">${grandTotal.toFixed(2)}</p>
          <p class="cure">${currency}</p>
      </div>
    </div>`;
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
    $(".cardpricing").show();
  } else {
    $("#badge").hide();
    $("#place-order").hide();
    $(".cardpricing").hide();
    $("#empty-cart").show();
  }
}
function reduceQty(i) {
    "use strict";
    if (cart[i].qty == 1) {
        removeFromCart(i);
    } else {
        cart[i].qty = cart[i].qty - 1;
        updateBadge();
        updateList();
    }
}

function addQty(i) {
    "use strict";
    cart[i].qty = cart[i].qty + 1;
    updateBadge();
    updateList();
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

/////////////////////////////////////////////////
/////////////    Favorite Cart     //////////////
/////////////////////////////////////////////////

function addToFavCart(pid) {
    
    "use strict";
    var productName = $("#" + pid + "_product_name").text();
    var price = $("#" + pid + "_price").text();
    var product_image = $("#" + pid + "_product_image").attr("src");
    var subtitle = $("#" + pid + "_subtitle").text();
    if(product_image==undefined){
      product = products.filter(product=>{return (product[headers[9]]==pid)})[0]
      var productName = product[headers[1]];
      var price = product[headers[5]];
      var product_image = product[headers[10]].split("\n")[0].replace('\"',"");
      var subtitle = product[headers[4]];
    }  
    var quantity_increment = false;
    for (let index = 0; index < FavCart.length; index++) {
        if (FavCart[index].product_id == pid && pid!="") {
            FavCart[index].qty = FavCart[index].qty + 1;
            quantity_increment = true;
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
    updateFavList() 
}
function removeItemFromFavCart(id) {
    const index = FavCart.findIndex(item => item.product_id === id);
    if (index !== -1) {
      FavCart.splice(index, 1);
    }
  }

function updateFavList() {
    "use strict";
    var FavCart_items = "";
    var grandTotal = 0;
    $("#cart_items").hide()
    $("#empty-cart").show();
    for (let j = 0; j < FavCart.length; j++) {
      $("#cart_items").show()
      $("#empty-cart").hide();
        var total_price = 0;
        total_price = FavCart[j].qty * Number(FavCart[j].price);
        grandTotal += Number(total_price);
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
                                <a class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200" onclick="removeFromFavCart('${FavCart[j].product_id}')">X</a>
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

function removeFromFavCart(id) {
    "use strict";
    var FavCartList = FavCart;
    FavCart = [];
    for (let l = 0; l < FavCartList.length; l++) {
        if (FavCartList[l].product_id == id) {   
            localStorage.setItem(id, "regular");
        } else {
            FavCart.push(FavCartList[l])
        }
    }
    successFavAlert('Item Removed');
    updateFavBadge();
    updateFavList();
}
function updateFavListOnload(products) {
  "use strict";
  var FavCart_items = "";
  var grandTotal = 0;
  let product = {};
  let pid = "";
  let solid = Object.keys(localStorage).filter(key => localStorage[key] == 'solid')

  for (let j = 0; j < solid.length-1; j++) {
      pid = solid[j];//.split("_fav")[0]
      product = products.filter(product=>{return (product[headers[9]]==pid)})[0]
      if(product == undefined){continue}
      FavCart_items += `
                      <div class="p-4 bg-white rounded">
                          <img class="rounded bp-2" src="${product[headers[10]].split("\n")[0].replace('\"',"")}">
                          <div class="flex mb-6 mt-1 justify-between items-center">
                              <div>
                                  <h3 class="text-sm font-medium">${product[headers[1]]}</h3> 
                                  <span class="text-xs text-gray-500">${product[headers[4]]}</span>
                              </div>
                          </div>
                          <div class="flex mb-2 justify-between items-center"> 
                              <div class="p-add-shop">
                                  <button class="btn" onclick="if (!window.__cfRLUnblockHandlers) return false; addToCart('${product[headers[9]]}')">Add</button>
                              </div>
                              <h4 style="display: flex; width:auto">
                                  <span id="${product[headers[9]]}_currency">$</span>
                                  <div id="${product[headers[9]]}_price">${product[headers[5]]}</div>
                              </h4>
                              <a class="py-2 px-3 bg-red-500 hover:bg-red-600 rounded-full text-xs text-white transition duration-200" onclick="removeFromFavCart('${product[headers[9]]}')">X</a>
                          </div>
                      </div>
                      `;
    FavCart.push({
        "product_name": product[headers[1]],
        "price": product[headers[5]],
        "product_id": product[headers[9]],
        "qty": 1,
        "product_image": product[headers[10]].split("\n")[0].replace('\"',""),
        "subtitle": product[headers[4]]
    });
    updateFavBadge();
    updateFavList(); 
    favorite(id);                 
  }
  $("#FavCart_items").html(FavCart_items);
}

