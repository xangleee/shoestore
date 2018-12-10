function saveShoe(){
  var shoes = [];
    
    var prices = document.querySelector("select").value
    var shoe = menShoes[0];


    shoes.push(shoe); 
//store the students array in the browser local storage.
window.localStorage.setItem("store",JSON.stringify(shoes));
}

function saveShoe(){
  var shoes1 = [];
    

    var shoe1 = menShoes[0];


    shoes.push(shoe1); 
//store the students array in the browser local storage.
window.localStorage.setItem("store1",JSON.stringify(shoes1));
}

function addToCartArray(){
  var shoe;

  if (window.localStorage.getItem("shoeList") === null){
    shoe = [];
   }
   else {
    shoe = JSON.parse(window.localStorage.getItem("shoeList"));
   }
   console.log("Hello");

   var name = document.getElementById("shoename").value;
   var size = document.getElementById("shoesize").value;
   var quantity = document.getElementById("quantity").value;
   var price = document.getElementById("prices").value;

   var shoesStorage =  name+ "$"+
                      size+ "$"+
                      quantity+ "$"+
                      price;

    shoe.push(shoesStorage);

    window.localStorage.setItem("shoeList",JSON.stringify(shoe));
}
 

