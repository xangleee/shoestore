var inputTitle = "";
/*window.addEventListener("load", new function() {


});
/*
function loadTable() {
  var ptable = "<table>";
  ptable += getThead();
  ptable += getTbody();

  return ptable;
}*/

function getTbody() {
  var tBody = "<tbody>";

  if (inputTitle == "") {

    for (var i in menShoe) {
      tBody += getRow(i);
    }

  } else {
    for (var i in menShoe) {
      if (inputTitle != null && inputTitle == menShoe[i].title) {
        tBody = getRow(i);
        break;
      }
    }
  }

  tBody += "</tbody>";
  alert(tBody);
}
/*
function getRow(index) {
  var tRow = "<tr>";
  tRow += "<td><input type=\"checkbox\" name=\"index[]\" value=\""  + index + "\"/></td>";
  tRow += "<td><img src=\"images/" + menShoe[index].path + "\" alt=\"""</td>";
  tRow += "<td>" + menShoe[index].title  + "</td>";
  tRow += "<td>" + menShoe[index].price + "</td>";
  tRow += "<td>" + paintings[index].infor + "</td>";

  tRow += "</tr>";

  return tRow;
}
function createRow(){
	var rTable="<tr =\"product1\">";
	rTable += "<td>";
	rTable+= "<img src=\"" + menShoe[0].path + "\">";
	rTable += "<p>" + menShoe[0].infor + "</p>";

}
*/