$(document).ready(function() {

	/* инициализация подержки SVG в IE (плагин svg4everybody) */
	svg4everybody();
	
	/* Добавление классов устройства и браузера в документе (плагин Detect.js) */
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	
	/* Путь до файла иконок 
	var srcIcons = 'img/icons.svg';
	*/
	
	/* Инициализация скроллбара (плагин jScrollPane) */
	if ($('.scroll-pane').length){
		//$('.scroll-pane').jScrollPane();
	}
	
	 
	 
	 if ($(".scrollbar").length){
		 var scrollbar = Scrollbar.init(document.querySelector('.scrollbar'));
	 }
	
	
	/* Инициализация модальных окон (плагин fancybox) */
	
	$.fancybox.defaults.closeExisting = true;
	$.fancybox.defaults.animationEffect = "fade";
	$.fancybox.defaults.animationDuration = 300;
	$.fancybox.defaults.touch = false;
	
	function beforeShowFancybox (){
		$(".header, .nav-cart").addClass("compensate-for-scrollbar");
	}
	
	function afterShowFancybox (){
		/* Инициализация скроллбара (плагин jScrollPane) */
		$('.scroll-pane').jScrollPane();
	}
	
	function afterCloseFancybox (){
		$(".header, .nav-cart").removeClass("compensate-for-scrollbar");
	}
	
	$("[data-fancybox]").fancybox({
		//s backFocus: false,
		beforeShow : function( instance, current ) {
			beforeShowFancybox();
		},
		 afterClose : function( instance, current ) {
			afterCloseFancybox();
		}
		 
	}); 
	
	$('[data-fancybox-cart]').fancybox({
		baseClass: "fancybox-cart",
		 transitionDuration: 400,
		animationEffect: "slide-right", 
		beforeShow : function( instance, current ) {
			beforeShowFancybox();
		},
		afterShow : function( instance, current ) {
			scrollbar.update();
		},
		 afterClose : function( instance, current ) {
			afterCloseFancybox();
		}
	});
	
	
	/* Инициализация всплывающих подсказкок (плагин Tooltipster) */
	
	$('[data-tooltip]').each(function(){
		var $this = $(this),
			 dataTheme = $this.attr("data-tooltip-theme"),
			 dataHTML = $this.attr("data-tooltip-html"),
			 dataTrigger = $this.attr("data-tooltip-trigger");
			 
		
		if (dataTheme == undefined){
			dataTheme = "";
		}
		
		if (dataTrigger == undefined){
			dataTrigger = "hover";
		}
		
		if (dataHTML != undefined){
			$this.tooltipster({
				trigger: dataTrigger,
				theme: dataTheme,
				maxWidth: 192,
				content: dataHTML,
				contentAsHTML: true,
				side: ['top', 'bottom', 'right', 'left']
			});
		}
		else{
			$this.tooltipster({
				trigger: dataTrigger,
				theme: dataTheme,
				maxWidth: 192,
				side: ['top', 'bottom', 'right', 'left']
			}); 
		}
		 
	});
	
	
	/* Инициализация масок (плагин maskedinput) */
   $('.mask-phone').mask('+7 (999) 999-99-99');
   $('.mask-date').mask('99/99/9999',{autoclear: false});
	
	
	
	
	/* Инициализация карусели "Топ уроки" (плагин Owl Carousel) */
	if ($(".carousel-lessons").length){
		$(".carousel-lessons").owlCarousel({
			items: 1,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 20,
			mouseDrag: false,
			responsive:{ 
				651:{
					items: 2
				},
				768:{
					items: 2,
					margin: 30
				},
				992:{
					items: 3,
					margin: 30
				}
			} 
		});
	}
	
	/* Инициализация карусели "Топ подборки" (плагин Owl Carousel) */
	if ($(".carousel-collections").length){
		$(".carousel-collections").owlCarousel({
			items: 1,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 20,
			mouseDrag: false,
			responsive:{
				651:{
					items: 2
				},
				768:{
					items: 2,
					margin: 30
				}
			}
		});
	}
	
	/* Инициализация карусели "Те, кто с нами" (плагин Owl Carousel) */
	if ($(".carousel-reviews").length){
		$(".carousel-reviews").owlCarousel({
			items: 1,
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
					items: 2,
				},
				1051:{
					items: 3,
					margin: 45
				},
				1401:{
					items: 4,
					margin: 45
				}
			}
		});
	}
	

	// window resize
	function windowSize(){
		var $width = $(window).width();

		if ($width > 480){
			$(".catalog-menu__list").removeAttr("style");
			$(".catalog-menu__title").removeClass("active");
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
		var $this = $(this),
			 tabId = $this.attr("data-tab-id");
		
		$this.siblings().removeClass("active");
		$this.addClass("active");
		
		$("#" + tabId).siblings().removeClass("active");
		$("#" + tabId).addClass("active");
		
		
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
	
	
	/* Планшетное/мобильное меню */
	
	$(".mobile-nav__catalog-content").append($(".header .catalog-menu").clone());
	$(".mobile-nav__menu").append($(".header .menu").clone());
	
	$(document).on("click", ".header__btn-menu", function(){
		$(".mobile-nav").addClass("active");
		$("body").addClass("active-menu");
	});
	
	$(document).on("click", ".mobile-nav__btn--close", function(){
		$(this).closest(".mobile-nav").removeClass("active");
		$("body").removeClass("active-menu");
	}) 
	
	$(document).on("click", ".mobile-nav__catalog-btn", function(){
		$(this).closest(".mobile-nav").addClass("mobile-nav--catalog");
		$(this).next(".mobile-nav__catalog-content").scrollTop(0);
	});
	
	$(document).on("click", ".mobile-nav__btn--back", function(){
		$(this).closest(".mobile-nav").removeClass("mobile-nav--catalog");
	})
	
	$(document).on("click", ".mobile-nav .catalog-menu__title", function(){
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	})
	
	
	/* "Бегущая строка" */
	
	var ticker = $(".ticker"),
		 tickerContent = $(".ticker__content"),
		 tickerText = $(".ticker__text");
	
	for (var i = 0; i < ticker.attr("data-number"); i++){
		tickerContent.append(tickerText.clone());
	}
	tickerText.remove();
	
	ticker.addClass("ticker--loaded");
	
	
	/* Кнопка "Добавить" */
	
	$(document).on('click', ".btn-add", function() {
		$(this).addClass("btn-add--added");
		$(this).find(".btn-add__text").text("Добавлено");
		setTimeout(function(){
			$.fancybox.open({
				src  : '#modal-added',
				type : 'inline',
				opts : {
					beforeShow : function( instance, current ) {
						beforeShowFancybox();
					},
					 afterClose : function( instance, current ) {
						afterCloseFancybox();
					}
				}
			});
		}, 300);
		
	}); 
	
	
	/* Показать пароль */
	
	$(document).on('click', ".form-box__icon", function() {
		if ($(this).closest(".form-box--password").length){
			var $formBox = $(this).closest(".form-box--password");
			
			if ($formBox.hasClass("show")){
				 $formBox.find(".form-box__input").attr("type", "password");
			}
			else{
				 $formBox.find(".form-box__input").attr("type", "text"); 
			}
			
			$formBox.toggleClass("show");
		}
	});

	
	/* Открытие модальных окон "Вход в личный кабинет" и "Регистрация" */
	
	$(".open-modal-login, .open-modal-register").on("click", function(e){
		var $this = $(this);
		$.fancybox.close();
		setTimeout(function(){ 
			$.fancybox.open({
				src  : $this.attr("href"),
				type : 'inline',
				opts : {
					 beforeShow : function( instance, current ) {
						beforeShowFancybox();
					},
					 afterClose : function( instance, current ) {
						afterCloseFancybox();
					}
				}
			}); 
		}, 350);
	});
	
	
	/* Анимация чисел  */
	
	if ($(".about__statistics").length){
		//animationNumbers();
		var countbox = ".about__statistics"; 
		$('.about__statistics').viewportChecker({
			classToAdd: 'visible animated',
			//offset: 70,
			callbackFunction: function(elem, action){
				 $(countbox).find('.statistics-item__number').spincrement({
					 thousandSeparator: "",
					 duration: 4500
				});
			},
		});
	}
	/*
	function animationNumbers(){
		
		var show = true;
		var countbox = ".about__statistics";
		$(window).on("scroll load resize", function () {
		  if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		  var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		  var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		  var w_height = $(window).height(); // Высота окна браузера
		  var d_height = $(document).height(); // Высота всего документа
		  var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		  if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$(countbox).find(".statistics-item__number").css('opacity', '1');
				$(countbox).find('.statistics-item__number').spincrement({
					 thousandSeparator: "",
					 duration: 1500,
				});
				 
				show = false;
		  }
		});
	}
	
	*/
	
	
	
	
});
