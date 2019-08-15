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
		  iconArrow = '<svg class="icon icon-arrow"><use xlink:href="' + srcIcons + '#icon-arrow"/></svg>';
	
	// Инициализация селекта (плагин Selectric) 
	$('select').selectric();
	
	// Инициализация карусели (плагин Owl Carousel)

	if ($(".about__gallery").length){
		$(".about__gallery").owlCarousel({
			items: 2, 
			nav:true,
			navText: [iconArrow, iconArrow],
			loop: false,
			dots: false,
			margin: 1,
			responsive:{
				450:{
					items: 3
				},
				576:{
					items: 4
				},
				768:{
					items: 5
				}
			}
		});
	}
	 
   // плагин jquery ui spinner
	 $( ".spinner" ).each(function(){
		 var $this = $(this);
		 $(this).spinner({
			 numberFormat: "n",
			 min: $this.attr("data-min"),
			 max: $this.attr("data-max")
		 });
	 });
	 
	 // плагин Fancybox
	 
	 function beforeShow(){
		 $(".header.fixed").addClass("compensate-for-scrollbar");
	 }
	 
	 $('[data-fancybox]').fancybox({
		 animationEffect: "fade",
		 backFocus : false,
		 hash: false,
		  beforeShow : function(){
			 beforeShow();
		 },
		 btnTpl: {
			 smallBtn:
			'<button type="button" data-fancybox-close class="btn-close fancybox-button fancybox-close-small" title="Закрыть">' +
			'<svg class="icon icon-close"><use xlink:href="' + srcIcons + '#icon-close"/></svg>' + 
			"</button>"
		 }
	});
	
	
	// плагин Parallax
	
	var parallax1 = document.getElementById('parallax-1'),
		 parallax2 = document.getElementById('parallax-2'),
		 parallax3 = document.getElementById('parallax-3');
		 
	var parallaxInstance1 = new Parallax(parallax1, {
	  //relativeInput: true
	});
	var parallaxInstance2 = new Parallax(parallax2, {
	  //relativeInput: true
	});
	var parallaxInstance3 = new Parallax(parallax3, {
	  //relativeInput: true
	});
	
	// window resize
	function windowSize(){
		var $width = $(window).width();

		if ($width <= 767){

		}
		else{

		}
			if ($('.calculation__colors-items').length){
				if ($width <= 767){
					if (!$('.calculation__colors-items.owl-loaded').length){
						$('.calculation__colors-items').owlCarousel({
							items: 3,
							nav: false,
							loop: true,
							dots: false,
							margin:10,
							nav:true,
							navText: [iconArrow, iconArrow],
							responsive:{
								375:{
									 items: 4
								},
								441:{
									 items: 5
								},
								576:{
									 items: 7
								}
							}
						});
					}
				}
				else{
					if ($('.calculation__colors-items.owl-loaded').length){
						$('.calculation__colors-items').trigger('destroy.owl.carousel');
					}
				}
			}
	}

	windowSize();
	
	$(window).on('resize', windowSize);


	// window scroll
	
	$(window).on("load scroll", function(){
		var windowScroll = $(window).scrollTop(),
			windowHeight = $(window).height(),
			truckOffset = $(".truck__auto").offset().top,
			truckHeight = $(".truck").innerHeight(),
			truckOffsetBottom = truckOffset + truckHeight;
		
	
		if (windowScroll >= 220){
			$(".header").addClass("fixed");
		}
		else{
			$(".header").removeClass("fixed");
		}
	
		
		if ((windowScroll >= (truckOffset - windowHeight)) && (windowScroll <= truckOffsetBottom)){
			var offsetPercent = 100 - (truckOffsetBottom - windowScroll) / (truckHeight + windowHeight) * 100;
			console.log(offsetPercent);
			
			$(".step-item").removeClass("active");
			if (offsetPercent >= 20){
				$(".step-item--1").addClass("active");
			}
			if (offsetPercent >= 40){
				$(".step-item--2").addClass("active");
			}
			if (offsetPercent >= 60){
				$(".step-item--3").addClass("active");
			}
			
			$(".truck__auto").css("left", (offsetPercent * 0.5) + "%");
			$(".truck__wheel").css("transform", "rotate(" + (offsetPercent * 4.5) + "deg)");
		}
		else{
			
		}
	});
	
	
	// Открытие / закрытие меню
	/* 
	$('.btn-toggle').on('click', function() {
		$("body").toggleClass("open-menu");
	});
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
	
	// навигация
	
	$(".menu__link").on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("href"),
			 navBlock = $(id).offset().top - 60;
		
	   $("html, body").animate({scrollTop: navBlock}, 600);
	})
	
	/* Выбор варианта цвета */
	
	$(".color-item").on("click", function(){
		var $width = $(window).width(),
			 index = $(this).attr("data-item"),
			 offsetInfo = $(".calculation__colors").offset().top;
		
		$(".color-item").removeClass("active");
		$(this).addClass("active"); 
		
		$(".item-info").removeClass("active");
		$('.item-info[data-info="' + index + '"]').addClass("active");
		
		if ($width <= 767){
			$("html, body").animate({scrollTop: offsetInfo - 100}, 600);
		}
		
	});
	
	/* Установка правил и сообщений валидации */
	jQuery.validator.setDefaults({
		messages: {
			 name: {
				 required: "Введите имя"
			 },
			 phone: {
				 required: "Введите телефон",
				 minlength: "Не верно введен телефон",
			 }
		 },
		 
		 rules: {
			 phone: {
				 required: true,
				 minlength: 18
			 }
		 }
		 
	});
	
	/* Валидация форм */
	$(".form-validation").each(function(){
		 var $this = $(this);
		 $this.validate({
			 submitHandler: function(form) {
				 
				if ($this.attr("id") == "form-request"){
					$this.find(".form-control").val("");
					$this.closest(".modal").addClass("modal--success"); 
				}
				
			}
		 });
	 }); 
	
	
	// инициализация маски телефона (плагин maskedinput)
	 $('.phone-mask').mask('+7 (000) 000-00-00');
	
	/* Фильтрация ввода в полях */
	
	$('.spinner').on("input", function (e){
		$(this).val($(this).val().replace(/[-\.;":'a-zA-Zа-яА-Я]/, '')); 
	}); 
	
});
