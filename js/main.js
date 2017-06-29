function validateForm(){
	if ($('#name').val() == "" || /^[A-Z]*$/.test($('#name').val()) == false) {
	    $('.name-container').append('<span class="error"> Debe ingresar su nombre en mayúscula </span>');
	}/*else{
	    	$( ".error" ).remove();
	    }*/
	else if($('#lastname').val() == "" || /^[A-Z]*$/.test($('#lastname').val()) == false){
		$('.lastname-container').append('<span class="error"> Debe ingresar su apellido en mayúscula </span>');
	}
	else if($('#input-email').val() == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#input-email').val()) == false){
		$('.email-container').append('<span class="error"> Debe ingresar un correo válido </span>');
	}
	else if ($('#input-password').val() == "" || /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test($('#input-password').val()) == false || $('#input-password').val() == 123456 || $('#input-password').val() == 098765) {
		$('.form-group:first').append('<span class="error"> Mínimo 6 caracteres </span>')
	}
	else if ($('select').val() == 0) {
		$('.form-group:last').append('<span class="error"> Debes seleccionar un tipo de bici </span>')
	}
}