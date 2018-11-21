
function getaccount(){
	persons=[];
 	firstInput = document.getElementById("first").value;
	lastInput = document.getElementById("last").value;
	emailInput = document.getElementById("email").value;	
	userInput = document.getElementById("user").value;
	passInput = document.getElementById("pass").value;

if(userInput == "" || passInput==""|| 
	lastInput==""  || emailInput == "" ||
	firstInput=="" ){
	alert("Please enter in the blank field");
	return;
}
if(passInput.length<6 || passInput.length>12){
	alert("Password must be 6 to 12 character");
	return;
}

var str = userInput.slice(0,1);
if (userInput.slice(0,1) == "_" || userInput.slice(0,1) =="@"|| str.match(/[0-9]/g)!=null) {
	alert("should not star with _, @, and Number");
	return
};
	var person= "First Name: " + firstInput +","
				+ " Last Name: " + lastInput + ","
				+ " Email: "+ emailInput + ","
				+ " UserName: "+ userInput + ","
				+ " PassWord: " + passInput;
    
    persons.push(person);
	window.localStorage.setItem("Account",JSON.stringify(persons));
}
