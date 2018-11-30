

// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;
//validate if for user and pass input
if(username == "" || password ==""){
	alert("Please enter in Username and Password");
	return;
}

//get user and pass from local storage and compare with user input
var AList = JSON.parse(window.localStorage.getItem("accountList"));

//loop to get user and pass from local storage
for ( var i in AList) {
		var t = AList[i].split(",");
		user = (t[3]);
		pass = (t[4]);
		//compare user and pass from local to user input
		if ( username == user && password == pass){
		
		 // Redirecting to other page.
		 window.close("login.html");
		 window.alert(user +" successful login");
		window.open("home.html");
		

		return false;
			}
		else{
		//stated if pass and user doesn't match the local storage
		alert("You have enter wrong password or username");

		// Disabling fields after wrong input for username and password.
		if( attempt == 0){
			document.getElementById("user").disabled = true;
			document.getElementById("pass").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
}
}
}	
	}
