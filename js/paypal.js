/*
function RangeSlider(selector, callback) { 
    this.elements = document.querySelectorAll(selector || '.range-slider');
    this.callback = callback;
    
    // if IE - listen for change
    this.listenerType = /Trident|MSIE/.test(navigator.userAgent) ? 'change' : 'input';
    
    for (var i = 0, len = this.elements.length; i < len; i++) {
        this._bindListener(this.elements[i]);
    }
};

RangeSlider.prototype = {
    _bindListener: function(el) {
        var self = this;
        var input = el.querySelector('input[type=range]');
        var output = el.querySelector('.range-phrase');

        this._render(el, input, output);

        input.addEventListener(this.listenerType, function() {
            self._render(el, input, output);
        }, false);
    },
    _render: function(el, input, output) {
        output.innerHTML = input.value;
        
        if (typeof this.callback === 'function') {
            this.callback(el, input, output, parseInt(input.value, 10));
        }
    },
};
//website pricing
new RangeSlider(
    '#sites', 
    function(el, rangeEl, valueEl, value) {
        var i18n = JSON.parse(el.getAttribute('data-i18n') || '{}');
        var priceEl = el.querySelector('.rangetotal');
        var pricingEl = el.querySelector('.pricing-detail');
     var max = parseInt(rangeEl.getAttribute('max'), 10);
        var units = el.querySelector('.units');
		 var lab = document.getElementById("lab");


        if (value == 0) {
            pricingEl.innerHTML = i18n.upTo1;
            units.innerHTML = ""
            priceEl.innerHTML = '';
            valueEl.innerHTML = 'No Website!';
				butn.innerHTML = '<a href="'+i18n.askOfferURL+'" class="btnpricing btn-gray">'+i18n.askOffer+'</a>';
        } 
        else if (value == 1) {
            pricingEl.innerHTML = (value * 115);
            units.innerHTML = ""
            priceEl.innerHTML = (value * 115);
            valueEl.innerHTML += ' Website';
        } 
        else if (value <= 10) {
            pricingEl.innerHTML = "Save $" + ((value * 115)-(value * (115-(value * 2.5)))) + "  ($" + (115 - (value * 2.5)) + "/unit)";
            units.innerHTML = ""
            priceEl.innerHTML = value * (115-(value * 2.5));
            valueEl.innerHTML += ' Websites';
        } 
		  
		      else if (value <= 15) {
            pricingEl.innerHTML = "Save $" + ((value * 115)-(value * (90-(value-10)))) + "  ($" + (90-(value-10)) + "/unit)";
            units.innerHTML = ""
            priceEl.innerHTML = value * (90-(value-10));
            valueEl.innerHTML += ' Websites';
        } 
		  
		    else if (value < max) {
            pricingEl.innerHTML = "Save $" + (((value * 115)-(85 * value))) + " ($85/unit)";
            units.innerHTML = ""
            priceEl.innerHTML = value * 85;
            valueEl.innerHTML += ' Websites';
        } 
		  
		  else {
            pricingEl.innerHTML = '<a href="'+i18n.askOfferURL+'" class="btnpricing btn-gray">'+i18n.askOffer+'</a>';
            priceEl.innerHTML = '';
            valueEl.innerHTML += '+';
				 units.innerHTML = ""
        }
    }
);

*/

