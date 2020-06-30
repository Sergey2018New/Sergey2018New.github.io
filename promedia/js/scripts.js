$(document).ready(function() {
console.log($("body").width());
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
	
	
	/* Открытие / закрытие меню */
	
	function changeWidth (){
		var heightContent = $(".content").height();
			widthContent = heightContent * 16/9;
		$('.content').width(widthContent);
		
		//console.log();
		$(".menu").css("font-size", (heightContent * 0.023).toFixed(2) + "px");
		$(".home__title h1").css("font-size", (heightContent * 0.092).toFixed(2) + "px");
	}
	
	changeWidth();
	$(window).on("resize", function(){
		changeWidth();
	});
	$(window).on("load resize", function(){
		var heightBg = $(".customers__bg").height();
		$(".customers__bg").width(heightBg * 2986/801);
		
	});
	
});
