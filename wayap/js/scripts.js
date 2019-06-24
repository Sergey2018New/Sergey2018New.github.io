$(document).ready(function() {

	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
			 
	 // Путь до файла иконок
	var srcIcons = 'img/icons.svg',
		 arrow = '<svg class="icon icon-arrow"><use xlink:href="' + srcIcons + '#icon-arrow"/></svg>';
	
	// Инициализация каруселей (плагин Owl Carousel)

	if ($(".sites__carousel").length){
		$(".sites__carousel").owlCarousel({
			items: 2,
			nav:false,
			loop: true,
			
			dots: true,
			margin: 10,
			autoWidth: true,
			responsive:{
				481:{
					margin: 15
				},
				576:{
					autoWidth: false,
					margin: 20
				},
				768:{
					items: 3,
					loop: false,
					autoWidth: false,
					mouseDrag:false,
					margin: 30
				},
				1200:{
					items: 3,
					loop: false,
					autoWidth: false,
					margin: 44
				}
			}
		});
	}

	if ($(".development__slider").length){
		$(".development__slider").owlCarousel({
			items: 1,
			nav:false,
			loop: true,
			mouseDrag:false,
			dots: true,
			margin: 20,
			autoWidth: true,
			responsive:{
				481:{
					autoWidth: false
				}
			}
		});
	}
	
	if ($(".calculator__modules").length){
		$(".calculator__modules").owlCarousel({
			items: 1,
			nav:false,
			loop: false,
			mouseDrag:false,
			
			margin: 15,
			responsive:{
				576:{
					items: 2,
					nav:true,
					navText: [arrow, arrow]
				},
				768:{
					//items: 1
				}
			}
		});
	}
	
	
	
	/* Плагин Bootstrap-select */
	$('.select').selectpicker({
		dropupAuto: false
	});

	// window resize
	function windowSize(){
		var $width = $(window).width();

		if ($width <= 575){
			if ($(".services__items").not(".owl-loaded").length){
				$(".services__items").owlCarousel({
					items: 1,
					nav:false,
					loop: true,
					mouseDrag:false,
					margin: 10,
					autoWidth: true,
					responsive:{
						481:{
							margin: 15
						}
					}
				});
			}
		}
		else{
			if ($(".services__items.owl-loaded").length){
				$(".services__items").trigger('destroy.owl.carousel');
			}
		}
	}

	windowSize();
	
	$(window).on('resize', windowSize);


	// window scroll
	/*
	$(window).on("load scroll", function(){
		var windowScroll = $(window).scrollTop(),
			blockOffset = $(".header__block").offset().top;
			
		if (windowScroll >= blockOffset){
			$(".nav").addClass("fixed");
		}
		else{
			$(".nav").removeClass("fixed");
		}
	});
	*/
	
	// Открытие / закрытие меню
	/* 
	$('.btn-toggle').on('click', function() {
		$("body").toggleClass("open-menu");
	});
	*/
	
	// Аккордеон
	/*
	$('.accordion__header').click(function(){
		$('.accordion__content').slideUp();
		$('.accordion__header').removeClass('active');
		   if ($(this).next().is(":visible")){
			   $(this).next().slideUp();
			   $(this).removeClass('active');
		   } else {
		   $(this).next().slideToggle();
		   $(this).toggleClass('active');
		   }
		  return false;
	});
	*/

	// клик по кнопке "вверх"
	/*
	$("#scrollup").click(function() {
	   $("html, body").animate({scrollTop: 0}, 800);
	})
	*/

	/* Навигация */
	
	$(".menu__link").on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("href"),
			 offset = $(id).offset().top - $(".header").height();
	   $("html, body").animate({scrollTop: offset}, 600);
	});

	/* Клик */
	
	$(".process-item__content").on("click", function(e) {
		var index = $(this).closest(".process-item").index() + 1;
		
		$(this).closest(".process-item").siblings().removeClass("active");
		$(this).closest(".process-item").addClass("active");
	
		
		$(".process-headline").removeClass("active");
		$(".process-headline--" + index).addClass("active");
	})

	
	// click document
	/*
	$(document).on('click', function(e) {
	
		var menu = '.menu',
			 menuBtnToggle = '.btn-toggle';

		if (!$(menu).is(e.target)
		&& $(e.target).closest(menu).length === 0 
		&& !$(menuBtnToggle).is(e.target)
		&& $(e.target).closest(menuBtnToggle).length === 0){
			$("body").removeClass("menu-open");
			$(menu).slideUp(300, function(){
				if($(menu).css('display') === 'none') menu.removeAttr("style");
			});
		}
		
	}); 
	*/
	
	/* инициализация маски телефона (плагин maskedinput) */
   $('.phone-mask').mask('+7 (000) 000-00-00');
	
	// фильтрация ввода в полях ввода
	/*
	$('.input-count').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;	
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;
	});
	*/
	
});
