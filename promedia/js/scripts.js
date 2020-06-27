$(document).ready(function() {
console.log($("body").height());
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
/*
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
	*/

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
	
	/* Открытие / закрытие меню */
	
	$('.header__btn-toggle').on('click', function() {
		$("body").addClass("active-menu");
	});
	$('.mobile-menu__btn-close').on('click', function() {
		$("body").removeClass("active-menu");
	});
	
});
