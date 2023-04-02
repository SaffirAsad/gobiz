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
amount = document.getElementById('totalPrice').getElementsByClassName('total')[0].innerHTML;
paypal.Buttons({
    style: {
    shape: 'rect',
    color: 'gold',
    layout: 'vertical',
    label: 'paypal',
    },
    createOrder: function(data, actions) {
    return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"USD","value": amount}}]
    });
    },
    onApprove: function(data, actions) {
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
initPayPalButton();

