var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;

if(username == "" || password ==""){
	alert("Please enter in Username and Password");
	return;
}


var AList = JSON.parse(window.localStorage.getItem("Account"));

for ( var i in sList) {
		var t = AList[i].split(",");
		user = (t[4]);
		pass = (t[5]);
		if ( username == user && password == pass){
		window.alert("Login successfully");
		window.location = "success.html"; // Redirecting to other page.
		return false;
			}
			else{
		attempt --;// Decrementing by one.
		alert("You have left "+ attempt +" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
}
}
}	
	}

/*


*/