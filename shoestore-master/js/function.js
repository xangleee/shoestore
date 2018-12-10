

function addToCartArray(){
  var shoe= [];

  if (window.localStorage.getItem("shoeList") === null){
    shoe = [];
   }
   else {
    shoe = JSON.parse(window.localStorage.getItem("shoeList"));
   }
  
   var name = document.getElementById("shoename").value;
   var size = document.getElementById("shoesize").value;
   var quantity = document.getElementById("quantity").value;
   var price = document.getElementsByTagName("p").value;


   var shoesStorage =  name +" " +
                      size + " " +
                      quantity+ " " + "$"+
                      price;

    shoe.push(shoesStorage);

    window.localStorage.setItem("shoeList",JSON.stringify(shoe));
}

  var sList = JSON.parse(window.localStorage.getItem("shoeList"));

//now you can access all the students using a loop :

// for (var i in sList) {
  for ( var i in sList) {
    var tokens = sList[i]
 
  document.getElementById("product1").innerHTML = tokens;
  }
  

