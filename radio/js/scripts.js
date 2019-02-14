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
		 nextArrow = '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-nav"><use xlink:href="' + srcIcons + '#icon-nav"/></svg></button>',
		 prevArrow2 = '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-arrow-2"><use xlink:href="' + srcIcons + '#icon-arrow-2"/></svg></button>',
		 nextArrow2 = '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-arrow-2"><use xlink:href="' + srcIcons + '#icon-arrow-2"/></svg></button>',
		 prevArrow3 = '<button type="button" class="slick-prev slick-arrow"><svg class="icon icon-nav-2"><use xlink:href="' + srcIcons + '#icon-nav-2"/></svg></button>',
		 nextArrow3 = '<button type="button" class="slick-next slick-arrow"><svg class="icon icon-nav-2"><use xlink:href="' + srcIcons + '#icon-nav-2"/></svg></button>';
	
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
	if ($('.partners--1 .partners__carousel').length){
		$('.partners--1 .partners__carousel').slick({
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
	
		// Инициализация слайдера "Партнеры" на внутренних страницах (плагин slick)
	if ($('.partners--2 .partners__carousel').length){
		$('.partners--2 .partners__carousel').slick({
			dots: true,
			infinite: false,
			touchThreshold: 20,
			slidesToShow: 5,
			slidesToScroll: 1,
			rows: 2,
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
	
	// Инициализация слайдера "Примеры музыкальных баз" (плагин slick)
	if ($('.examples__carousel').length){
		$('.examples__carousel').slick({
			dots: true,
			infinite: false,
			touchThreshold: 20,
			slidesToShow: 2,
			slidesToScroll: 1,
         slidesPerRow: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow, 
			lazyLoad: 'progressive',
			responsive: [
				 {
					  breakpoint: 992,
					  settings: {
							arrows: false
					  }
				 },
				 {
					  breakpoint: 768,
					  settings: {
						  slidesToShow: 1,
							arrows: false
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера "Музыка для звукового оформления" (плагин slick)
	if ($('.carousel-places').length){
		$('.carousel-places').slick({
			dots: true,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 4,
			slidesToScroll: 4,
         slidesPerRow: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow, 
			lazyLoad: 'progressive',
			responsive: [
				 {
					  breakpoint: 1200,
					  settings: {
							slidesToShow: 3,
							slidesToScroll: 3
					  }
				 },
				 {
					  breakpoint: 992,
					  settings: {
						  slidesToShow: 2,
						  slidesToScroll: 2,
						  arrows: false
					
					  }
				 },
				 {
					  breakpoint: 576,
					  settings: {
						  slidesToShow: 1,
						  slidesToScroll: 1,
						  arrows: false
					
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера "Документы" (плагин slick)
	if ($('.documents-carousel').length){
		$('.documents-carousel').slick({
			dots: true,
			infinite: false,
			
			touchThreshold: 20,
			slidesToShow: 3,
			slidesToScroll: 3,
         slidesPerRow: 1,
			arrows: true,
			prevArrow: prevArrow,
			nextArrow: nextArrow, 
			lazyLoad: 'progressive',
			responsive: [
				 {
					  breakpoint: 992,
					  settings: {
						  arrows: false
					
					  }
				 },
				 {
					  breakpoint: 576,
					  settings: {
						  slidesToShow: 2,
						slidesToScroll: 2,
						  arrows: false
					
					  }
				 }
			]
		});
	}
	
	// Инициализация слайдера "Рекомендованные новости" (плагин slick)
	if ($('.news__carousel').length){
		$('.news__carousel').slick({
			dots: false,
			infinite: true,
			touchThreshold: 20,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: prevArrow3,
			nextArrow: nextArrow3, 
			lazyLoad: 'progressive', 
			responsive: [
				 {
					  breakpoint: 576,
					  settings: {
						  slidesToShow: 1,
						  slidesToScroll: 1,
						  rows: 3
					
					  }
				 }
			]
		});
	}
	
	
	// Инициализация плагина hoverdir
	if ($(".music-advantages").length){
		$('.music-advantage-item__content').each(function(){ 
			$(this).hoverdir(); 
		});
	}
	
	
	// Инициализация модальных окон (плагин fancybox)
	
	function showModalFunctions (){
		$('.header').addClass("compensate-for-scrollbar");
	}
	
	function closeModalFunctions (){
		$('.header').removeClass("compensate-for-scrollbar");
	}
	
	$("[data-fancybox]").fancybox({
		 animationEffect: "fade",
		 buttons: false,
		 hash: false,
		 beforeShow : function( instance, current ) {
			showModalFunctions ();
		},
		 afterClose : function( instance, current ) {
			closeModalFunctions ();
		} 
	});
	
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
		
		// holidays 
		if ($(".holidays__items").length){
			$(".holidays__items").after('<div class="holidays__items-clone"><div></div></div>');
			var itemsClone, divLast, divFirst, divCenter;
			itemsClone = $(".holidays__items-clone");
		
			if (w <= 1199){
				$('.holiday-item').each(function(elem){
					divLast = itemsClone.children("div:last-child");
					elem++;
					if (elem % 2 != 0 && elem != 1){
						 itemsClone.append("<div></div>");
						divLast = itemsClone.children("div:last-child");
						divLast.append($(this));
					}
					else{
						divLast.append($(this));
					}
				});
			}
			else{
				itemsClone.append('<div></div><div></div>');
			
				$('.holiday-item').each(function(elem){
					
					divFirst = itemsClone.children("div:first-child");
					divLast = itemsClone.children("div:last-child");
					divCenter = itemsClone.children("div:nth-child(2)");
					elem++;
					
					switch(elem){
						case 1:
						case 2:
						case 6:
						case 7:
							divFirst.append($(this));
						break;
						
						case 3:
						case 8:
							divCenter.append($(this));
						break;
						
						case 4:
						case 5:
						case 9:
						case 10:
							divLast.append($(this));
						break;
					}
				});
			}
			
			$(".holidays__items").empty().append(itemsClone.children());
			itemsClone.remove();
		}
		
			if ($('.music-advantages__carousel').length){
				if (w <= 991){
					if (!$('.music-advantages__carousel.slick-initialized').length){
						$('.music-advantages__carousel').slick({
							dots: true,
							infinite: false,
							touchThreshold: 20,
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: true,
							prevArrow: prevArrow2,
							nextArrow: nextArrow2, 
							lazyLoad: 'progressive',
							responsive: [
								 {
									  breakpoint: 576,
									  settings: {
										 slidesToShow: 1,
										 slidesToScroll: 1
									
									  }
								 },
								 {
									  breakpoint: 351,
									  settings: {
										 slidesToShow: 1,
										 slidesToScroll: 1,
										arrows: false,
									  }
								 }
							]
						});
					}
					
				}
				else{
					if ($('.music-advantages__carousel.slick-initialized').length){
						$('.music-advantages__carousel').slick('unslick');
					}
					
				}
				
			}
			
			if ($('.sounds-live__carousel').length){
				if (w <= 767){
					if (!$('.sounds-live__carousel.slick-initialized').length){
						$('.sounds-live__carousel').slick({
							dots: true,
							infinite: false,
							touchThreshold: 20,
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
							prevArrow: prevArrow,
							nextArrow: nextArrow, 
							lazyLoad: 'progressive'
						});
					}
					
				}
				else{
					if ($('.sounds-live__carousel.slick-initialized').length){
						$('.sounds-live__carousel').slick('unslick');
					}
					
				}
				
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
		$this.next().slideToggle(300);
		$this.closest(".accordion").toggleClass("active");
		
		if ($this.closest(".accordions-carousel").length){
			setTimeout(function(){
				$this.closest(".accordions-carousel").slick('setPosition');
			},300);
		}
		
		if ($this.next().find(".slick-slider").length){
			$this.next().find(".slick-slider").slick('setPosition');
		}
		
	});
	
	// Открыть / закрыть вопросы
	$('.questions__btn-toggle').on("click", function(){
		var currentTitle = $(this).find("span").text(),
			 dataTitle = $(this).attr("data-toggle-title");
		
		$(this).find("span").text(dataTitle);
		$(this).attr("data-toggle-title", currentTitle);
		
		$(this).parent().next().toggleClass("active");
		$(this).parent().next().slick('setPosition');
		
		
	});
	
	// player
	$('.example-item').on("click", function(){
		$('.example-item').not($(this)).removeClass("playing");
		$(this).toggleClass("playing");
	});
	
	$('.track-item').on("click", function(){
		$('.track-item').not($(this)).removeClass("playing");
		$(this).toggleClass("playing");
	});
	
	// spinner
	$('[data-animation="spin"]').on('inview.uk.scrollspy', function() {
		$this = $(this);
		   $this.spincrement({
				 thousandSeparator: " ",
				 duration: $this.data("duration")
			});
    });
	 
	 // Что может звучат в эфире
	$('.live-item').on('mouseenter', function() {
		$this = $(this);
		$this.siblings().addClass("live-item--small");
		$this.addClass("live-item--active");
   });
	$('.live-item').on('mouseleave', function() {
		$this = $(this);
		$this.siblings().removeClass("live-item--small");
		$this.removeClass("live-item--active");
   });
	 
	 // tabs
	$('.tab-nav > li').on('click', function(e) {
		e.preventDefault();
		var tabIndex = $(this).index(),
			 tabPane = $(this).closest(".tabs").find(".tab-pane");
		
		$(this).siblings().removeClass("active");
		tabPane.removeClass("active");
		
		$(this).addClass("active");
		tabPane.eq(tabIndex).addClass("active");
		
		
	});
	
	 // FORM VALIDATION
    $(function() {
        //flick('.error_msg', 1000);
		  
        $('.ajax_form').submit(function() {
			  
            var form = $(this),
                action = form.attr('action'),
                msg = form.serialize(),
                req = form.find('.required'),
                req_num = 0,
                req_summ = req.length;
					 
            req.focus(function(event) {
                $(this).removeClass('error').next('.error_msg').remove();
            });
				
            // if (req_summ == req_num) {
            if ($('[name="name"]').val() && $('[name="phone"]').val() || $('[name="email"]').val()) {
                // alert('поздравляем! вы заполнили все поля. теперь, если вы не против мы отправим форму... ))');
                // НЕ УДАЛЯТЬ !!!
                $.ajax({
                    url: action,
                    data: msg,
                    success: function(data) {
                        // console.log(data);
                        form[0].reset();
                        form.addClass('form_sent');
                        form.find('.required').removeClass('error');
                        form.find('.error_msg').remove();
								setTimeout(function(){
									form.removeClass('form_sent');
								}, 3000); 
                    },
                    error: function(xhr, str) {
                        alert('Возникла ошибка: ' + xhr.responseCode);
                    }
                })
            } 
				
				else {
                req.each(function(i, elem) {
                    var inpt_val = $(this).val(),
                        top = $(this).offset().top,
                        left = $(this).offset().left,
                        erroe_msg = $(this).data('required'),
                        error_elem = '<div class="error_msg">' + erroe_msg + '</div>';
                    if (inpt_val) {
                        $(this).removeClass('error');
                        $(this).next('.error_msg').remove();
                        req_num += 1;
                    } else {
                        // if ($(this).attr('name') == 'phone') {

                        // }
                        if (!$(this).hasClass('error')) {
                            // $(this).attr('placeholder', '');
                            $(this).addClass('error');
                            $(this).after(error_elem).fadeIn();
                        }
                    }
                });
            };
            return false;
        });
        $(document).click(function(event) {
            if ($(event.target).closest(".contacts__form").length && !$(event.target).closest(".contacts__form").hasClass('form_sent')) return;
            $('.contacts__form').removeClass('form_sent')
            event.stopPropagation();
        });
        $('.contacts__form input, .contacts__form textarea').focus(function() {
            $('.contacts__form').find('.required').removeClass('error');
            $('.contacts__form').find('.error_msg').remove();
        });
    })

	 $(".form-control").on('focus', function() {
		$(this).next('.placeholder').fadeOut(200);
	 });
	 $(".form-control").on('blur', function() {
		if (!$(this).val()) {
			 $(this).next('.placeholder').fadeIn(200);
		}
	 });
	 
	 
    // VALIDATION ANIMATION RESET
    $(document).click(function(event) {
        if ($(event.target).closest('form').length) return;
        $('form').find('.required').removeClass('error');
        $('form').find('.error_msg').remove();
        event.stopPropagation();
    });
	 
	  
	  // фильтрация ввода в поля
	$('.input-count').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;	
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar))	return false;
	});
		
	
});
