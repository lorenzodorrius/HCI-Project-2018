function validate(){
		var email = document.getElementById('email').value;
		var firstname = document.getElementById('firstname').value;
		var lastname = document.getElementById('lastname').value;
		var address = document.getElementById('address').value;
		var city = document.getElementById('city').value;
		var clothes = document.getElementById('clothes').value;

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(email == '' || firstname == '' || lastname == '' || address == '' || city == '' || clothes == ''){
			error.innerHTML = "All fields must be filled";
			return false;
		}
		
		else if(!re.test(String(email).toLowerCase())){
			error.innerHTML = "invalid email";
			return false;
		}

		else if(firstname.length() < 3){
			error.innerHTML = "Your First Name is too short!";
			return false;
		}

		else if(lastname.length() < 3){
			error.innerHTML = "Your Last Name is too short!";
			return false;
		}

		else if(!document.getElementById("terms").checked){
			error.innerHTML = "You must agree the terms and conditions!";	
			return false;
		}
		else{
			return true;
		}

}	