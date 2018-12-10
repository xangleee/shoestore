function myFunction() {
  // Declare variables

  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var titles = document.getElementById("title"); 
  var  p = titles.getElementsByTagName("p");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < p.length; i++) {
    var a = p[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}


