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
		 iconArrow = '<svg class="icon icon-arrow"><use xlink:href="' + srcIcons + '#icon-arrow"/></svg>',
		 btnClose = '<button type="button" data-fancybox-close class="btn-close fancybox-button fancybox-close-small" title="Закрыть">' +
			'<svg class="icon icon-close"><use xlink:href="' + srcIcons + '#icon-close"/></svg>' + 
			"</button>";
	
	 //Набор текста 
	 
	var typedText = ".text-typing",
		 dataText = ($(typedText).attr("data-text")).toString();
		 
	var typedOptions = {
	  strings: ["", dataText],
	  typeSpeed: 90,
	  backDelay: 200,
	  smartBackspace: false,
	  onComplete: function(){ 
			//$(typedText).next().addClass("typed-cursor--hidden");
	  }
	}
	
	var typed = new Typed(typedText, typedOptions); 
	
	
	
	// Инициализация карусели (плагин Owl Carousel)

	function changeCarouselNumber(currentEvent){
		$(currentEvent.target).next(".carousel-count").html(
				 ($(currentEvent.target).find(".owl-dot.active").index() + 1) + 
				 ' / <span>' + $(currentEvent.target).find(".owl-dot").length + '</span>');
	}
	
	if ($(".works__carousel-items").length){
		var $worksCarousel = $(".works__carousel-items");
		$worksCarousel.owlCarousel({
			items: 1,
			nav:true,
			navText: [iconArrow, iconArrow],
			loop: true,
			dots: true,
			margin: 15,
			mouseDrag: false,
			onInitialized: function(event){
				changeCarouselNumber(event);
				$(event.target).next(".carousel-count").addClass("active");
			},
			onChanged: function(event){
				changeCarouselNumber(event);
			},
			onResized: function(event){
				 changeCarouselNumber(event);
			},
			responsive:{
				520:{
					slideBy: 2,
					items: 2,
					margin: 20
				},
				768:{
					slideBy: 3,
					items: 3,
					margin: 20
				},
				1200:{
					margin: 65,
					slideBy: 3,
					items: 3
				}
			}
		});
	}
	
	if ($(".services__carousel").length){
		var $tabItem = $('.tab-nav__item'),
			 $servicesCarousel = $('.services__carousel');
			 
			 
		$servicesCarousel.on('initialized.owl.carousel', function(event) {
			callbackServices (false);
			
		});
		
		$servicesCarousel.owlCarousel({
			items: 1,
			nav:true,
			navText: [iconArrow, iconArrow],
			loop: true,
			dots: true,
			mouseDrag: false,
			margin: 15,
			onInitialized: function(event){
				changeCarouselNumber(event);
				 $(event.target).next(".carousel-count").addClass("active");
			}
		});
		
		function callbackServices (currentEvent){
			var index = 0;
			
			if (currentEvent == "scroll"){
				index = $('.tab-nav__item.active').index();
			} 
			
			else if (currentEvent == false){
				index = 0;
			} 
			
			else{
				index = currentEvent.page.index
			}
			
			$tabItem.removeClass("active");
			$tabItem.eq(index).addClass("active");
			
			var posTabs = $tabItem.closest(".tab-nav__items").offset().left,
				 tabItemPos = $tabItem.eq(index).offset().left,
				 $line = $(".tab-nav__line"),
				 linePos = tabItemPos - posTabs;
				
			
			$line.width($tabItem.eq(index).innerWidth()).css("left", linePos + "px");
		}
		
		$servicesCarousel.on('changed.owl.carousel resized.owl.carousel', function(event) {
			callbackServices (event);
			changeCarouselNumber(event);
		});
		
		$(".tab-nav__items").on("scroll resize", function(){
			callbackServices ("scroll");
		});
		
	}
	
	if ($(".team__items").length){
		$(".team__items").owlCarousel({
			nav:true,
			navText: [iconArrow, iconArrow],
			loop: true, 
			mouseDrag: false,
			autoWidth:true,
			variableWidth: true,
			responsive:{
				1020:{
					//items: 5,
					loop: false
					//center:true
				}
			}
		});
	}
	
	if ($(".calculation__carousel-items").length){
		var $calculationCarousel = $(".calculation__carousel-items");
		
		$calculationCarousel.owlCarousel({
			items: 1,
			nav:true,
			navText: [iconArrow, iconArrow],
			loop: true,
			dots: true,
			margin: 19,
			//touchDrag: false,
			mouseDrag: false,
			onInitialized: function(event){
				changeCarouselNumber(event);
				 $(event.target).next(".carousel-count").addClass("active");
			},
			onChanged: function(event){
				 changeCarouselNumber(event);
			},
			onResized: function(event){
				 changeCarouselNumber(event);
			},
			responsive:{
				900:{
					items: 2,
					slideBy: 2
				},
				1200:{
					items: 3,
					slideBy: 3
				}
			}
		});
		
	}
	
	// Инициализация селекта (плагин Selectric) 
	$('select').selectric();
	
	// Инициализация Fancybox
	function beforeShow(){
		 $(".header, .nav-panel").addClass("compensate-for-scrollbar");
	 }
	 
	 $('[data-fancybox]').fancybox({
		 animationEffect: "fade",
		 backFocus : false,
		 hash: false,
		  beforeShow : function(){
			 beforeShow();
		 },
		 btnTpl: {
			 smallBtn: btnClose
		 }
	});
	
	// Добавление анимации
	$('.animation').viewportChecker({
		classToAdd: 'visible animated',
		offset: 70
	});
	$('.services').viewportChecker({
		classToAdd: 'visible animated',
		offset: 50,
		callbackFunction: function(elem, action){
			$(".about__sphere").addClass("animated");
			$(".online-shop__sphere").addClass("animated");
		}
	});
	$('.online-shop').viewportChecker({
		classToAdd: 'visible animated',
		offset: 50,
		callbackFunction: function(elem, action){
			setTimeout(function(){
				var parallax1 = document.getElementById('parallax-1');
					 
				var parallaxInstance1 = new Parallax(parallax1, {
				  //relativeInput: true
				});
				
			}, 2100);
			
		}
	});
	
	$('.order').viewportChecker({
		classToAdd: 'visible animated',
		offset: 50,
		callbackFunction: function(elem, action){
			$(".order .form-group__block, .order .selectric .label, .order__img, .order__info").addClass("animated");
			setTimeout(function(){
				$(".order .form-group__block").addClass("completed");
			}, 1500);
		}
	});
	
	
	/* Тултип */
	$('.tooltip').tooltipster({
		trigger: 'click',
		side: ['bottom', 'top', 'right', 'left']
	});
	
	

	// window resize
	function windowSize(){
		var $width = $(window).width();

		if ($width <= 767){

		}
		else{

		}
		
		
		if ($('.advantages__items').length){
			var calculationCarousel = '.advantages__items';
			if ($width <= 575){
				if (!$(calculationCarousel + '.owl-loaded').length){
					$(calculationCarousel).owlCarousel({
						items: 1,
						nav: false,
						loop: true,
						dots: true,
						onInitialized: function(event){
							 $(calculationCarousel).next(".carousel-count").html(1 + ' / <span>' + event.item.count + '</span>').addClass("active");
						},
						onChanged: function(event){
							 $(calculationCarousel).next(".carousel-count").html(++event.page.index + ' / <span>' + event.item.count + '</span>');
						}
					});
				}
			}
			else{
				if ($(calculationCarousel + '.owl-loaded').length){
					$(calculationCarousel).trigger('destroy.owl.carousel');
				}
			}
		}
		
		if ($('.module-item').length){
			$('.module-item').each(function(){
				if ($(this).find(".module-item__title").height() <= 35){
					$(this).addClass("module-item--indent");
				}
			});
		}
		
		if ($('.calculation__additional').length){
			if ($width <= 575){
				$('.calculation__included').after($('.calculation__additional'));
			}
			else {
				$('.calculation__row').prepend($('.calculation__additional'));
			}
		}
		
		if ($('.other-service-item').length){
			$(".other-service-item").each(function(){
				$(this).find(".other-service-item__content > div").innerWidth($(this).width());
			});
		}
		
		if ($('.form-group__block').length){
			$(".form-group__block").each(function(){
				$(this).css("width", "auto");
				$(this).children("div").innerWidth($(this).width());
				$(this).removeAttr("style");
			});
		}
		if ($('.order__info').length){
			$(".order__info").each(function(){
				$(this).css("width", "auto");
				$(this).children("div").innerWidth($(this).width());
				$(this).removeAttr("style");
			});
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
	
	/* Переключение слайдера через табы */
	
	$('.tab-nav__item').on('click', function() {
		$(".services__carousel").trigger('to.owl.carousel', parseInt($(this).attr("data-slide") - 1));
	});

	
	/* Переключение чекбокса */
	
	$('.module-item__checkbox').on('change', function() {
		if ($(this).prop("checked") == true){
			$(this).closest(".module-item").addClass("module-item--checked");
		}
		else{
			$(this).closest(".module-item").removeClass("module-item--checked");
		}
	});
	
	// навигация
	
	$(".menu__link, .service-item__link-nav").on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("href"),
			 navBlock = $(id).offset().top;
		
	   $("html, body").animate({scrollTop: navBlock}, 800);
	});

	
	// Открытие / закрытие меню
	/*
	$('.header__btn-toggle').on('click', function() {
		$("body").toggleClass("open-menu");
	});
	$('.mobile-menu__btn-close').on('click', function() {
		$("body").removeClass("open-menu");
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
				 
				if (($this.attr("id") == "form-callback") || ($this.attr("id") == "form-modal-calc")){
					$this.find(".form-control").val("");
					$this.closest(".fancybox-container").addClass("modal-success"); 
				}
				else{
					$.fancybox.open({
						src  : "#modal-thanks",
						type : 'inline',
						baseClass: "modal-success",
						touch: false,
						animationEffect: "fade",
						backFocus : false,
						hash: false,
						beforeShow : function(){
						  beforeShow();
					   },
					 	 btnTpl: {
							 smallBtn: btnClose
						 }
					});
				}
				
			}
		 });
	 }); 
	
	// инициализация маски телефона (плагин maskedinput)
	 $('.phone-mask').mask('+7 - 000 - 00 - 00');
	
});


/*	Particles Sphere [ CANVAS ]
 *	===========================
 *	To Do:
 *
 *	Comment code.
 *	Correct RGB color generator.
 *	Add interactive menu.
 *	Background color changer.
 *	Optimize.
 */


