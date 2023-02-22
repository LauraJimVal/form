
function validacion() {
	//leemos las variables del formulario
	var nombre=document.getElementById("nombre").value;
	var apellido1=document.getElementById("primerApellido").value;
	var apellido2=document.getElementById("segundoApellido").value;
	var telefono=document.getElementById("telefono").value;
	var mail=document.getElementById("email").value;
	var privacidad=document.getElementById("privacidad");
	var errores=document.getElementById("errores");
	//Expresiones regulares
	var regExpTelefono = /^([0-9]+){9}$/;
	var regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	
	// condiciones

	if (nombre=="") {
		document.getElementById("errorNombre").innerHTML+="<br>Error, el nombre debe rellenarse";
		document.getElementById("errorNombre").style.color = "red";
		return false;
	}else{
		document.getElementById("errorNombre").innerHTML = "";
	}
	
	if (apellido1=="" ){
		document.getElementById("errorApellido").innerHTML +="<br>Error, el apellido1 debe rellenarse";
		document.getElementById("errorApellido").style.color = "red";
		return false;
	}else{
		document.getElementById("errorApellido").innerHTML = "";
	}
	
	if(apellido2=="" ){
		document.getElementById("errorApellido2").innerHTML+="<br>Error, el apellido2 debe rellenarse";
		document.getElementById("errorApellido2").style.color = "red";
		return false;
	}else{
		document.getElementById("errorApellido2").innerHTML ="";
	}
	
	
	if (!regExpTelefono.test(telefono)) {
		document.getElementById("errorTelefono").innerHTML+="<br>Error, el telefono debe contener 9 cifras"
		document.getElementById("errorTelefono").style.color = "red";
		return false;
	}else{
		document.getElementById("errorTelefono").innerHTML="";
	}

	if (mail!=null && mail.length!=0 && !regExpEmail.test(mail)) {
		document.getElementById("errorEmail").innerHTML+="<br>El mail no tiene el formato correcto";
		document.getElementById("errorEmail").style.color = "red";
		return false;
	} else{
		document.getElementById("errorEmail").innerHTML ="";
	}

	if (!privacidad.checked) {
		errores.innerHTML+="<br>No has indicado la privacidad";
		errores.style.color = "red";
		return false;
	}

	return true;
}

// submit del formulario
document.getElementById("formulario").onsubmit = function() {
 return validacion();
}

