$(document).ready(function() {

	// SVG в IE (plugin svg4everybody)
	svg4everybody();

  // Variables
  const IS_ACTIVE = 'is_active';
  const IS_ACTIVE_MENU = 'is_active_menu';
	const IS_HOVER = 'is_hover';
	const WINDOW_WIDTH = $(window).outerWidth();

	const ICON_ARROW = '<svg viewBox="0 0 22 8" xmlns="http://www.w3.org/2000/svg"><path d="M21.3536 3.64645C21.5488 3.84171 21.5488 4.15829 21.3536 4.35356L18.1716 7.53554C17.9763 7.7308 17.6597 7.7308 17.4645 7.53554C17.2692 7.34027 17.2692 7.02369 17.4645 6.82843L20.2929 4L17.4645 1.17157C17.2692 0.976312 17.2692 0.65973 17.4645 0.464468C17.6597 0.269205 17.9763 0.269205 18.1716 0.464468L21.3536 3.64645ZM4.37114e-08 3.5L21 3.5L21 4.5L-4.37114e-08 4.5L4.37114e-08 3.5Z"/></svg>';

	// Fancybox
  $('[data-fancybox]').fancybox({
    backFocus: false
  });

	// window resize
	function windowResize(){
	var $width = $(window).outerWidth();
		if ($width <= 767){

		}
		else{

		}
	}
	windowResize();
	$(window).on('resize', windowResize);

	// window scroll
	$(window).on("load scroll", function(){
		var windowScroll = $(window).scrollTop();
		var $header = $(".header--home");

		if ($header.length){
      if (windowScroll >= $header.innerHeight()){
        $header.addClass("header--fixed").removeClass("header--static");
      }
      else{
        $header.addClass("header--static").removeClass("header--fixed");
      }
		}

	});

	// Header Menu
  $(document).on('click', '.header__toggle-menu', function () {
    $("body").addClass(IS_ACTIVE_MENU);
  });
  $(document).on('click', '.nav-mobile__close, .site-overlay', function () {
    $('body').removeClass(IS_ACTIVE_MENU);
  });

  $(".header__menu .menu__submenu li").removeClass("menu__item menu__item--active menu__item--dropdown");
  $(".header__menu .menu__submenu a").removeClass("menu__link");
  $(".header__menu .menu__submenu a .icon:nth-last-child(-n+2)").remove(); 
  if (WINDOW_WIDTH < 992){
    $(".nav-mobile__menu").append($(".header__menu .menu"));
  }
  else{
    $(".header__menu").append($(".nav-mobile__menu .menu"));
  }

  $(window).on('resize', function () {
    var width = $(window).outerWidth();
    if (width < 992){
      $(".nav-mobile__menu").append($(".header__menu .menu"));
    }
    else{
      $(".header__menu").append($(".nav-mobile__menu .menu"));
    }
  });

  $(document).on('click', '.nav-mobile__menu .menu__item--dropdown .menu__link', function (e) {
    e.preventDefault();
    $(this).closest(".nav-mobile").addClass("nav-mobile--active-submenu");
    $(this).closest(".menu__item--dropdown").addClass(IS_ACTIVE);
  });
  $(document).on('click', '.nav-mobile__back', function () {
    $(this).closest(".nav-mobile").removeClass("nav-mobile--active-submenu");
    $(this).closest(".nav-mobile").find(".menu__item--dropdown").removeClass(IS_ACTIVE);
  });

	// Footer Menu
  $(document).on('click', '.footer__title', function () {
    var width = $(window).outerWidth();
    if (width < 576){
      $(this).toggleClass(IS_ACTIVE);
      $(this).next(".footer__block").slideToggle(300);
    }
  });
  $(window).on('resize', function () {
    var width = $(window).outerWidth();
    if (width >= 576){
      $(".footer__title").removeClass(IS_ACTIVE);
      $(".footer__block").removeAttr("style");
    }
  });

  // New Toggle
  $(document).on('click', '.new-item__header', function () {
    var $header = $(".header"),
        $this =  $(this),
        positionScroll = 0;

    $this.closest('.new-item').siblings()
      .removeClass(IS_ACTIVE)
      .find('.new-item__content').slideUp(300);
    $this.closest('.new-item').toggleClass(IS_ACTIVE);
    $this.next('.new-item__content').slideToggle(300);
    setTimeout(function () {
      positionScroll = $this.closest('.new-item').offset().top - $header.innerHeight() - 20;
      if ($(window).scrollTop() > positionScroll){
        $("html, body").animate({scrollTop: positionScroll}, 500);
      }
    }, 300);
  });
  $(document).on('click', '.new-item__close', function () {
    $(this).closest('.new-item').removeClass(IS_ACTIVE);
    $(this).closest('.new-item').find('.new-item__content').slideUp(300);
  });


  // Owl carousels
  if ( $('.services__carousel').length) {
    $('.services__carousel').owlCarousel({
      margin:10,
      loop:false,
      autoWidth:true,
      items:4,
      dots:false,
      responsive : {
        576: {
          margin:20
        }
      }
    })
  }

  if ( $('.about__history').length) {
  	var aboutCarousel = '.about__history';
  	var aboutCarouselOptions = {
      margin:0,
      loop:false,
      autoWidth:true,
      items:4,
      dots:false
    };
  	if ($(window).outerWidth() < 992 && !$(aboutCarousel).hasClass("owl-loaded")){
      $(aboutCarousel).owlCarousel(aboutCarouselOptions);
		}

    $(window).on('resize', function () {
      var width = $(window).outerWidth();
      if (width < 992){
        if (!$(aboutCarousel).hasClass("owl-loaded")){
          $(aboutCarousel).owlCarousel(aboutCarouselOptions);
        }
			}
			else{
        if ($(aboutCarousel).hasClass("owl-loaded")){
          $(aboutCarousel).trigger('destroy.owl.carousel');
        }
			}
    });
  }

  if ( $('.gallery__carousel').length) {
    $('.gallery__carousel').owlCarousel({
      margin:15,
      loop:false,
      items:1,
      dots:false,
      nav: true,
      navText: [ICON_ARROW,ICON_ARROW],
      responsive : {
        481: {
          items:2
        },
        576: {
          margin: 20,
          items:2
        },
        768: {
          margin: 20,
          items:3
        }
      }
    })
  }
  
  if ($(".breadcrumb").length){
	  $(".breadcrumb").find("li.paged").remove(); 
  }
  
  
	
});
