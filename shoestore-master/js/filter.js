function sortTable(){

for (var i in menShoe){
var Open_table = "<table class=\"men-img\">";
	var open_row = "<tr>";
	var img = "<td id=\"product1\"><img  id=\"shoeName\" src=\"" + menShoe[i].path + "\" width=\"200\" height=\"200\" alt=\"A high end shoe made with the help of Kanye West. The lightweight shoe offers quick agility with it flexable material and lightweight feel.\">";
	 var title ="<p id=\"title\">" + menShoe[i].title + "</p>";
	var prices = "<p id=\"price\">" + menShoe[i].price + "</p>";
	var button = "<button id=\"add1\" onclick=\"add1Button()\"><a href=\"" + menShoe[i].pages+"\">Add to view</a></button>";
	var close_tr = "</tr>";
	var	Close_table= "</table>";
var menTable = Open_table + open_row + img + title + prices + button + close_tr +Close_table ;

   document.write(menTable);
}
}
	