var color 						= true;
var particle_number 	=500;
var update_frequency 	= 60 / 1000;

var angle_demul = 500;
var z_angle_demul = 150;
var max_radius = 4;
var min_radius = 0.5;

window.onload = function() {
  
  // Get canvas.
  var canvas = document.getElementById("drawable");

  // Get canvas context.
  var canvas_ctx = canvas.getContext('2d');

  // Set size.

  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
  

	var center_x =  canvas.width / 2;
	var center_y =  canvas.height / 2;
	
	var max_x = center_x;
	var max_y = center_y;
	
	var range = ( max_x > max_y ) ? max_y : max_x ;
 
  // Generate particles
  var particles = [];

  GenerateParticles( particle_number );
  
  // OBJECTS
  function Particle(){
    this.angle = Math.random() * 2 * Math.PI;
    this.vangle = Math.random() / angle_demul;
		this.zangle = Math.random() * 2 * Math.PI;
		this.zvelangle = Math.random() / z_angle_demul;
    this.x;
    this.y;
    this.r = max_radius*Math.random();
	this.color = (color) ? "rgba(255,102," + Math.round(255*Math.random()) + "," + Math.random() +")" : "white";
		
    this.Move = function(){
      
			// Update coordinates
      this.y = center_y + range*Math.cos(this.angle);
      this.x = center_x + range*Math.cos(this.zangle)*Math.sin(this.angle);
      
			// Update angle
      this.angle += this.vangle;
			this.zangle += this.zvelangle;
			
			// Change radius on Z axis
			if( Math.sin(this.zangle) > 0.5 && this.r < max_radius )
				this.r += 0.01;
			else if( this.r > min_radius )
				this.r -= 0.01;
    
    }
  }

  // FUNCTIONS
  function UpdateCanvas() {

    ClearBackground();
    UpdateParticles();
    
  }

  function ClearBackground() {
    canvas_ctx.fillStyle = "rgb(255,255,255)";
    canvas_ctx.fillRect( 0, 0, canvas.width, canvas.height );
  }
  
  function UpdateParticles(){
    for( var index in particles ){
      particles[index].Move();
      DrawParticle(particles[index]);
    }
  }
  
  function DrawParticle(particle){
    canvas_ctx.beginPath();
    canvas_ctx.fillStyle = particle.color;
		canvas_ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI*2); 
    canvas_ctx.fill();
  }
  
  function GenerateParticles( num_particles ){
    
    for( var i = 0; i < num_particles; i++ ){
      particles.push( new Particle() );
    }
    
    setInterval( UpdateCanvas, update_frequency );
  }
   
}

