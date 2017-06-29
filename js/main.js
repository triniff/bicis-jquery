function validateForm(){
	if ($('#name').val() == "" || /^[A-Z]*$/.test($('#name').val()) == false) {
	    $('.name-container').append('<span class="error"> Debe ingresar su nombre </span>');
	}else{
	    	$( ".error" ).remove();
	    }
	if($('#lastname').val() == "" || /^[A-Z]*$/.test($('#lastname').val()) == false){
		 $('.lastname-container').append('<span class="error"> Debe ingresar su apellido </span>');
	}
}