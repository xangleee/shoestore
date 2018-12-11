
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
                      price;+ ","+

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
  }
  
document.getElementById("product").innerHTML = shoeList;
  
function Clear(){
   window.localStorage.removeItem("shoeList");
}
