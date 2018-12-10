

function addToCartArray(){
  var shoe= [];

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


   var shoesStorage =  name +" " +
                      size + " " +
                      quantity+ " " + "$"+
                      price;

    shoe.push(shoesStorage);

    window.localStorage.setItem("shoeList",JSON.stringify(shoe));
}

                  /*************************
                  **display in the checkout*
                  **************************/
  var sList = JSON.parse(window.localStorage.getItem("shoeList"));

// for (var i in sList) {
  for ( var i in sList) {
   
    var t = sList[i].name;
    var s = " Size:" + sList[i].size;
    var q = " Quantity:" + sList[i].quantity;
    var p = " Price:" + sList[i].price;
    var products = t+ s+ q + p;
  document.getElementById("product").innerHTML = products;
  }
  

