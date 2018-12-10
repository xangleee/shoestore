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