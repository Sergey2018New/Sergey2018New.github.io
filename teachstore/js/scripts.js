$(document).ready(function() {

	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	
	/* Путь до файла иконок */
	var srcIcons = 'img/icons.svg';
	
	/* Инициализация карусели "Топ уроки" (плагин Owl Carousel) */
	if ($(".carousel-lessons").length){
		$(".carousel-lessons").owlCarousel({
			items: 3,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 30,
			mouseDrag: false,
			responsive:{
				0:{
					//items: 1
				},
				768:{
					//items: 2
				}
			} 
		});
	}
	
	/* Инициализация карусели "Топ подборки" (плагин Owl Carousel) */
	if ($(".carousel-collections").length){
		$(".carousel-collections").owlCarousel({
			items: 2,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 30,
			mouseDrag: false,
			responsive:{
				0:{
					//items: 1
				},
				768:{
					//items: 2
				}
			}
		});
	}
	
	/* Инициализация карусели "Те, кто с нами" (плагин Owl Carousel) */
	if ($(".carousel-reviews").length){
		$(".carousel-reviews").owlCarousel({
			items: 3,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 45, 
			mouseDrag: false,
			responsive:{
				0:{
					//items: 1
				},
				1401:{
					items: 4
				}
			}
		});
	}

	// window resize
	function windowSize(){
		var $width = $(window).width();

		if ($width <= 767){

		}
		else{

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
	
	/* Аккордион */
	
	$(document).on("click", '.faq-item__header', function(){
		
		$(".faq-item").not($(this).closest(".faq-item")).removeClass('active').find(".faq-item__content").slideUp();
		
		$(this).closest(".faq-item").toggleClass('active');
		
		$(this).next().slideToggle();
	});  
	
	/* Вкладки */
	
	$(document).on('click', '.tab-nav > li', function() {
		var tabId = $(this).attr("data-tab-id");
		
		$("#" + tabId).siblings().removeClass("active");
		$("#" + tabId).addClass("active");
		 
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
	});
	
	/* Навигация по странице */
	
	$(document).on("click", 'a[data-page-nav]', function(e){
		e.preventDefault();
		var href = $(this).attr("href"),
			 position = $(href).offset().top;
			 
		position -= $(".header").innerHeight(); 
		
		$("html, body").animate({scrollTop: position}, 600); 
		
	});
	
	

	// клик по кнопке "вверх"
	/*
	$("#scrollup").click(function() {
	   $("html, body").animate({scrollTop: 0}, 800);
	})
	*/
	

	
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
  $('.mask-phone').mask('+7 (999) 999-99-99');
	 
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
	
	/* Кнопка "Добавить" */
	$(document).on('click', ".btn-add", function() {
		$(this).addClass("btn-add--added");
		$(this).find(".btn-add__text").text("Добавлено");
	}); 
	
});
