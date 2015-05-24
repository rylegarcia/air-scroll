$.fn.airScroll = function(option){

	var progress = {};

	progress.pageHeight = $(this).height();
	progress.windowHeight = $(window).height();
	// progress.startScroll = $(this).position();
	progress.divHeight = $(this).outerHeight();
	console.log(progress.pageHeight)

	progress.events = function(){
		$(window).on('scroll',function(){
			var currentScroll = $(document).scrollTop();
			var itemSize = $('.balloon-container img').height();
			// var scrollPercentage = ((progress.divHeight - progress.windowHeight)) * 100;
			var scrollPercentage = (currentScroll / progress.pageHeight) * 448;
			// (currentScroll - progress.ratio) * 100;
			$('.balloon-container img').css({
									'top': scrollPercentage
								});
			console.log(scrollPercentage);
		});
	};

	progress.init = function() {
		progress.events();
	};

	progress.init();

};