
window.addEventListener("load", new function() {
    document.getElementById('display-table').innerHTML = loadTable();

    addListeners();
});

function addListeners() {
  document.getElementById('shoe').addEventListener("click", function(e){
    menShoe = document.getElementById('shoe').value;
    menShoe = menShoe.trim();
    e.preventDefault();
    document.getElementById('display-table').innerHTML = loadTable();

  });
}

function loadTable() {
  var ptable = "<table>";
  ptable += getTbody();

  return ptable;
}


function getTbody() {
  var tBody = "<tbody>";

  if (inputTitle == "") {

    for (var i in menShoes) {
      tBody += getRow(i);
    }

  } else {
    for (var i in paintings) {
      if (inputTitle != null && inputTitle == menShoes[i].title) {
        tBody = getRow(i);
        break;
      }
    }
  }

  tBody += "</tbody>";

  return tBody;
}

function getRow(index) {
  var tRow = "<tr>";
  tRow += "<td><input type=\"checkbox\" name=\"index[]\" value=\""  + index + "\"/></td>";
  tRow += "<td><img src=\"" + menShoes[index].path + "\" alt=\"" + menShoes[index].infor +  "\" class=\"thumb\"/></td>";
  tRow += "<td><em>" + menShoes[index].title  + "</em></td>";
  tRow += "<td>" + menShoes[index].price + "</td>";

  tRow += "</tr>";

  return tRow;
}
