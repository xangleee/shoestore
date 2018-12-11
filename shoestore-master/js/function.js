
function addToCartArray(){
  var shoe= [];
  //store data into the local storage
  if (window.localStorage.getItem("shoeList") == null){
    shoe = [];
   }
   else {
    shoe = JSON.parse(window.localStorage.getItem("shoeList"));
   }
 
   var name = document.getElementById("shoename").title;
   var size = document.getElementById("shoesize").value;
   var quantity = document.getElementById("quantity").value;
   var price = document.getElementById('prices').textContent;
   var shoesStorage = name +"," +
                      size + "," +
                      quantity+ ","+
                      price;+ ","+ total;

    shoe.push(shoesStorage);

    window.localStorage.setItem("shoeList",JSON.stringify(shoe));
}

 /*display in the checkout*/
  var sList = JSON.parse(window.localStorage.getItem("shoeList"));
  var shoeList = "";

  for (var i = 0; i < sList.length; i++)  {
    var token= sList[i].split(",");
    var titles= (token[0]);
    var sizes = " Size: " +(token[1]);
    var quantity = (" Quantity: " + token[2]);
    var prices = (" Price: " + token[3] + "<br>"+ "<br>");
    var all = titles + sizes+ quantity + prices;

    shoeList += all;
   
     //display in local and checkout page
    document.getElementById("product").innerHTML = shoeList;

   
    
  } 
  //calculate total
var total = 0; 
  for (var i in sList){
      var token= sList[i].split(",");
    total += token[2] * token[3];
    var distotal = "Total: " + "$" + total.toFixed(2);
    document.getElementById("total").innerHTML = distotal;
}

  //will clear the display in checkout if user doesn't want thsse anymore.
function Clear(){
   window.localStorage.removeItem("shoeList");
}

function addToCartArray1(){
  var info= [];
  //save all the user info to local storage
    var first = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("adr").value;
    var city = document.getElementById("city").value;        
    var state = document.getElementById("state").value; 
    var amex = document.getElementById("amex").value;        
    var discover = document.getElementById("discover").value;        
    var master = document.getElementById("master").value;        
    var visa = document.getElementById("visa").value;        
    var cardname = document.getElementById("cname").value;     
    var cardnumber = document.getElementById("ccnum").value;     
    var expmonth = document.getElementById("expmonth").value;     
    var expyear = document.getElementById("expyear").value;     
    var cvv = document.getElementById("cvv").value;     
    var infoStorage = first + " "+
                      email + " "+
                      address + " "+ city + " "+
                      state + " "+ amex +  " "+discover +
                      master +  " "+visa +  " "+cardname +" "+ 
                      cardnumber+  " "+ expmonth +" "+
                       expyear +" "+ expyear +" "+ cvv;

    info.push(infoStorage);

    window.localStorage.setItem("CardList",JSON.stringify(info));

}
