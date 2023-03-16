function addToFavCart(pid) {
    "use strict";
    var productName = $("#" + pid + "_product_name").text();
    var price = $("#" + pid + "_price").text();
    var product_image = $("#" + pid + "_product_image").attr("src");
    var subtitle = $("#" + pid + "_subtitle").text();
    
    var quantity_increment = false;
    for (let index = 0; index < FavCart.length; index++) {
        if (FavCart[index].product_id == pid) {
            FavCart[index].qty = FavCart[index].qty + 1;
            quantity_increment = true;
            successAlert('Cart updated');
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
        successAlert("Item added to FavCart");
        updateFavBadge();
    }
    updateFavList();
}
function updateFavList() {
    "use strict";
    var FavCart_items = "";
    var grandTotal = 0;
    for (let j = 0; j < cart.length; j++) {
        var total_price = 0;
        total_price = cart[j].qty * Number(cart[j].price);
        grandTotal += Number(total_price);
        FavCart_items += `
                        <div class="p-4 bg-white rounded"><img class="rounded bp-2" src="${cart[j].product_image}>
                            <div class="flex mb-6 mt-1 justify-between items-center">
                                <div>
                                    <h3 class="text-sm font-medium">${cart[j].product_name}</h3> 
                                    <span class="text-xs text-gray-500">${cart[j].subtitle}</span>
                                </div>
                            </div>
                            <div class="flex mb-2 justify-between items-center"> 
                                <div class="p-add-shop">
                                    <button class="btn" onclick="if (!window.__cfRLUnblockHandlers) return false; addToFavCart('${cart[j].pid}')">Add</button>
                                </div>
                                <h4 style="display: flex; width:auto">
                                    <span id="${cart[j].pid}_currency">$</span>
                                    <div id="${cart[j].pid}_price">${cart[j].price}</div>
                                </h4>
                            </div>
                        </div>';
                        `;
                        }
    $("#FavCart_items").html(FavCart_items);
}

function updateFavBadge() {
    "use strict";
    var badgeCount = cart.length;
    if (badgeCount > 0) {
        $("#empty-cart").hide();
        $("#badge").text(badgeCount);
        $("#badge").show();
        $("#place-order").show();
    } else {
        $("#badge").hide();
        //$("#place-order").hide();
        $("#empty-cart").show();
    }
}

function reduceQty(i) {
    "use strict";
    if (FavCart[i].qty == 1) {
        removeFromCart(i);
    } else {
        FavCart[i].qty = FavCart[i].qty - 1;
        updateFavBadge();
        updateFavList();
    }
}

function addQty(i) {
    "use strict";
    FavCart[i].qty = FavCart[i].qty + 1;
    updateFavBadge();
    updateFavList();
}

function removeFromCart(i) {
    "use strict";
    var cartList = FavCart;
    FavCart = [];
    for (let l = 0; l < cartList.length; l++) {
        if (l == i) {} else {
            FavCart.push(cartList[l])
        }
    }
    successAlert('Item Removed');
    updateFavBadge();
    updateFavList();
}

const favorite = (id) => {
    const heartIcon = document.getElementById(id);
    if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartIcon.style.color = "red";
      localStorage.setItem(id, "solid"); 
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
      heartIcon.style.color = "black";
      localStorage.setItem(id, "regular"); 
    }
  }
  
  const heartIcons = document.getElementsByClassName("fa-heart");
  for (let i = 0; i < heartIcons.length; i++) {
    const heartIcon = heartIcons[i];
    const id = heartIcon.id;
    const statusHeart = localStorage.getItem(id);
    if (statusHeart === "solid") {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartIcon.style.color = "red";
    }
  }
  
  const checkFavorite = _ => {
    const heartIcons = document.getElementsByClassName("fa-heart");
    for (let i = 0; i < heartIcons.length; i++) {
      const heartIcon = heartIcons[i];
      const id = heartIcon.id;
      const status = localStorage.getItem(id);
      if (status === "solid") {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        heartIcon.style.color = "red";
      }
    }
  }
  
  window.onload = checkFavorite();
