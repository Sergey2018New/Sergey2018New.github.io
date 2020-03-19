$(document).ready(function() {

	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	
	// Путь до файла иконок
	var srcIcons = 'img/icons.svg';
	
	// Инициализация карусели (плагин Owl Carousel)

	var $carousel = $('.carousel');
	if ($carousel.length){
		$carousel.owlCarousel({
			items: 2,
			nav:true,
			navText: ['prev', 'next'],
			loop: true,
			dots: false,
			margin: 20,
			responsive:{
				0:{
					items: 1
				},
				768:{
					items: 2
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
	
	$(document).on('click', '.tab-menu > li', function() {
		var tabId = $(this).attr("data-tab");
		
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
	

	/* Таймер */
	
	$.countdown.regionalOptions.ru = {
		labels: ['Лет','Месяцев','Недель','Дней','Часов','Минут','Секунд'],
		labels1: ['Год','Месяц','Неделя','День','Час','Минута','Секунда'],
		labels2: ['Года','Месяца','Недели','Дня','Часа','Минуты','Секунды'],
		compactLabels: ['л','м','н','д'],
		compactLabels1: ['г','м','н','д'],
		whichLabels: function(amount) {
			var units = amount % 10;
			var tens = Math.floor((amount % 100) / 10);
			return (amount === 1 ? 1 : (units >= 2 && units <= 4 && tens !== 1 ? 2 :
				(units === 1 && tens !== 1 ? 1 : 0)));
		},
		digits: ['0','1','2','3','4','5','6','7','8','9'],
		timeSeparator: ':',
		isRTL: false
	};
	$.countdown.setDefaults($.countdown.regionalOptions.ru);
	
	$('.countdown').each(function(){
		var dateText = $(this).data("date"),
			 currentDate = new Date(),
			 endDate = new Date(dateText);
		
		endDate.setHours(0); 
		
		$(this).countdown({
			until: $.countdown.UTCDate(+3, endDate), 
			format: 'DHM'
		});
	});

	
	/* Parallax */
	var parallax1 = document.getElementById('parallax-1');
	
	var parallaxInstance1 = new Parallax(parallax1, {
	  //relativeInput: true
	}); 
	
	$('.animation').viewportChecker({
		classToAdd: 'visible animated',
		offset: 70
	});
	
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
	
	// инициализация маски телефона (плагин maskedinput)
	// $('.phone-mask').mask('+7 (000) 000-00-00');
	
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
