function validateForm(){
	/*creo todas las variables*/
	var name = $("#name").val();
	var lastName = $("#lastname").val();
	var email = $("#input-email").val();
	var password = $("#input-password").val();
	var selectedValue = $("#mSelect").val();


	if(/^[a-zA-Z()+$]/.test(name)===false){
		return alert("Ingresa tu nombre");
	}
	else if(/^[a-zA-Z()+$]/.test(lastName)===false){
		return alert("Ingresa tu apellido");
	}
	else if((/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email))===false||email===""){
		return alert("Ingresa un email válido")
	}
	else if((password.length >= 6)===false || password === ""){
		return alert("Tu contraseña debe tener al menos 6 caracteres")
	}
	else if(password === "123456" || password==="098765" || password === "password"){
		return alert("Contraseña inválida, elige una distinta")
	}
	else if(selectedValue==="0"){
		return alert("Por favor, elige una alternativa")
	}
	else{
		return alert("gracias por registrarte")
	}

}