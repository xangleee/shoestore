
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
	alert("Please fill out everything!");
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

	var person= firstInput +","
				+ lastInput + ","
				+ emailInput + ","
				+ userInput + ","
				+ passInput;

   persons.push(person);


	var storage = window.localStorage.getItem("accountList");
    if ( storage !=null && storage.length>0){
      var arr = JSON.parse(storage);
      arr.push(persons[0]);

      window.localStorage.setItem("accountList", JSON.stringify(arr));

    }else{
     	window.localStorage.setItem("accountList",JSON.stringify(persons));
}

}
