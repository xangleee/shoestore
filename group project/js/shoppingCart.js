var size = filenames.length;

for (var i = 0; i < size; i++) {

		outputCartRow(filenames[i], titles[i], quantities[i], prices[i],
		 calculateTotal(prices[i], quantities[i]));

}
/* define functions here */

/*Create function call CalaculateTOtal()*/
function calculateTotal(prices,quantities){
	return prices * quantities;
}

function outputCartRow(filenames,titles,quantities,prices,total)
{		//copy the html document and turn into javascript
		var open_tr= "<tr>";
    	var img_td = "<td><img src=\"images/" + filenames + "\"></td>";
    	var title_td =	"<td>" + titles +  "</td>";
    	var quanity_td = "<td class=\"center\">"+  quantities + "</td>";
    	var prices_td =  "<td class=\"right\"> $"+ prices.toFixed(2) + "</td>";
    	var total_td = "<td class=\"right\"> $" + total.toFixed(2) + "</td>";
    	var close_tr = "</tr>";

    	var row = open_tr + img_td + title_td + quanity_td + prices_td + total_td + close_tr;
    	document.write(row); /*to write the whole row*/
}

function output(amount){
	document.write("$" + amount.toFixed(2));
}
function calculateSubtotal(){
	var subtotal = 0; 
	for (var i = 0; i < quantities.length; i++){
		subtotal += calculateTotal(quantities[i], prices[i]);
	}
	return subtotal;
}
function calculateShipping(){
	if (calculateSubtotal ()> 1000) {
		return 0;
	}
	else{
		return  40;
	};
}

function calaculateTax() {
	var tax = calculateSubtotal() * 0.1;
	return tax;
}
function calaculateGrandTotal(){
	var grandTotal = calculateSubtotal() + calculateShipping() + calaculateTax();
	return grandTotal;
}



