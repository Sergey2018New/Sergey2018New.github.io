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
	
	/* Калькулятор итоговой цены*/
	
	// Общие переменные
	var $orderMaterial = $("#order-material"),
		 $orderSpecies = $("#order-species"),
		 $orderVolume = $("#order-volume"),
		 $orderWidth = $("#order-width"),
		 $orderThickness = $("#order-thickness"),
		 $orderTotal = $("#order-total");
		 
	var $formSpecies = $(".calculation__parameters-species"),
		 $formGrade = $(".calculation__parameters-grade"),
		 $formSize = $(".calculation__parameters-size");
	
	// Обработка клика при выборе материала
	$('.material-item__btn-select').on("click", function (e){
		var $materialItem = $(this).closest(".material-item"),
			 materialName = $materialItem.attr("data-material"),
			 materialTitle = $materialItem.find(".material-item__title").text(),
			 materialImageSrc = $materialItem.find(".material-item__img img").attr("src");
		
		$materialItem.siblings().removeClass("active");
		$materialItem.addClass("active");
		
		$(".calculation__product-title").html(materialTitle);
		$orderMaterial.text(materialTitle);
		$(".calculation__product-img img").attr("src", materialImageSrc);
		
		$("html, body").animate({scrollTop: $(".calculation__step--2").offset().top - 100}, 600);
		getDataCalc(materialName);
	}); 
	
	 // плагин jquery ui spinner
	 $( ".spinner" ).each(function(){
		 var $this = $(this);
		 $this.spinner({
			 numberFormat: "n",
			 min: $this.attr("data-min"),
			 max: $this.attr("data-max")
		 });
		 $this.on("change", function(){
			 if ($(this).val() < $this.attr("data-min")){
				 $(this).val($this.attr("data-min"));
			 }
			 if ($(this).val() > $this.attr("data-max")){
				 $(this).val($this.attr("data-max"));
			 }
		 });
	 });
	 
	 $( ".spinner" ).on("spinstop", function( event, ui ) {
		 calc();
		 $orderVolume.text(event.currentTarget.value);
	 });

	 // Расчет при изменении типа покраски
	 $('input[name="painting"]').on("change", function(){
		 calc();
	 });
	 
	// 
	getDataCalc();
	
	function getDataCalc(currentMaterialName = "lining"){ 
		$.getJSON('data.json', function(data) {
			var $formOrder = $(".calculation__form");
			
			if (data[currentMaterialName]){
				$formOrder.removeClass("not-calc");
				
				
				var resultSpecies = "",
					 resultGrade = "",
					 resultSize = "";

				printSpecies();
				printGrade();
				printSize();
				
				selectricSpecies();
				selectricGrade();
				selectricSize();
				
				function printSpecies(){
					resultSpecies = '<select>';
					for (var i=0; i<data[currentMaterialName].length; i++){
						resultSpecies += '<option>' + data[currentMaterialName][i].name + '</option>';
					}
					resultSpecies += '</select>';
					$formSpecies.html(resultSpecies);
				}
				
				function printGrade(indexSpecies = 0){
					resultGrade = '<select>';
					for (var i=0; i<data[currentMaterialName][indexSpecies].grade.length; i++){
						resultGrade += '<option>' + data[currentMaterialName][indexSpecies].grade[i].name + '</option>';
					}
					resultGrade += '</select>';
					$formGrade.html(resultGrade);
				}
				
				function printSize(indexSpecies = 0, indexGrade = 0){
					resultSize = '<select>';
					
					var currentThickness,
						 currentWidth;
						 
					for (var i=0; i<data[currentMaterialName][indexSpecies].grade[indexGrade].options.length; i++){
						currentThickness = data[currentMaterialName][indexSpecies].grade[indexGrade].options[i].thickness;
						currentWidth = data[currentMaterialName][indexSpecies].grade[indexGrade].options[i].width;
						
						resultSize += '<option value="' + data[currentMaterialName][indexSpecies].grade[indexGrade].options[i].price +
						'" data-thickness = "' + currentThickness + '" data-width="' + currentWidth + '">' 
						+ currentThickness + 'x' + currentWidth +
						'</option>';
					}
					resultSize += '</select>';
					$formSize.html(resultSize);
				}
				
				function selectricSpecies(){
					$formSpecies.find("select").selectric({ 
						 onChange: function(element) {
							var index = $(element).find("option:selected").index();
							printGrade(index);
							printSize(index);
							
							selectricGrade();
							selectricSize();
							
							calc();
						 }
					}); 
				}
				
				function selectricGrade(){
					$formGrade.find("select").selectric({ 
						 onChange: function(element) {
							var index1 = $formSpecies.find("option:selected").index(),
								 index2 = $formGrade.find("option:selected").index();
							
							printSize(index1, index2);
							selectricSize();
							calc();
						 }
					}); 
				}
				
				function selectricSize(){
					$formSize.find("select").selectric({ 
						 onChange: function(element) {
							calc();
						 }
					}); 
				}
				
				
			}
			else{
				$formOrder.addClass("not-calc");
			}
			calc();
		
			
      });
	}
	
	
	// Функция расчета
	function calc(){
		var $selectSize = $(".calculation__parameters-size select"),
			 $volumeInput = $('input[name="volume"]'), 
			 $paintingCheckbox = $('input[name="painting"]:checked'), 
			 volumeValue = $volumeInput.val(), 
			 total = 0;
			 
		total += ($selectSize.find("option:selected").val() * volumeValue);
		total += ($paintingCheckbox.attr("data-value") * volumeValue);
		
		if (!$(".calculation__form.not-calc").length){
			$orderTotal.html('от <span>' + total + '</span> рублей');
		}
		else{
			$orderTotal.html('по запросу'); 
		}
		
		 $orderSpecies.text($formSpecies.find("option:selected").val());
		 $orderWidth.text($formSize.find("option:selected").attr("data-width"));
		 $orderThickness.text($formSize.find("option:selected").attr("data-thickness"));
		 
	}
	
});
