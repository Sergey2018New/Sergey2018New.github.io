$(document).ready(function () {

	svg4everybody({});

	const iconClose = '<svg viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg"><path d="M10 1.17838L8.82162 0L4.99999 3.82161L1.17838 0L0 1.17838L3.82161 4.99999L0 8.82162L1.17838 10L4.99999 6.17839L8.8216 10L9.99997 8.82162L6.17839 4.99999L10 1.17838Z"/></svg>'; 
	

	// Инфициализация модального окна (Jquery Modal)
	$('a[data-modal]').on("click", function() {
		$(this).modal({
			closeText: iconClose,
		});
		return false;
	});

	// Инициализация всплывающего окна (плагин Tooltipster)

	function initTooltip(){
		if ($('[data-tooltip]').length){
		 $('[data-tooltip]').each(function () {
		   
		   var $this = $(this),
			   trigger = $this.attr("data-tooltip-trigger"),
			   theme = $this.attr("data-tooltip-theme");
			   
		   if (!$this.hasClass("tooltipstered")){
				 if (trigger === undefined){

				 if (device.desktop()){
				   trigger = "hover";
				 }
				 else{
				   trigger = "click";
				 }
			   }
			   if (theme === undefined){
				 theme = "default";
			   }

			   $this.tooltipster({
				 theme: theme,
				 distance: 6,
				 trigger: trigger,
				 contentAsHTML: true,
				 side: ['top', 'bottom',  'right', 'left'],
				 functionPosition: function(instance, helper, position){
				   //position.coord.left =  $(helper.origin).offset().left;
				   return position;
				 }
				 //anchor: 'top-left'
			   });
		   }
			
		   
		 });
	   }
   }
   initTooltip();


	var $grid = $('.main_gallery__blocks').masonry({
		itemSelector: '.main_gallery__block',
		columnWidth: '.main_gallery__block',
		percentPosition: true
	})

	$('.head__dropdown-btn').on('click',function(){
		var button = $(this);
		var box = $(this).siblings(".head__dropdown-menu");
		if (button.hasClass("active")) {
			button.toggleClass("active");
			box.fadeOut();
		} else {
			button.addClass("active");
			box.fadeIn();
		}
	})
	$(document).mouseup(function (e) {
		var container = $(".head__dropdown");
		var button = container.find(".head__dropdown-btn");
		var box = container.find(".head__dropdown-menu");
		if (container.has(e.target).length === 0) {
			button.removeClass("active");
			box.fadeOut();
		}
	});

	$('.user_info__links-favorites').on('click',function(){
		if ($(this).hasClass("added")) {
			$(this).toggleClass("added");
		} else {
			$(this).addClass("added");
		}
	})


	$('.photographer_page').each(function() {
		let ths = $(this);
		ths.find('.photographer_page__tab').not(':first').hide();
		ths.find('.photographer_page__nav-item').click(function() {
			$grid.masonry('layout');


			ths.find('.photographer_page__nav-item').removeClass('active').eq($(this).index()).addClass('active');
			ths.find('.photographer_page__tab').hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass('active');
	});

	$('.photo_page__links-item').on('click',function(){
		if ($(this).hasClass("active")) {
			$(this).toggleClass("active");
		} else {
			$(this).addClass("active");
		}
		return false;
	});

	$('.photo_page__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	$('.about_pro__progress-scale').each(function() {
		let data = $(this).attr("data-percent");
		let line = $(this).find("span");
		line.css("width", data + "%");
	});

	$( ".ui-selectmenu" ).selectmenu();

	// Показать/скрыть пароль
	$(document).on('click', ".form-input-password__btn-visible", function(){
		$(this).toggleClass("active");
		if ($(this).hasClass("active")){
			$(this).closest(".form-input-password").find(".form-input-box__input").attr("type", "text");
		}
		else{
			$(this).closest(".form-input-password").find(".form-input-box__input").attr("type", "password");
		}
	}); 

	// Круговая диаграмма 
	var Circle = function(sel){
		var circles = document.querySelectorAll(sel);
		[].forEach.call(circles,function(el){
			var valEl = parseFloat(el.innerHTML);
			valEl = valEl*188/100;
			el.innerHTML = '<svg width="68" height="68"><circle transform="rotate(-90)" r="30" cx="-34" cy="34" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 188px;" r="30" cx="-34" cy="34" /></svg>';
			
		});
	}; 
	Circle('.circle-diagram'); 

	// Удалить сообщение
	$(document).on("click", ".message-item__remove", function() {
		$("#modal-remove-message").modal({
			closeText: iconClose,
		});
		return false;
	});


});