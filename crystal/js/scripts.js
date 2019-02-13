$(document).ready(function() {
	
	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody(); 
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	
	// Путь до файла иконок, иконки слайдера
	var srcIcons = 'img/icons.svg',
		 prevArrow = '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow"><use xlink:href="' + srcIcons + '#icon-arrow"/></svg></button>',
		 nextArrow = '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow"><use xlink:href="' + srcIcons + '#icon-arrow"/></svg></button>';
	
	// Кнопка "закрыть"
		btnClose = '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
				'<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 357 357"><g><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/></g></svg>' +
				"</button>";
	
	// Инициализация верхнего слайдера на главной странице (плагин slick)
	if ($('.main-slider').length){
		$('.main-slider').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<div>' + prevArrow + '</div>',
			nextArrow: '<div>' + nextArrow + '</div>'
			//lazyLoad: 'progressive'
		});
	}
	
	// Инициализация слайдера продуктов (плагин slick)
	if ($('.products-carousel').length){
		$('.products-carousel').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			lazyLoad: 'progressive',
		
			responsive: [
				 {
					  breakpoint: 1351,
					  settings: {
							slidesToShow: 3
					  }
				 },
				 {
					 breakpoint: 992,
					  settings: {
							slidesToShow: 2
					  }
				 },
				 {
					 breakpoint: 651,
					  settings: {
							slidesToShow: 1
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера лучших продуктов (плагин slick)
	if ($('.top-products-carousel').length){
		$('.top-products-carousel').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			lazyLoad: 'progressive',
			variableWidth: true,
			responsive: [
				 {
					  breakpoint: 1351,
					  settings: {
							slidesToShow: 3,
							variableWidth: false 
					  }
				 },
				 {
					 breakpoint: 992,
					  settings: {
							slidesToShow: 2,
							variableWidth: false 
					  }
				 },
				 {
					 breakpoint: 651,
					
					  settings: {
							slidesToShow: 1,
							variableWidth: false
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера карточки (плагин slick)
	if ($('.card-carousel').length){
		$('.card-carousel').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			lazyLoad: 'progressive'
		});
	}
	
	// Инициализация слайдера на странице магазина (плагин slick)
	if ($('.shop-carousel').length){
		$('.shop-carousel').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			lazyLoad: 'progressive'
		});
	}
	
	// Инициализация модальных окон (плагин fancybox)
	
	function showModalFunctions (){
		$('.fixed .header__bottom').addClass("compensate-for-scrollbar");
	}
	
	function closeModalFunctions (){
		$('.fixed .header__bottom').removeClass("compensate-for-scrollbar");
	}
	
	$('[data-fancybox]').fancybox({
		 animationEffect: "fade",
		 buttons: false,
		 btnTpl: {
			 smallBtn: btnClose
		 },
		 beforeShow : function( instance, current ) {
			showModalFunctions ();
		},
		 afterClose : function( instance, current ) {
			closeModalFunctions ();
		} 
	});
	
	// Инициализация счетчика
	$( ".counter" ).each(function(){
		var $this = $(this);
		$( ".counter" ).spinner({
			min: $this.attr("data-min"),
			max: $this.attr("data-max")
		});
	});
	
	
	// window resize
	function windowSize(){
			var w = $(window).width();

			if (w <= 767){

			}
			else{
				$(".menu__dropdown").removeClass("active");
			}
	}

	windowSize();
	
	$(window).on('resize', windowSize);

	
	// Header 
	$(".header__bottom").before('<div class="header__bottom-clone"></div>');
	
	// window scroll
	
	$(window).on("load scroll", function(){
		var windowScroll = $(window).scrollTop(),
			 header = $(".header"),
			 headerFixed = $(".header__bottom"),
			 headerHeight = header.innerHeight(),
			 headerOffset = header.offset().top + headerHeight;
			
		if (windowScroll >= headerOffset){
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
		
		if ($(".header.fixed").length){
			$(".header__bottom-clone").css("height", headerFixed.innerHeight());
		}
		else{
			$(".header__bottom-clone").removeAttr("style");
		}
	});

	
	// Открытие / закрытие меню
	
	$('.btn-menu-toggle').on('click', function() {
		$("body").toggleClass("open-menu");
		$(this).toggleClass("active");
	});
	
	// Меню категорий в мобильной версии
	
	$('.menu__dropdown > a').on('click', function(e) {
		e.preventDefault();
		var w = $(window).width();
		if (w <= 767){
			$(this).parent().toggleClass("active");
		}
	});
	$('.menu__submenu-close').on('click', function() {
		$(this).closest(".menu__dropdown").removeClass("active");
	});
	
	// Фильтры
	
	$('.filter-item__title').on('click', function(e) {
		e.preventDefault();
		$(this).closest(".filter-item").toggleClass("active");
	});
	
	$('.filters__btn-toggle').on('click', function() {
		$(this).closest(".filters").toggleClass("active");
	});
	
	// Рейтинг
	
	$('.rating--select .star-item').on('mouseenter', function() {
		var index = $(this).index() + 1;
		$(this).closest(".rating").attr("data-rating-hover", index);
	});
	
	$('.rating--select .star-item').on('mouseleave', function() {
		$(this).closest(".rating").removeAttr("data-rating-hover");
	});
	
	$('.rating--select .star-item').on('click', function() {
		var index = $(this).index() + 1;
		$(this).closest(".rating").attr("data-rating", index);
		$(this).closest(".rating").find(".rating__input").val(index);
	});
	
	// Вкладки
	$('.tab-nav > li').on('click', function(e) {
		e.preventDefault();
		var tabIndex = $(this).index(),
			 tabPane = $(this).closest(".tabs").find(".tab-pane");
		
		$(this).siblings().removeClass("active");
		tabPane.removeClass("active");
		
		$(this).addClass("active");
		tabPane.eq(tabIndex).addClass("active");
	});
	
	// Фильтры в сравнении товаров
	$('.compare__filters-item').on('click', function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	// Добавление ширины блокам внутри скроллбаров
	if ($(".compare-product").length){
		var widthCompare = 0;
		$(".compare-product").each(function(){
			widthCompare += $(this).innerWidth() - 1;
		});
		widthCompare -= 30;
		$(".compare__scroll > div").css("width", widthCompare);
	}
	
	// Взаимодействие скроллбаров в сравнении
	var compareProducts = '.compare__items',
		 compareScrollTop = '.compare__scroll--top',
		 compareScrollBottom = '.compare__scroll--bottom';
	
	$(compareProducts).scroll(function(e){
		 $(compareScrollTop + "," + compareScrollBottom).scrollLeft($(this).scrollLeft());
	});
	$(compareScrollTop).scroll(function(e){
		$(compareProducts + "," + compareScrollBottom).scrollLeft($(this).scrollLeft());
	});
	$(compareScrollBottom).scroll(function(e){
		$(compareProducts + "," + compareScrollTop).scrollLeft($(this).scrollLeft());
	});
	
	// Стрелки в скроллбаре
	$('.compare__scroll-nav').on('click', function() {
		var scrollOffset = $(compareProducts).scrollLeft();
		
		if ($(this).hasClass("compare__scroll-nav--prev")){
			scrollOffset -= $(".compare-product").innerWidth() + 1;
		}
		else{
			scrollOffset += $(".compare-product").innerWidth() + 1;
		}
		$(compareProducts + "," + compareScrollTop + "," + compareScrollBottom).scrollLeft(scrollOffset);
	});
	
	// Адреса пунктов выдачи
	$('.address-item').on('click', function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	// click document
	
	$(document).on('click', function(e) {
	
		var menu = '.top-menu',
			 menuBtnToggle = '.btn-menu-toggle';

		if (!$(menu).is(e.target)
		&& $(e.target).closest(menu).length === 0 
		&& !$(menuBtnToggle).is(e.target)
		&& $(e.target).closest(menuBtnToggle).length === 0){
			$("body").removeClass("open-menu");
			$(menuBtnToggle).removeClass("active");
		}
		
	}); 
	
	// Слайдер с бегунками
	$(".filter-range").each(function(){
		$this = $(this);
		var rangeMin = parseInt($this.attr('data-range-min')),
			 rangeMax = parseInt($this.attr('data-range-max')),
			 inputMin = $this.find('.filter-range__input--min'),
			 inputMax = $this.find('.filter-range__input--max'),
			 valueMin = parseInt(inputMin.val()),
			 valueMax = parseInt(inputMax.val()),
			 $slider   = $(this).find('.filter-range__slider');
			 
		$slider.slider({
			range: true,
			min: rangeMin,
			max: rangeMax,
			values: [ valueMin, valueMax ],
			slide: function( event, ui ) {
			  inputMin.val(ui.values[ 0 ]);
			  inputMax.val(ui.values[ 1 ]);
			}
		});
			
		 inputMin.change(function(){
			 var 
				valueMinThis = parseInt(inputMin.val()),
				valueMaxThis = parseInt(inputMax.val()),
				valueMinNew = valueMinThis,
				$slider   = $(this).closest(".filter-range").find('.filter-range__slider');
				
				
			if( valueMinThis >= valueMaxThis ){
				
				valueMinNew = valueMaxThis;
			}
					
			if( valueMinThis <= rangeMin) {
				valueMinNew = rangeMin;
			}
			if (inputMin.val() == '') valueMinNew = rangeMin;
			
			inputMin.val(valueMinNew);
			$slider.slider("values",0,valueMinNew);
			
		 });
		 
		 inputMax.change(function(){
			 var valueMinThis = parseInt(inputMin.val()),
				valueMaxThis = parseInt(inputMax.val()),
				valueMaxNew = valueMaxThis,
				$slider   = $(this).closest(".filter-range").find('.filter-range__slider');
			
			if( valueMaxThis >= rangeMax){
				valueMaxNew = rangeMax;
			}
			if( valueMaxThis <= valueMinThis ){
				valueMaxNew = valueMinThis;
			}
			
			if (inputMax.val() == '') valueMaxNew = rangeMax;
			inputMax.val(valueMaxNew);
			$slider.slider("values",1,valueMaxNew);	
		 });
		 
	});
	
	// Ввод только цифр
	$('.filter-range__input, .counter').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;	
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;
	});
	
	// инициализация маски телефона (плагин maskedinput)
	 $('.phone-mask').mask('+7 (000) 000-00-00');
	 
	// проверка валидации заказа в один клик (плагин jQuery Validation Plugin)
	  $(".popup-one-click .form-validate").each(function(){
		  var $this = $(this);
		 $this.validate({
			  submitHandler: function(form) {
					$.fancybox.close();

					setTimeout(function(){
						$.fancybox.open({
							src  : "#popup-thanks",
							type : 'inline',
							buttons: false,
							btnTpl: {
								 smallBtn: btnClose
							 },
							beforeShow : function( instance, current ) {
								showModalFunctions ();
							},
							 afterClose : function( instance, current ) {
								closeModalFunctions ();
							}
						});
						$this.find("input").val("");
					}, 400);
					
					
				}
		 });
		 
	 });
	
	
	
});
