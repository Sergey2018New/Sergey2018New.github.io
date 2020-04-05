$(document).ready(function() {

	// инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();
	
	// Добавление классов устройства и браузера в документе (плагин Detect.js)
	var user = detect.parse(navigator.userAgent);
	$("html").addClass(user.browser.family)
			 .addClass(user.os.family)
			 .addClass(user.device.type);
	

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
	
	$(window).on("load scroll", function(){
		var windowScroll = $(window).scrollTop(),
			blockOffset = $(".wrapper").offset().top + $(".header").innerHeight() + 100;
			
		if (windowScroll >= blockOffset){
			$(".header").addClass("fixed");
		} 
		else{
			$(".header").removeClass("fixed");
		}
	});
	
	
	
	
	/* Инициализация выпадающего списка (плагин selectric) */
	if ($('.select').length){
		$('.select').selectric({
			maxHeight: 56 * 5
		}); 
	}
	
	/* инициализация маски телефона (плагин maskedinput) */
	 $('.phone-mask').mask('+7 (000) 000-00-00');
	 
	 
	/* Вкладки */
	$(document).on('click', '.tab-nav > li', function() {
		var tabId = $(this).attr("data-tab");
		
		$("#" + tabId).siblings().removeClass("active");
		$("#" + tabId).addClass("active");
		
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
	}); 
	   
	 
	/* Выбор radio button */
	$(".calc__select-img img").on("click", function(){
		$(this).closest(".calc__select-item").find('input[type="radio"]').prop("checked", true);
	});
	
	/* UI slider */
	 $(".slider").each(function(){
		 var $this = $(this),
			  handle = $this.find(".ui-slider-handle"),
			  valueCurrent = parseInt($this.attr("data-value")),
			  valueMin = parseInt($this.attr("data-value-min")),
			  valueMax = parseInt($this.attr("data-value-max")); 
		 
		 $(this).slider({
			range: "min",
			value: valueCurrent, 
			min: valueMin,
			max: valueMax, 
			create: function() {
				handle.html('<span>До ' + $( this ).slider( "value" ) + ' тонн</span>');
			},
			slide: function( event, ui ) {
			  handle.html('<span>До ' + ui.value + ' тонн</span>');
			} 
		 });
		 //$this.val( "$" + $( "#slider-range-min" ).slider( "value" ) );
	 });
	 
	 
	/* Прикрепить файл */
	 
	$('input[type="file"]').change(function(e){
		$(this).closest('.form-attach').find('span').text(e.target.files[0].name);
	}); 
	
});
