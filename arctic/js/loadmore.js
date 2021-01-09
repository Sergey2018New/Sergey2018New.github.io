$(document).ready(function() {

	  $(document).on("click", '.media-articles__load-more', function(){
		var scrollTop = $(window).scrollTop();
		var button = $(this),
			items = button.closest(".media-articles").find(".media-articles__items"),
		    data = {
			action: 'loadmore',
			query: loadmore_params.posts, // that's how we get params from wp_localize_script() function
			page : loadmore_params.current_page,
			filter : getAllUrlParams().filter
		};    
		console.log(loadmore_params);
 
		$.ajax({ // you can also use $.post here
		 
			url : loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',  
			beforeSend : function ( xhr ) {
				button.find("span").text('Loading...'); // change the button text, you can also add a preloader image
			},
			success : function( data ){
				console.log(loadmore_params.max_page);
				if( data ) { 
					button.find("span").text( 'Load more' ); 
					items.append(data);  
					loadmore_params.current_page++; 
					
					if (loadmore_params.current_page >= items.attr("data-max-items") ) 
						button.closest(".media-articles__load").remove(); // if last page, remove the button
 
					// you can also fire the "post-load" event here if you use a plugin that requires it
					// $( document.body ).trigger( 'post-load' );
					
					$(window).scrollTop(scrollTop);
				} else {
					button.closest(".media-articles__load").remove(); // if no data, remove the button as well
				} 
				
			}
		});
	});



	function getAllUrlParams(url) { 

	  // извлекаем строку из URL или объекта window
	  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

	  // объект для хранения параметров
	  var obj = {};

	  // если есть строка запроса
	  if (queryString) {

		// данные после знака # будут опущены
		queryString = queryString.split('#')[0];

		// разделяем параметры
		var arr = queryString.split('&');

		for (var i=0; i<arr.length; i++) {
		  // разделяем параметр на ключ => значение
		  var a = arr[i].split('=');

		  // обработка данных вида: list[]=thing1&list[]=thing2
		  var paramNum = undefined;
		  var paramName = a[0].replace(/\[\d*\]/, function(v) {
			paramNum = v.slice(1,-1);
			return '';
		  });

		  // передача значения параметра ('true' если значение не задано)
		  var paramValue = typeof(a[1])==='undefined' ? true : a[1];

		  // преобразование регистра
		  paramName = paramName.toLowerCase();
		  paramValue = paramValue.toLowerCase();

		  // если ключ параметра уже задан
		  if (obj[paramName]) {
			// преобразуем текущее значение в массив
			if (typeof obj[paramName] === 'string') {
			  obj[paramName] = [obj[paramName]];
			}
			// если не задан индекс...
			if (typeof paramNum === 'undefined') {
			  // помещаем значение в конец массива
			  obj[paramName].push(paramValue);
			}
			// если индекс задан...
			else {
			  // размещаем элемент по заданному индексу
			  obj[paramName][paramNum] = paramValue;
			}
		  }
		  // если параметр не задан, делаем это вручную
		  else {
			obj[paramName] = paramValue;
		  }
		}
	  }
 
	  return obj;
	}
});
