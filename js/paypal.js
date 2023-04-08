$('label').on('click', function(){
    var color = $(this).next().css('color');
    console.log(color);
    if (color == 'rgb(177, 177, 177)') {
        $(this).next().addClass('grey');
    }
    else { 
        $(this).next().removeClass('grey');
    }
});

function initPayPalButton() {
    paypal.Buttons({
        style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
        },
        createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value": document.querySelector('#mainTotalPrice').querySelector(".total").innerHTML}}]
        });
        },
        onApprove: function(data, actions) {
            // save data to google sheets
            let products_name = "";
            let products_id = "";
            let productsList = "\n- - - - - - - - - - - - - - - - - - - -\n";
            productsList += "📦 *`Order Details:`* \n";
            let grandTotal = 0;
            for (let x = 0; x < cart.length; x++) {
                let item_cost = Number(cart[x].qty) * Number(cart[x].price);
                let cart_price = Number(cart[x].price);
                products_name += cart[x].product_name.replace("\n","").replace(" ","")+";"
                products_id += cart[x].product_id+";"
                productsList += cart[x].product_name + "     " + cart[x].qty + " X " + cart_price.toFixed(2) + "     *" + currency + " " + item_cost.toFixed(2) + "* \n";
                grandTotal += Number(cart[x].price) * cart[x].qty;
            }
            productsList += "\n- - - - - - - - - - - - - - - - - - - -\n";
            productsList += "*`Total :`* " + "*" + currency + " " + grandTotal.toFixed(2) + "*";
            productsList += "\n- - - - - - - - - - - - - - - - - - - -\n\n";
            let waShareContent = "🎉 *`New Order`* \n";
            // send data to google sheets
            saveData(products_name , products_id , encodeURI(waShareContent+productsList));
            //
            return actions.order.capture().then(function(orderData) {
                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
                // Or go to another URL:  actions.redirect('thank_you.html');
            });
        },
        onError: function(err) {
        console.log(err);
        }
    }).render('#paypal-button-container');
}
try{initPayPalButton()}catch(err){}


