svg4everybody(); // support inline svg

$(document).ready(function() {
	
	// Добавление классов устройства и браузера для документа
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family);
	$("html").addClass(user.os.family);
	$("html").addClass(user.device.type);
	
	// Путь до файла иконок, иконки слайдера
	var srcIcons = 'img/icons.svg',
		 prevArrow = '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-nav"><use xlink:href="' + srcIcons + '#icon-nav"/></svg></button>',
		 nextArrow = '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-nav"><use xlink:href="' + srcIcons + '#icon-nav"/></svg></button>';
	
	// Инициализация слайдера "Зоны вещаний" (плагин slick)
	if ($('.broadcast__carousel').length){
		
		$('.broadcast__carousel').slick({
			dots: true,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 2,
         slidesPerRow: 4,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow, 
			lazyLoad: 'progressive',
			responsive: [
				 {
					  breakpoint: 992,
					  settings: {
							slidesPerRow: 2,
							slidesToScroll: 1,
							slidesToShow: 1,
							rows: 4,
							arrows: false
					  }
				 },
				 {
					  breakpoint: 576,
					  settings: {
							rows: 4,
							slidesPerRow: 1,
							slidesToScroll: 1,
							slidesToShow: 1,
							arrows: false
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера "Наши объекты и партнеры" (плагин slick)
	if ($('.partners__carousel').length){
		$('.partners__carousel').slick({
			dots: true,
			infinite: false,
			touchThreshold: 20,
			slidesToShow: 5,
			slidesToScroll: 1,
			rows: 4,
         slidesPerRow: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow, 
			lazyLoad: 'progressive',
			responsive: [
				 {
					  breakpoint: 992,
					  settings: {
							slidesToShow: 4,
							arrows: false
					  }
				 },
				 {
					  breakpoint: 576,
					  settings: {
						  slidesToShow: 2,
							rows: 5,
							arrows: false
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера "Вопросы" (плагин slick)
	if ($('.accordions-carousel').length){
		var accordionsOptions = {
			dots: true,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 3,
			slidesPerRow: 1,
			adaptiveHeight: true,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			
			responsive: [
				 {
					  breakpoint: 992,
					 
					  settings: {
						arrows: false,
					  }
				 },
				 {
					  breakpoint: 576,
					  settings: {
						  dots: true,
						  infinite: true,
							rows: 1,
							slidesPerRow: 1,
							arrows: false
					  }
				 }
			]
		}
		$('.accordions-carousel').slick(accordionsOptions);
	}
	
	if ($(".broadcast-item").length){
		$(".broadcast-item").each(function(){
			var title = $(this).find(".broadcast-item__title > div"),
				 titleText = title.html();
				 titleTextNew = "";
				 
			var titleTextFirst = titleText.substring(0, titleText.indexOf(" ")),
				 titleTextSecond = titleText.substring( titleText.indexOf(" ") + 1, titleText.length);
				 
			title.html('<span>' + titleTextFirst + '</span>' + titleTextSecond)
		});
	}
		
	
	// window resize
	function windowSize(){
		var w = $(window).width();
		if (w > 991){
			$('.menu ul').removeAttr("style");
			$('.menu > li').removeClass("open");
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
	
	/* МОБИЛЬНОЕ МЕНЮ */
	
	var header = $('.header');
		 
	header.after('<div class="mobile-menu"></div>');
	
	var menuMobile = $('.mobile-menu');
	
	menuMobile.append(header.find(".news-button").clone());
	menuMobile.append(header.find(".menu").clone());
	menuMobile.append(header.find(".top-links").clone());
	
	if (header.find(".menu > li").length >= 3){
		menuMobile.append(menuMobile.find(".menu > li:last-child"));
		menuMobile.children("li:last-child").wrap('<ul class="menu"></ul>');
	}
	menuMobile.after('<div class="menu-close"><button class="menu-close__btn"><span>Закрыть</span></button></div>')
	
	$('.menu > li > a').each(function() {
		if ($(this).next("ul").length){
			$(this).append('<span class="arrow"></span>')
		}
	});
	
	$('.mobile-menu .menu > li > a').on("click", function(e) {
		if ($(this).next("ul").length){
			e.preventDefault();
			$(this).parent().toggleClass("open");
			$(this).next("ul").slideToggle();
		}
	});
	
	
	// Функция открытия мобильного окна
	function openMenu(){
		$("body").addClass("open-menu");
	}
	
	// Функция закрытия мобильного окна
	function closeMenu(){
		$("body").removeClass("open-menu");
	}
	
	// Открытия меню на кнопку "меню"
	$('.btn-toggle-menu').on('click', function() {
		openMenu();
	});
	
	// Закрытие мобильного окна на кнопку "закрыть"
	$(document).on('click', '.menu-close__btn', function() {
		closeMenu();
	});
	
	// Закрытие мобильного окна вне области окна
	$(document).on('click', function(e) {
		var menu = $(".mobile-menu"),
			 menuBtnToggle = '.btn-toggle-menu';
			 
		if (!$(menu).is(e.target)
		&& !$(menuBtnToggle).is(e.target)
		&& $(e.target).closest(menu).length === 0
		&& $(e.target).closest(menuBtnToggle).length === 0){
			closeMenu();
		}
	});
	
	// Стартовый блок
	
	/* ЕФФЕКТ ПОЯВЛЕНИЯ БУКВ */
	
    $(function() {
		  var stop,
				hvr = false,
				selectorItem = '.category-item',
				selectorItemActive = 'category-item--active',
				selectorItemSmall = 'category-item--size-sm',
				selectorText = '.category-item__text',
				letterActive = 'active';
				
		  // буквы в span
		  $(selectorItem).each(function(i, el) {
				var blk = $(this).find(selectorText);
				text = blk.text();
				blk.text('');
				var arText = text.split('');
				textSpan(blk, arText);
		  });
		  
        $(selectorItem).on('mouseover click', function() {
            if (hvr === false) {
                fn_hover($(this), $(this).find(selectorText).attr("data-time") / $(this).find(selectorText).children().length);
                hvr = true;
            }
        });

        $(selectorItem).on('mouseleave', function() {
            var blk = $(this).find(selectorText);
            stop = true;
            blk.children().removeClass(letterActive);
				$(this).removeClass(selectorItemActive).siblings(selectorItem).removeClass(selectorItemSmall);
            hvr = false;
        })

        $(document).click(function(event) {
            if ($(event.target).closest(selectorItem).length) return;
            stop = true;
            $(selectorText).children().removeClass(letterActive);
        });

        function fn_hover(el, timeCurrent) {
            stop = false;
            var blk = el.find(selectorText);
            blk.children().removeClass(letterActive);
				
				el.addClass(selectorItemActive).siblings(selectorItem).addClass(selectorItemSmall);
            letterGo(blk, timeCurrent);
        }

        function letterGo(blk, timeCurrent) {
            count = blk.children().length;
            var num = '0',
                nums = [],
                i = 0;
            setTimeout(function run() {
                // получаем рамдомное число длиной в кол символов в строке
                num = randomInteger(1, count);
                if ($.inArray(num, nums) == -1) {
                    nums.push(num);
                    letterShow(num, blk);
                    if (stop === false) {
								if (!timeCurrent){
									timeCurrent = 100;
								}
                        setTimeout(run, timeCurrent);
                    }
                } else if (nums.length < count) {
                    if (stop === false) {
                        run()
                    }
                }
            }, 400);
        }
		  
        // появление буква
        function letterShow(num, el) {
            if (stop === false) {
                el.find('span:eq(' + (num - 1) + ')').addClass(letterActive);
            }
        }
		  
		  // преобразование текста в группу span с буквами
		  function textSpan(blk, billet) {
				$.each(billet, function(i, val) {
					 toString(function() {
						  return val;
					 })
					 blk.append('<span>' + val + '</span>')
				})
		  }
		  
		  
    });
	 
	 // генерация случайного числа
	function randomInteger(min, max) {
		 var rand = min - 0.5 + Math.random() * (max - min + 1)
		 rand = Math.round(rand);
		 return rand;
	}
	
	// Зоны вещания
	$(".broadcast-item").on("mouseenter", function(){
		var index = $(this).attr("data-index") - 1;
		$(".broadcast__center").addClass("broadcast__center--active");
		$(".broadcast__icons-item").eq(index).addClass("broadcast__icons-item--active");
	});
	$(".broadcast-item").on("mouseleave", function(){
		var index = $(this).attr("data-index") - 1;
		$(".broadcast__center").removeClass("broadcast__center--active");
		$(".broadcast__icons-item").eq(index).removeClass("broadcast__icons-item--active");
	});
	
	// Продажа рекламы
	$(".step-item__left").on("mouseenter", function(){
		$(this).closest(".sales__steps").addClass("active");
	});
	$(".step-item__left").on("mouseleave", function(){
		$(this).closest(".sales__steps").removeClass("active");
	});
	 
	// accordion
	$("body").on("click", '.accordion__title', function(){
		var $this = $(this);
		$(this).next().slideToggle(300);
		
		setTimeout(function(){
			//$this.closest(".accordions-carousel").slick('unslick');
			//$this.closest(".accordions-carousel").slick(accordionsOptions);
			$this.closest(".accordions-carousel").slick('setPosition');
		},300)
		
		
	});
	
	// accordion
	$('.questions__btn-toggle').on("click", function(){
		var currentTitle = $(this).find("span").text(),
			 dataTitle = $(this).attr("data-toggle-title");
		
		$(this).find("span").text(dataTitle);
		$(this).attr("data-toggle-title", currentTitle);
		
		$(this).parent().next().toggleClass("active");
		$(this).parent().next().slick('setPosition');
		
		
	});
	
	
});
