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
	
	/* Инициализация выпадающего списка (плагин Selectric) */
	
	if ($('.select').length){
		$('.select').selectric({
			maxHeight: 45 * 5
		}); 
	}
	
	/* Инициализация скроллбара (плагин jScrollPane) */
	if ($('.scroll-pane').length){
		//$('.scroll-pane').jScrollPane();
	}
	
	var scrollbar = [];
	 if ($(".scrollbar").length){
		 $(".scrollbar").each(function(item){
			 $(this).attr("data-scrollbar-id", item);
			 scrollbar[item] = Scrollbar.init(document.querySelectorAll('.scrollbar')[item]);
		 });
	 }
	
	
	/* Инициализация модальных окон (плагин fancybox) */
	
	$.fancybox.defaults.closeExisting = true;
	$.fancybox.defaults.animationEffect = "fade";
	$.fancybox.defaults.animationDuration = 300;
	//$.fancybox.defaults.touch = false;
	
	function beforeShowFancybox (){
		$(".header, .nav-cart").addClass("compensate-for-scrollbar");
		if ($(".card-control").length){
			$(".card-control").addClass("compensate-for-scrollbar");
		}
	}
	
	function afterShowFancybox (){
		/* Инициализация скроллбара (плагин jScrollPane) */
	}
	
	function afterCloseFancybox (){
		$(".header, .nav-cart").removeClass("compensate-for-scrollbar");
		if ($(".card-control").length){
			$(".card-control").removeClass("compensate-for-scrollbar");
		}
	}
	
	$("[data-fancybox]").fancybox({
		 backFocus: false,
		beforeShow : function( instance, current ) {
			beforeShowFancybox();
		},
		afterShow : function( instance, current ) {
			if (current.type !== "image" && $(current.$content).find(".scrollbar").length){
				$(current.$content).find(".scrollbar").each(function(item){
					  if ($(this).attr("data-scrollbar") == true){
						  var attrId = $(this).attr("data-scrollbar-id");
						  scrollbar[attrId].update();
					 }
					else{
						 $(this).attr("data-scrollbar-id", item);
						  scrollbar[item] = Scrollbar.init(document.querySelectorAll('.scrollbar')[item]);
					}
				}); 
			}
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
			
			if (current.type !== "image" && $(current.$content).find(".scrollbar").length){
				$(current.$content).find(".scrollbar").each(function(item){
					  if ($(this).attr("data-scrollbar") == true){
						  var attrId = $(this).attr("data-scrollbar-id");
						  scrollbar[attrId].update();
					 }
					else{
						 $(this).attr("data-scrollbar-id", item);
						  scrollbar[item] = Scrollbar.init(document.querySelectorAll('.scrollbar')[item]);
					}
				}); 
			}
			
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
   //$('.mask-phone').mask('+7 (999) 999-99-99');
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
	
	/* Инициализация карусели фотографий (плагин Owl Carousel) */
	if ($(".carousel-gallery").length){
		$(".carousel-gallery").owlCarousel({
			items: 1,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 20,
			responsive:{
				481:{
					items: 2,
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
	
	/* Инициализация карусели "Рекоммендации" (плагин Owl Carousel) */
	if ($(".carousel-recommendations").length){
		$(".carousel-recommendations").owlCarousel({
			items: 1,
			nav: true,
			//navText: ['', ''],
			loop: true,
			dots: false,
			margin: 20,
			responsive:{
				641:{
					items: 2,
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
	

	
	/* Инициализация карусели "Работы учеников" (плагин Owl Carousel) */
	if ($(".student-works__carousel").length){
		$(".student-works__carousel").owlCarousel({
			items: 1, 
			nav: true, 
			loop: true,
			dots: false,
			mouseDrag: false,
			touchDrag: false,
			margin: 20,
			responsive:{
				
				576:{
					items: 2,
				},
				
				681:{
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
	
		/* Инициализация карусели "Слайдер фотографий в работах учеников" (плагин Owl Carousel) */
	if ($(".student-work-item__carousel").length){
		$(".student-work-item__carousel").owlCarousel({
			items: 1,
			nav: true, 
			loop: true,
			dots: false,
			//margin: 20,
			responsive:{
				/*
				641:{
					items: 2,
				},
				768:{
					items: 2,
					margin: 30 
				},
				992:{
					items: 3,
					margin: 30
				}
				*/
			}
		});
	}
	
	/* Инициализация карусели "Результат (фотографии)" (плагин Owl Carousel) */
	if ($(".carousel-result").length){
		$(".carousel-result").owlCarousel({
			items: 1, 
			nav: true,  
			loop: true,
			dots: false,
			mouseDrag: false,
			margin: 20,
			responsive:{
				
				576:{
					items: 2,
				},
				
				681:{
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
	
	
	/* Аккордион */
	
	$(document).on("click", '.accordion__header', function(){
		$(this).closest(".accordion").toggleClass('accordion--active');
		//$(this).next().slideToggle();
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
	
	$(document).on("click", ".header__btn-menu", function(){
		$(".mobile-nav").addClass("active");
		$("body").addClass("active-menu");
	});
	
	$(document).on("click", ".mobile-nav__btn--close", function(){
		$(this).closest(".mobile-nav").removeClass("active");
		$("body").removeClass("active-menu");
	});
	
	$(document).on("click", ".mobile-nav__catalog-btn", function(){
		$(this).closest(".mobile-nav").addClass("mobile-nav--catalog");
		$(this).next(".mobile-nav__catalog-content").scrollTop(0);
	});
	
	$(document).on("click", ".mobile-nav__btn--back", function(){
		$(this).closest(".mobile-nav").removeClass("mobile-nav--catalog");
	});
	
	$(document).on("click", ".mobile-nav .catalog-menu__title", function(){
		$(this).toggleClass("active");
		$(this).next().slideToggle();
	});
	
	if ($(".mobile-nav--default").length){
		$(".mobile-nav__catalog-content").append($(".header .catalog-menu").clone());
		$(".mobile-nav__menu").append($(".header .menu").clone());
	}
	else if ($(".mobile-nav--lk").length && $(".lk-menu").length){
		$(".mobile-nav__menu").append($(".lk-menu").clone());
	} 
	
	
	/* Открытие/закрытие каталога */
	
	$(document).on("click", ".category-filters__toggle", function(){
		$("body").addClass("active-filters");
	});
	
	$(document).on("click", ".category-filters__nav-close", function(){
		$("body").removeClass("active-filters");
	});
	
	
	/* Открытие/закрытие оповещений в шапке */
	
	$(document).on("click", ".header__notifications-btn", function(){
		var block = $(this).next(".header__notifications-block");
		block.toggleClass("active");
		if (block.find(".scrollbar").length){
			block.find(".scrollbar").each(function(item){
				 var attrId = $(this).attr("data-scrollbar-id");
				 scrollbar[attrId].update();
			}); 
		}
		
	});
	
	$(document).on('click', function(e) {
		var notificationBlock = '.header__notifications-block',
			 notificationToggle = '.header__notifications-btn';

		if (!$(notificationBlock).is(e.target)
		&& $(e.target).closest(notificationBlock).length === 0 
		&& !$(notificationToggle).is(e.target)
		&& $(e.target).closest(notificationToggle).length === 0){
			$(notificationBlock).removeClass("active");
		}
	}); 
	
	
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
		let _this = $(this);
		if (!_this.hasClass('btn-add--added')) {
			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let product_id = _this.data('product-id');
			let product_type = _this.data('product-type');
			let product_name = _this.data('product-name');
			let response = fetch('/cart/add', {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				},
				body: JSON.stringify({product_id:product_id, product_type:product_type})
			}).then(function (response) {
				if (response.ok) {
					_this.addClass("btn-add--added");
					response.json().then(function(data) {
						if (product_type == 'lesson') {
							$('.modal-added').find('.modal__title').text('Урок "' + data['name'] + '" добавлен!');
						}
						if (product_type == 'collection') {
							$('.modal-added').find('.modal__title').text('Подборка "' + data['name'] + '" добавлена!');
						}	
						if (data['cart'] == 0) {
							_this.find(".btn-add__text").text("Добавлено в библиотеку");
							setTimeout(function(){
								$.fancybox.open({
									src  : '#modal-added-to-account',
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
						}
						if (data['cart'] == 1) {
							if (data['count']) { 
								$('.nav-cart__btn-count').text(data['count']);
							}
							_this.find(".btn-add__text").text("Добавлено");
							setTimeout(function(){
								$.fancybox.open({
									src  : '#modal-added-to-cart',
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
						}
					});
					

				}
			});
		}
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
	
	
	/* Открытие/закрытие блоков в личных данных в ЛК */
	
	$(document).on('click', ".lk-personal__block-title", function() {
		$(this).toggleClass("active");
		$(this).next(".lk-personal__block-content").slideToggle(300);
	}); 
	
	
	/* Клик по счетчику "Нравится" в статье */
	
	$(document).on('click', ".block-like", function() {
		$(this).toggleClass("block-like--active");
		var $number = $(this).find(".block-like__number");
		var $id = $(this).data("post-id");
		if ($(this).hasClass("block-like--active")){
			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let response = fetch(window.location.href, {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				},
				body: JSON.stringify({like:1})
			}).then(function (response) {
				if (response.ok) {
					$number.text(Number($number.text()) + 1);
				}
			});	
		}
		else{
			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let response = fetch(window.location.href, {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				},
				body: JSON.stringify({like:-1})
			}).then(function (response) {
				if (response.ok) {
					$number.text(Number($number.text()) - 1);
				}
			});	
		}
	}); 
	
	/* Оценка материала в уроке и подборке */
	
	$(document).on('click', ".rating__stars .icon-star", function() {
		if (!$(this).closest('.rating').hasClass('rating--set')) {
			let _this = $(this);
			let type = $(this).closest('.rating').attr('data-type');
			let rating = $(this).index() + 1;
			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let response = fetch(window.location.href, {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				},
				body: JSON.stringify({type:type, rating:rating})
			}).then(function (response) {
				if (response.ok) {
					_this.closest('.rating').attr('data-rating', rating);
					_this.closest('.rating').addClass('rating--set');
					_this.closest('.rating__stars').after('<div class="rating__text">Вы поставили ' + rating + '</div>');	
				} else {
					console.log(response);
				}
			});	
			
		}
	}); 
	
	
	/* Плэйлист */
	/*
	$(document).on('click', ".playlist__video:not(.play)", function() {
		var videoFrame = $(this).find("iframe");
		//videoFrame.get(0).play();
		$(this).addClass("play");
	});
	*/
	/*
	$(document).on('click', ".playlist-item:not(.active)", function() {
		var videoSrc = $(this).attr("data-video-src"),
			 videoTitle = $(this).attr("data-video-title"),
			 videoPoster = $(this).attr("data-video-poster"),
			 $playlist = $(this).closest(".playlist"),
			 $videoMain = $playlist.find(".playlist__video"),
			 $videoFrame = $playlist.find(".playlist__video-frame");
			 $videoTitle = $playlist.find(".playlist__video-title");
			 $videoPoster = $playlist.find(".playlist__video-poster");
			 
		$(this).siblings(".playlist-item").removeClass("active");
		$(this).addClass("active");
		
		$videoMain.removeClass("play");
		$videoFrame.html('<video controls width="100%" height="100%" preload="metadata">' +
                            '<source src="' + videoSrc + '" type="video/mp4">' +
                          '</video>');
		$videoTitle.text(videoTitle);
		$videoPoster.css("backgroundImage", 'url("' + videoPoster + '")');
		
		$videoMain.addClass("play");
		$videoFrame.find("video").get(0).play();
		
		
		
	}); 
	*/

	
	/* Открытие модальных окон "Вход в личный кабинет" и "Регистрация" */
	/*
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
	*/
	
	/* Анимация первого экрана на главной странице  */
	
	if ($(".home__images").length){
		var boxImages = ".home__images"; 
		$(boxImages).viewportChecker({
			classToAdd: 'visible animated'
		});
	}
	
	/* Анимация чисел  */
	
	if ($(".about__statistics").length){
		var countbox = ".about__statistics"; 
		$(countbox).viewportChecker({
			classToAdd: 'visible animated',
			callbackFunction: function(elem, action){
				 $(countbox).find('.statistics-item__number').spincrement({
					 thousandSeparator: "",
					 duration: 4500
				});
			},
		});
	}
	
  /* фильтрация ввода в поля */
	$('.input-number').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;	
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;
	});
	
	/* Закрыть окно успешной отправки ДЗ */
	$(document).on("click", ".attach-homework__success-close", function(){
		$(this).closest(".attach-homework__success").hide();
	});
	
	$(".attach-homework__form form").submit(function(event) {
		let form = document.querySelector('.attach-homework__form form');
		let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
		let response = fetch('/account/homeworks', {
			method: 'POST',
			credentials: "same-origin",
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				"X-CSRF-Token": token
			},
			body: new FormData(form)
		}).then(function (response) {
			if (response.ok) {
				$('.attach-homework__form').css('display', 'none');
				$('.attach-homework__success').css('display', 'block');
			} else {
				alert('Ошибка!');
			}
		});	
		return false;
	});
	
	// Наведение на рейтинг
	$(document).on("mouseenter", ".assessment__rating .rating .icon", function(){
		if (!$(this).closest('.rating').hasClass('rating--set')) {
			$(this).closest(".rating").attr("data-rating-hover", ($(this).index() + 1));
		}
	}); 
	$(document).on("mouseleave", ".assessment__rating .rating", function(){
		if (!$(this).closest('.rating').hasClass('rating--set')) {
			$(this).closest(".rating").removeAttr("data-rating-hover");
		}
	});
	
	/* Клик по кнопке "Отметить все прочитанными" */
	
	$(document).on('click', ".notifications__mark-btn", function() {
		$('.header__notifications-number').css('display', 'none');
		$('.notifications .notifications__title span').text('(0)');
		$('.notifications .notifications__items .notification-item').remove();

			let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
			let response = fetch('/notifications', {
				method: 'POST',
				credentials: "same-origin",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRF-Token": token
				}
			});	
	}); 
	
	// Плейлист 
	$(document).on("click", ".playlist-item", function(){
		var src = $(this).attr("data-video-src"),
			poster = $(this).attr("data-video-poster");
			
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
		$(".playlist__video iframe").attr("src", src + "&startlevel=80&poster=" + poster)
	});  
	
	// Маски для телефонов
	//var inputs = document.querySelectorAll(".mask-number");
	
	var countryCode = "";
		
	$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
	  countryCode = (resp && resp.country) ? resp.country : "";
	  maskInputs();
	}); 
	
	function maskInputs(){
		var maskOptions = {
			 utilsScript:'js/utils.js',
			 initialCountry: "auto",
			 separateDialCode: true,
			 autoPlaceholder:"aggressive",
			 geoIpLookup: function(success, failure) {
				success(countryCode);
			  },
			preferredCountries: ['ru'],
			 onlyCountries: ["az", "am", "by", "ge", "kg", "kz", "md", "ru", "tj", "tm", "ua", "uz"]
		},
		timeInterval = [];
			
		$(".mask-number").each(function(count){
			var $this = $(this),
				id = $this.attr("id"),
				selector = document.querySelector("#" + id),
				iti = "",
				placeholder = "",
				placeholderNew = "",
				isLoading = true,
				iti = intlTelInput(selector, maskOptions);
			
			timeInterval[count] = setInterval(function(){
				if ($this.attr("placeholder") !== undefined && $this.attr("placeholder") != "" && $this.attr("placeholder") != false){
					
					if (isLoading){
						placeholder = $this.attr("placeholder");
						placeholderNew = placeholder.replace(/[0-9]/g, 9);
						$this.attr("minlength", placeholder.length);
						$this.attr("data-minlength-numbers", placeholder.replace(/\D+/g, '').length);
						$this.mask(placeholderNew,{autoclear: false}); 
						isLoading = false;
					}
					clearInterval(timeInterval[count]);
					
				}
			}, 1000);
			
			var code = $this.closest(".iti").find(".iti__selected-dial-code").text();
			
			$this.closest(".iti").next(".number-full").val(code + " " + $this.val());
			
			
			$this.on("close:countrydropdown",function(e,countryData){
				$(this).val("");
				placeholder = $(this).attr("placeholder");
				placeholderNew = placeholder.replace(/[0-9]/g, 9);
				$(this).attr("minlength", placeholder.length);
				$(this).attr("data-minlength-numbers", placeholder.replace(/\D+/g, '').length);
				$(this).mask(placeholderNew,{autoclear: false});
				
				code = $(this).closest(".iti").find(".iti__selected-dial-code").text();
				$(this).closest(".iti").next(".number-full").val(code + " " +$(this).val());
			});
			
			 
			
			$('#' + id).on("change input", function(){
				code = $(this).closest(".iti").find(".iti__selected-dial-code").text();
				$(this).closest(".iti").next(".number-full").val(code  + " " + $this.val());
			});
			
		});
		
		
	}
	
	
	  
	 
	
	
	

});
