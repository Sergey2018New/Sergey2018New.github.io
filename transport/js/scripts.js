$(document).ready(function() {

	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	

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
	
	// Аккордион
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
	
	
	
	/* Инициализация выпадающего списка (плагин selectric) */
	if ($('.select').length){
		$('.select').selectric({
			maxHeight: 56 * 5
		}); 
	}
	
	/* инициализация маски телефона (плагин maskedinput) */
	 $('.phone-mask').mask('+7 (000) 000-00-00');
	 
	 
	/* Вкладки */
	$(document).on('click', '.tab-nav > li', function() {
		var tabId = $(this).attr("data-tab");
		
		$("#" + tabId).siblings().removeClass("active");
		$("#" + tabId).addClass("active");
		
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
	}); 
	  
	 
	/* Выбор radio button */
	$(".calc__select-img img").on("click", function(){
		$(this).closest(".calc__select-item").find('input[type="radio"]').prop("checked", true);
	});
	
	
	
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