var price = document.getElementById('sites').getElementsByClassName('rangetotal')[0];
/*
	//video pricing
new RangeSlider(
    '#videos', 
    function(el, rangeEl, valueEl, value) {
        var i18n = JSON.parse(el.getAttribute('data-i18n') || '{}');
        var priceEl = el.querySelector('.rangetotal');
        var pricingEl = el.querySelector('.pricing-detail');
        var max = parseInt(rangeEl.getAttribute('max'), 10);
     //   var pricePerPerson = 65;
        //var units = el.querySelector('.units');
		//   var videoOpt1 = document.getElementById("videoOption1")
		  
         if (value == 0) {
            pricingEl.innerHTML = i18n.upTo1;
           // units.innerHTML = value
            priceEl.innerHTML = 0;
            valueEl.innerHTML = 'No Video!';
        } 
        else if (value == 1) {
            pricingEl.innerHTML = i18n.upTo1;
           // units.innerHTML = value
            priceEl.innerHTML = value * 65;
            valueEl.innerHTML += ' Video';
				//videoOpt1.innerHTML = value * 80
        } 
        else if (value <= 10) {
            pricingEl.innerHTML = "Save $" + ((value * 65)-(value * (65-(value * 1.5)))) + "  ($" + (65 - (value * 1.5)) + "/unit)";
           // units.innerHTML = value
            priceEl.innerHTML = value * (65-(value * 1.5));
            valueEl.innerHTML += ' Videos for $' + prix.innerHTML;
				//videoOpt1.innerHTML = (value * (65-(value * 1.5))) + (value * 15)
        } 
		  
		      else if (value <= 15) {
            pricingEl.innerHTML = "Save $" + ((value * 65)-(value * (50-(value-10)))) + "  ($" + (50-(value-10)) + "/unit)";
           // units.innerHTML = value
            priceEl.innerHTML = value * (65-(value-10));
            valueEl.innerHTML += ' Videos';
        } 
		  
		    else if (value < max) {
            pricingEl.innerHTML = "Save $" + (((value * 65)-(45 * value))) + " ($45/unit)";
           // units.innerHTML = value
            priceEl.innerHTML = value * 45;
            valueEl.innerHTML += ' Videos';
        } 
		  else {
            pricingEl.innerHTML = '<a href="'+i18n.askOfferURL+'" class="btnpricing btn-gray">'+i18n.askOffer+'</a>';
            priceEl.innerHTML = 0;
            valueEl.innerHTML += '+';
				// units.innerHTML = value
        }
    }
);

 var prix = document.getElementById('videos').getElementsByClassName('rangetotal')[0];
            console.log(prix.innerHTML);
var  pricingDirectorywebsite = document.getElementById("pricing-Directorywebsite");	

*/
var total = parseInt(price.innerHTML) + parseInt(prix.innerHTML);
				   price.addEventListener('DOMSubtreeModified', function cal() {
					
						if (isNaN(parseInt(price.innerHTML)) && isNaN(parseInt(prix.innerHTML)))  {
                   var total = '' ;
						 console.log(total);
                }
					 
               else if (isNaN(parseInt(prix.innerHTML))) {
                    var total = parseInt(price.innerHTML);
                    console.log(total);
                } 
					  else if (isNaN(parseInt(price.innerHTML))) {
                    var total = parseInt(prix.innerHTML);
                    console.log(total);
                } 
					
  
					 else {
                    var total = parseInt(price.innerHTML) + parseInt(prix.innerHTML);
                    console.log(total);
                }
					  document.getElementById('videos').getElementsByClassName('totale')[0].innerHTML = total;
            });
            
            
            prix.addEventListener('DOMSubtreeModified', function() {
					if (isNaN(parseInt(price.innerHTML)) && isNaN(parseInt(prix.innerHTML)))  {
                   var total = '';
					
						 console.log(total);
                }
               else if (isNaN(parseInt(price.innerHTML))) {
                    var total = parseInt(prix.innerHTML);
                    console.log(total);
                } 
					     else if (isNaN(parseInt(prix.innerHTML))) {
                    var total = parseInt(price.innerHTML);
                    console.log(total);
					 } 
					 
				
					 else {
                    var total = parseInt(price.innerHTML) + parseInt(prix.innerHTML);
                    console.log(total);
                }
					  document.getElementById('videos').getElementsByClassName('totale')[0].innerHTML = total;
            });
			

	
				function myFunction(myValue){
  document.getElementById("currentValue").innerHTML = myValue;
  
  var  pricingDirectorywebsite = document.getElementById("pricing-Directorywebsite");
  pricingDirectorywebsite.innerHTML = myValue * 15;
  console.log(pricingDirectorywebsite.innerHTML);
}			 
	

//var Directorywebsit = document.getElementById("Directorywebsite");

//Directorywebsit.addEventListener("click", function() {

var rangeDirectorywebsite = document.getElementById("rangeDirectorywebsite");
var videounits = document.getElementById("rangevideo").value;
var  opt1value = document.getElementById("currentValue");
var  pricingDirectorywebsite = document.getElementById("pricing-Directorywebsite");
let element = document.getElementById("cl");
let boxe = document.getElementById("boxe1");
  if (Directorywebsit.checked) {
	
	element.innerHTML = "Website directory Added <br>";
	rangeDirectorywebsite.style.display = "block";
	rangeDirectorywebsite.setAttribute("value", parseInt(videounits));
	opt1value.innerHTML = videounits;
   pricingDirectorywebsite.innerHTML = videounits * 15;
	console.log(rangeDirectorywebsite.value);
	boxe.style.display = "inline-block" 
	
  } 
  
  else {
  
   element.innerHTML = "Add a Directory website ?";
	rangeDirectorywebsite.style.display = "none";
	rangeDirectorywebsite.setAttribute("value", 0);
	pricingDirectorywebsite.innerHTML = 0;
	boxe.style.display = "none"
		console.log(rangeDirectorywebsite.value);
  }
  
  
}); 

//new RangeSlider(
 /*   '#type', 
var rangeDirectorywebsite = document.getElementById("rangeDirectorywebsite");

rangeDirectorywebsite.addEventListener("click", function() {

var direc = document.getElementById('type').getElementsByClassName('Directorywebsite')[0];
// direc.innerHTML = "Add ' " + rangeDirectorywebsite.value + " ' optins";
	console.log(rangeDirectorywebsite.value);
});
//)
 */ //Directorywebsite box
			

			
//document.getElementById('videos').getElementsByClassName('totale')[0].innerHTML = total;
//console.log(total)
	 

