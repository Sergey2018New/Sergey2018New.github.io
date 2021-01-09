$(document).ready(function() {

	/* Установка настроек по умолчанию */
	
	$.extend($.validator.messages, {
		required: "Обязательное поле",
		email: "E-mail некорректен"
	});
	$.extend($.validator.messages, {
		required: "Обязательное поле",
		email: "E-mail некорректен"
	});
	
	$.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length >= $(element).attr("data-minlength-numbers");
    },
    " Телефон введен не корректно");

	
	
	/* Валидация формы обратной связи */
	
	if ($("#form_feedback").length){
		var formFeedback = $("#form_feedback");
		formFeedback.validate({
			rules: {
				phone: {
					//digits: true
			  }
			}, 
			messages: {
			  phone: {
				digits: "Поле должно содержать только цифры"
			  }
			},
			highlight: function(element, errorClass) {
			 $(element).closest(".form-box").addClass("error");
			},
			unhighlight: function(element, errorClass) {
			 $(element).closest(".form-box").removeClass("error");
			},
			submitHandler: function(formFeedback) {
				let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				let response = fetch('/application', {
					method: 'POST',
					credentials: "same-origin",
					headers: {
						"X-Requested-With": "XMLHttpRequest",
						"X-CSRF-Token": token
					},
					body: new FormData(formFeedback)
				}).then(function (response) {
					if (response.ok) {
						$("#modal-success-feedback").fancybox().trigger('click');
					}
				});
			}
		});
	}
	
	
	/* Валидация формы входа */
	
	if ($("#form_login").length){
		var formLogin = $("#form_login");
		formLogin.validate({
			rules: {
			  password: {
					//minlength: 6
					//regexpPassword: true
			  }	
			}, 
			messages: {
			  password: {
					required: "Введите пароль"
			  }
			},
			highlight: function(element, errorClass) {
				$(element).closest(".form-box").addClass("error");
			},
			unhighlight: function(element, errorClass) {
				$(element).closest(".form-box").removeClass("error");
			},
			submitHandler: function(formLogin) {
				let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				let response = fetch('/login', {
					method: 'POST',
					credentials: "same-origin",
					headers: {
						"X-Requested-With": "XMLHttpRequest",
						"X-CSRF-Token": token
					},
					body: new FormData(formLogin)
				}).then(function (response) {
					if (response.ok) {
						window.location.href = "/account/lessons";
					} else {
						response.json().then(function (json) {
							for(var error in json.errors) {
								if ($('#login_' + error + '-error').length) {
									$('#login_' + error + '-error').text(json.errors[error][0]);
									$('#login_' + error + '-error').css('display', 'inline');
								} else {
									$('#login_' + error).after('<label id="login_' + error + '-error" class="error" for="login_' + error + '">' + json.errors[error][0] + '</label>');
								}
							}
						});
					}
				});
			}
		});
	}
	
	/* Валидация формы восстановления пароля */
	
	if ($("#form_recovery_password").length){
		var formRecoveryPassword = $("#form_recovery_password");
		formRecoveryPassword.validate({
			rules: {
			  phone: {
					//digits: true
					minlenghtphone : true
			  },	
			  phone_code: {
					digits: true
			  }	
			}, 
			messages: {
			  phone: {
				  //digits: "Поле должно содержать только цифры"
				   minlength: "Введите корректный телефон"
			  },  
			  phone_code: {
				  required: "Введите код",
				  digits: "Поле должно содержать только цифры" 
			  } 
			},
			highlight: function(element, errorClass) {
			 $(element).closest(".form-box").addClass("error");
			},
			unhighlight: function(element, errorClass) {
			 $(element).closest(".form-box").removeClass("error");
			}
		});
	}
	
	/* Переход к вводу код телефона */
	$(document).on("click", "#btn_recovery_send", function(){
		if (formRecoveryPassword.valid()){
			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let response = fetch('/login/reset', {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				},
				body: new FormData(formRecoveryPassword[0])
			}).then(function (response) {
				if (response.ok) {
					console.log(response);
					$(".modal-recovery-password__phone").hide();
					$(".modal-recovery-password__code").show();
				} else {
					console.log(response);
				}
			});
		}
		else{
			formRecoveryPassword.find("input.error:first").focus();
		}
	});
	
	
	/* Валидация формы регистрации */
	
	if ($("#form_registration").length) {
		
		var formRegistration = $("#form_registration");
		
		formRegistration.validate({
			
			rules: {
			   password: {
					minlength: 8,
					//regexpPassword: true
			  },
			  password_confirmation: {
					equalTo : "#register_password"
			  },
			  phone: {
					minlenghtphone : true
			  }
			}, 
			messages: {
			  password: {
				  minlength: "Пароль должен содержать минимум 8 символов"
			  },
			  password_confirmation: {
					equalTo: "Пароли не совпадают"
			  },
			  phone: {
					 minlength: "Введите корректный телефон"
			  }
			},
			highlight: function(element, errorClass) {
			 $(element).closest(".form-box").addClass("error");
			},
			unhighlight: function(element, errorClass) {
			 $(element).closest(".form-box").removeClass("error");
			},
			submitHandler: function(formRegistration) {
				let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				let response = fetch('/register', {
					method: 'POST',
					credentials: "same-origin",
					headers: {
						"X-Requested-With": "XMLHttpRequest",
						"X-CSRF-Token": token
					},
					body: new FormData(formRegistration)
				}).then(function (response) {
					if (response.ok) {
						$('#modal-success-register .modal__text').load('/ #modal-success-register .modal__text', function() {
							$("#modal-success-register").fancybox().trigger('click');
						});
					} else {
						response.json().then(function (json) {
							for(var error in json.errors) {
								if ($('#form_registration #register_' + error + '-error').length) {
									$('#form_registration #register_' + error + '-error').text(json.errors[error][0]);
									$('#form_registration #register_' + error + '-error').css('display', 'inline');
								} else {
									$('#form_registration #register_' + error).after('<label id="register_' + error + '-error" class="error" for="register_' + error + '">' + json.errors[error][0] + '</label>');
								}
							}
						});
					}
				});
			}
		});
		
	}
	
	/* Валидация формы регистрации при покупке */
	
	if ($("#form_registration_from_pay").length) {
		
		var formRegistration = $("#form_registration_from_pay");
		
		formRegistration.validate({
			
			rules: {
			   password: {
					minlength: 8,
					//regexpPassword: true
			  },
			  password_confirmation: {
					equalTo : "#register_password_from_pay"
			  },
			  phone: {
					minlenghtphone : true
			  }
			}, 
			messages: {
			  password: {
				  minlength: "Пароль должен содержать минимум 8 символов"
			  },
			  password_confirmation: {
					equalTo: "Пароли не совпадают"
			  },
			  phone: {
					 minlength: "Введите корректный телефон"
			  }
			},
			highlight: function(element, errorClass) {
			 $(element).closest(".form-box").addClass("error");
			},
			unhighlight: function(element, errorClass) {
			 $(element).closest(".form-box").removeClass("error");
			},
			submitHandler: function(formRegistration) {
				let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				let response = fetch('/register', {
					method: 'POST',
					credentials: "same-origin",
					headers: {
						"X-Requested-With": "XMLHttpRequest",
						"X-CSRF-Token": token
					},
					body: new FormData(formRegistration)
				}).then(function (response) {
					if (response.ok) {
						window.location.href = "/order/pay/products";
					} else {
						response.json().then(function (json) {
							console.log(json);
							for(var error in json.errors) {
								if ($('#form_registration_from_pay #register_' + error + '-error').length) {
									$('#form_registration_from_pay #register_' + error + '-error').text(json.errors[error][0]);
									$('#form_registration_from_pay #register_' + error + '-error').css('display', 'inline');
								} else {
									$('#form_registration_from_pay #register_' + error).after('<label id="register_' + error + '-error" class="error" for="register_' + error + '">' + json.errors[error][0] + '</label>');
								}
							}
						});
					}
				});
			}
		});
		
	}
	
	/* Удаление товара из корзиры */
	$(document).on("click", '.cart-product__remove', function() {
		let _this = $(this);
		let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
		let product_id = _this.parent().data('product-id');
		let product_type = _this.parent().data('product-type');
		let response = fetch('/cart/remove', {
			method: 'POST',
			credentials: "same-origin",
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				"X-CSRF-Token": token
			},
			body: JSON.stringify({product_id:product_id, product_type:product_type})
		}).then(function (response) {
			if (response.ok) {
				$('#modal-cart .modal__content').load('/cart #modal-cart .modal__content .cart', function(){
					if ($("#modal-cart").find(".scrollbar").length){
						var scrollbar = [];
						$("#modal-cart").find(".scrollbar").each(function(item){
							  if ($(this).attr("data-scrollbar") == true){
								  var attrId = $(this).attr("data-scrollbar-id");
								  scrollbar[attrId].update();
								  
							 }
							else{ 
								 $(this).attr("data-scrollbar-id", item);
								  scrollbar[item] = Scrollbar.init(document.querySelectorAll('#modal-cart .scrollbar')[item]);
							} 
						}); 
					}
				});
				$(".catalog__items").find('[data-product-id='+product_id+']').find('.btn-add__text').text('Добавить')
				$(".catalog__items").find('[data-product-id='+product_id+']').removeClass("btn-add--added");
				
				
			}
		});
	});
	
	/* Валидация формы промокода */
	$(document).on("click", '#form_promocode button', function() {
		if ($("#form_promocode").length) {
			var formPromocode = $("#form_promocode");
			formPromocode.validate({
				rules: {
					promocode: {
						required: true
				  }
				}, 
				messages: {
				  promocode: {
					required: "Введите промокод",
				  }
				},
				highlight: function(element, errorClass) {
				 $(element).closest(".form-box").addClass("error");
				},
				unhighlight: function(element, errorClass) {
				 $(element).closest(".form-box").removeClass("error");
				},
				submitHandler: function(formPromocode) {
					let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
					let response = fetch('/cart/promocode', {
						method: 'POST',
						credentials: "same-origin",
						headers: {
							"X-Requested-With": "XMLHttpRequest",
							"X-CSRF-Token": token
						},
						body: new FormData(formPromocode)
					}).then(function (response) {
						if (response.ok) {
							$('#modal-cart .modal__content').load('/cart #modal-cart .modal__content .cart');
						} else {
							$("#form_promocode").find('input#promotional_code').val('');
						}
					});
				}
			});
		};
	});
	/* Валидация формы кэшбэка */
	$(document).on("click", '#form_cashback button', function() {
		if ($("#form_cashback").length) {
			var formCashback = $("#form_cashback");
			formCashback.validate({
				rules: {
					cashback: {
						required: true
				  }
				}, 
				messages: {
				  cashback: {
					required: "Введите сумму",
					max: "Вы ввели больше чем нужно"
				  }
				},
				highlight: function(element, errorClass) {
				 $(element).closest(".form-box").addClass("error");
				},
				unhighlight: function(element, errorClass) {
				 $(element).closest(".form-box").removeClass("error");
				},
				submitHandler: function(formCashback) {
					let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
					let response = fetch('/cart/cashback', {
						method: 'POST',
						credentials: "same-origin",
						headers: {
							"X-Requested-With": "XMLHttpRequest",
							"X-CSRF-Token": token
						},
						body: new FormData(formCashback)
					}).then(function (response) {
						if (response.ok) {
							$('#modal-cart .modal__content').load('/cart #modal-cart .modal__content .cart');
						}
					});
				}
			});
		};
	});
	
});
