$(document).ready(function() {

	/* Установка сообщений по умолчанию */
	
	$.extend($.validator.messages, {
		required: "Обязательное поле",
		email: "E-mail некорректен"
	});
	
	/* Валидация формы контакты */
/*
	if ($("#form_contacts").length){
		var formContacts = $("#form_contacts");
		formContacts.validate({
			
			submitHandler: function(form) {
				$.fancybox.open({
					src  : '#modal-success',
					type : 'inline',
					opts : {
						touch : false
					}
				});
			}
		});
	}
	*/
	 
	var formContacts = document.querySelector( '.contacts__form .wpcf7' );
	if (formContacts){
		formContacts.addEventListener( 'wpcf7mailsent', function( event ) {
			$.fancybox.open({
						src  : '#modal-success',
						type : 'inline',
						opts : {
							touch : false
						}
					});  
		}, false );
	}
	
	
	
});
