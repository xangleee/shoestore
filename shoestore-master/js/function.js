

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


   var shoesStorage = name +" " + "Size: " +
                      size + " " +"Quantity: " +
                      quantity+ " "  + "Price: "+ "$"+
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
   
    sList[i]
  document.getElementById("product").innerHTML = sList[i];
  }
  

