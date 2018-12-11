function sortTable(){
for (var i in menShoe){
var Open_table = "<table class=\"men-img\">";
	var open_row = "<tr>";
	var img = "<td id=\"product1\"><img  id=\"shoeName\" src=\"images/shoe/menShoe/800502_01.jpg\" width=\"200\" height=\"200\" alt=\"A high end shoe made with the help of Kanye West. The lightweight shoe offers quick agility with it flexable material and lightweight feel.\">";
	 var title ="<p id=\"title\">YEEZY BOOST V2 ZEBRA</p>";
	var prices = "<p id=\"price\">$50.00 </p>";
	var button = "<button id=\"add1\" onclick=\"add1Button()\"><a href=\"view.html\">Add to view</a></button>";
	var close_tr = "</tr>";
	var	Close_table= "</table>";
var menTable = Open_table + open_row + img + title + prices + button + close_tr +Close_table ;
}
document.getElementById("display-table").innerHTML = menTable;
}
