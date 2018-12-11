  var inputTitle = "";
  var sList = JSON.parse(window.localStorage.getItem("shoeList"));
for (var i in sList){
      var token= sList[i].split(",");
    var titles= token[0];
    document.getElementById("display-table").innerHTML = distotal;
}
